import fs from "node:fs";
import crypto from "node:crypto";
import { buildPublicClosureAudit } from "../src/public-closure-audit.mjs";
import { buildExternalReplayReceipt } from "../src/external-replay.mjs";
import { buildControlPlaneBundle } from "../src/control-plane.mjs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json", "utf8"));
const script = fs.readFileSync("scripts/antimatterium-public-external-verify.sh", "utf8");

const audit = buildPublicClosureAudit();
const replay = buildExternalReplayReceipt({ execute: false });
const control = buildControlPlaneBundle();
const runtimeEvent = JSON.parse(fs.readFileSync("public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER", "receipt schema mismatch");
assert(receipt.object === "ANTIMATTERIUM", "receipt object mismatch");
assert(receipt.verifier_version === "0.2.9-external-public-verifier", "verifier version mismatch");

assert(receipt.expected_outputs.AUDIT_ID === audit.audit_id, "audit id mismatch");
assert(receipt.expected_outputs.CONTROL_DIGEST === control.digest.sha256, "control digest mismatch");
assert(receipt.expected_outputs.RUNTIME_EVENT_ID === runtimeEvent.event_id, "runtime event id mismatch");
assert(receipt.expected_outputs.REPLAY_ID === replay.replay_id, "replay id mismatch");

assert(script.includes("git clone --depth 1"), "clone command missing");
assert(script.includes("npm run verify:audit"), "audit verify command missing");
assert(script.includes("npm run verify:external-public"), "external public verify command missing");
assert(script.includes("ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFY_PASS=true"), "pass marker missing");

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

const copy = structuredClone(receipt);
delete copy.verifier_id;
const expectedVerifierId = crypto.createHash("sha256").update(JSON.stringify(copy)).digest("hex");
assert(receipt.verifier_id === expectedVerifierId, "verifier id mismatch");

console.log("ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_STRANGER_RUN_SCRIPT_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_ID_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_RUNTIME_EVENT_BOUND=true");
console.log("ANTIMATTERIUM_REPLAY_ID_BOUND=true");
console.log("NON_PUBLIC_INFORMATION_EXCLUDED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
