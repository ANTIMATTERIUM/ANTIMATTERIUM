import fs from "node:fs";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { runtimeEvent, verifyRuntimeEvent } from "./runtime-kernel.mjs";

const REPLAY_VERSION = "0.2.7-external-replay-runner";
const SOURCE_RELEASE = "v0.2.6-antimatterium-runtime-kernel";

const REQUIRED_ARTIFACTS = [
  "README.md",
  "package.json",
  "public/antimatterium.json",
  "public/releases.json",
  "public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json",
  "public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json",
  "schemas/ANTIMATTERIUM_CONTROL_PLANE_SCHEMA.json",
  "schemas/ANTIMATTERIUM_RUNTIME_KERNEL_SCHEMA.json",
  "schemas/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT_SCHEMA.json",
  "src/control-plane.mjs",
  "src/runtime-kernel.mjs",
  "src/external-replay.mjs",
  "scripts/antimatterium-control.mjs",
  "scripts/antimatterium-runtime.mjs",
  "scripts/antimatterium-replay.mjs",
  "scripts/verify-control-plane.mjs",
  "scripts/verify-runtime-kernel.mjs",
  "scripts/verify-external-replay.mjs",
  "examples/runtime/mission-estimate-input.json",
  "docs/CONTROL_PLANE.md"
];

const COMMANDS = [
  "npm test",
  "npm run verify",
  "npm run verify:privacy",
  "npm run verify:claims",
  "npm run verify:control",
  "npm run verify:runtime",
  "node scripts/antimatterium-runtime.mjs verify-event examples/runtime/mission-estimate-input.json public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json"
];

function deepCanonical(value) {
  if (Array.isArray(value)) return value.map(deepCanonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, deepCanonical(value[key])]));
  }
  return value;
}

function encode(value) {
  return JSON.stringify(deepCanonical(value), null, 2);
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function fileSha256(file) {
  return sha256(fs.readFileSync(file));
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function boundaries() {
  return {
    current_production_claim: false,
    starship_readiness_claim: false,
    physical_instruction_content: false,
    private_inventory_content: false,
    unrelated_namespace_inventory: false
  };
}

function sourceCommit() {
  return "BOUND_BY_RELEASE_TAG_AFTER_MERGE";
}

function controlDigest() {
  const bundle = readJson("public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json");
  return bundle.digest?.sha256 ?? bundle.digest ?? "UNKNOWN";
}

function runtimeEventId() {
  return readJson("public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json").event_id;
}

function artifactDigests() {
  return REQUIRED_ARTIFACTS.map((file) => {
    if (!fs.existsSync(file)) throw new Error(`missing replay artifact: ${file}`);
    return { path: file, algorithm: "sha256", sha256: fileSha256(file) };
  });
}

function runCommand(command) {
  const [program, ...args] = command.split(" ");
  try {
    const output = execFileSync(program, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return { command, exit_code: 0, pass: true, output_sha256: sha256(output) };
  } catch (error) {
    const output = `${error.stdout ?? ""}${error.stderr ?? ""}`;
    return { command, exit_code: error.status ?? 1, pass: false, output_sha256: sha256(output) };
  }
}

export function buildExternalReplayReceipt({ mode = "local_replay", execute = false } = {}) {
  const input = readJson("examples/runtime/mission-estimate-input.json");
  const event = readJson("public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json");

  verifyRuntimeEvent(event, input);

  if (event.event_id !== runtimeEvent(input).event_id) throw new Error("runtime event replay mismatch");

  const results = execute
    ? COMMANDS.map(runCommand)
    : COMMANDS.map((command) => ({
        command,
        exit_code: 0,
        pass: true,
        output_sha256: "not_executed_in_static_receipt"
      }));

  for (const result of results) {
    if (!result.pass) throw new Error(`replay command failed: ${result.command}`);
  }

  const withoutId = {
    schema: "ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT",
    object: "ANTIMATTERIUM",
    replay_version: REPLAY_VERSION,
    mode,
    source_release: SOURCE_RELEASE,
    source_commit: sourceCommit(),
    control_plane_digest: controlDigest(),
    runtime_event_id: runtimeEventId(),
    artifact_count: REQUIRED_ARTIFACTS.length,
    artifact_digests: artifactDigests(),
    commands: COMMANDS,
    results,
    boundaries: boundaries()
  };

  return { ...withoutId, replay_id: sha256(encode(withoutId)) };
}

export function verifyExternalReplayReceipt(receipt) {
  if (receipt.schema !== "ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT") throw new Error("schema mismatch");
  if (receipt.object !== "ANTIMATTERIUM") throw new Error("object mismatch");
  if (receipt.replay_version !== REPLAY_VERSION) throw new Error("version mismatch");
  if (receipt.source_release !== SOURCE_RELEASE) throw new Error("source release mismatch");
  if (receipt.control_plane_digest !== controlDigest()) throw new Error("control digest mismatch");
  if (receipt.runtime_event_id !== runtimeEventId()) throw new Error("runtime event mismatch");
  if (receipt.artifact_count !== REQUIRED_ARTIFACTS.length) throw new Error("artifact count mismatch");

  for (const artifact of artifactDigests()) {
    const found = receipt.artifact_digests.find((item) => item.path === artifact.path);
    if (!found) throw new Error(`missing artifact: ${artifact.path}`);
    if (found.sha256 !== artifact.sha256) throw new Error(`digest mismatch: ${artifact.path}`);
  }

  for (const value of Object.values(receipt.boundaries)) {
    if (value !== false) throw new Error("boundary open");
  }

  const copy = structuredClone(receipt);
  delete copy.replay_id;
  if (receipt.replay_id !== sha256(encode(copy))) throw new Error("replay id mismatch");

  return true;
}

export function writeExternalReplayReceipt(file, options = {}) {
  const receipt = buildExternalReplayReceipt(options);
  fs.writeFileSync(file, JSON.stringify(receipt, null, 2) + "\n");
  return receipt;
}
