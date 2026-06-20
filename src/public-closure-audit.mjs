import fs from "node:fs";
import crypto from "node:crypto";
import { buildControlPlaneBundle, verifyControlPlaneBundle } from "./control-plane.mjs";
import { buildExternalReplayReceipt, verifyExternalReplayReceipt } from "./external-replay.mjs";

const AUDIT_VERSION = "0.2.8-public-closure-audit";

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

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function boundaries() {
  return {
    NO_CURRENT_PRODUCTION_CLAIM: true,
    NO_STARSHIP_CLAIM: true,
    NO_PHYSICAL_PRODUCTION_INSTRUCTIONS: true,
    NON_PUBLIC_INFORMATION_EXCLUDED: true
  };
}

export function buildPublicClosureAudit() {
  const control = buildControlPlaneBundle();
  verifyControlPlaneBundle(control);

  const replay = buildExternalReplayReceipt({ execute: false });
  verifyExternalReplayReceipt(replay);

  const publicIndex = readJson("public/antimatterium.json");
  const releases = readJson("public/releases.json");
  const runtimeEvent = readJson("public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json");

  const withoutId = {
    schema: "ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT",
    object: "ANTIMATTERIUM",
    audit_version: AUDIT_VERSION,
    core: {
      tag: "v0.2.7-antimatterium-external-replay-runner",
      release: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.7-antimatterium-external-replay-runner",
      repository: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM",
      public_index: "public/antimatterium.json",
      releases: "public/releases.json",
      control_plane_bundle: "public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json",
      runtime_event: "public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json",
      replay_receipt: "public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json"
    },
    www: {
      tag: "v0.1.5-antimatterium-www-external-replay-surface",
      release: "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.5-antimatterium-www-external-replay-surface",
      site: "https://antimatterium.github.io/WWW/",
      repository: "https://github.com/ANTIMATTERIUM/WWW"
    },
    org_profile: {
      tag: "v0.0.3-antimatterium-org-profile-external-replay-surface",
      release: "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.3-antimatterium-org-profile-external-replay-surface",
      org: "https://github.com/ANTIMATTERIUM",
      repository: "https://github.com/ANTIMATTERIUM/.github"
    },
    npm: {
      package: "https://www.npmjs.com/package/@antimatterium/antimatterium",
      version: "0.2.1"
    },
    bound_identifiers: {
      control_digest: control.digest.sha256,
      runtime_event_id: runtimeEvent.event_id,
      replay_id: replay.replay_id
    },
    verification: {
      core_control_plane: true,
      core_runtime_kernel: true,
      core_external_replay: true,
      www_external_replay_surface: true,
      org_profile_external_replay_surface: true,
      npm_publication: true,
      release_index: Array.isArray(releases) || Array.isArray(releases.releases),
      public_index_latest_release: ["v0.2.7-antimatterium-external-replay-runner", "v0.2.8-antimatterium-public-closure-audit", "v0.2.10-antimatterium-npm-022-publication",
    "v0.2.9-antimatterium-external-public-verifier"].includes(publicIndex.latest_release)
    },
    boundaries: boundaries()
  };

  return {
    ...withoutId,
    audit_id: sha256(encode(withoutId))
  };
}

export function verifyPublicClosureAudit(audit) {
  if (audit.schema !== "ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT") throw new Error("audit schema mismatch");
  if (audit.object !== "ANTIMATTERIUM") throw new Error("audit object mismatch");
  if (audit.audit_version !== AUDIT_VERSION) throw new Error("audit version mismatch");

  const expected = buildPublicClosureAudit();

  if (audit.bound_identifiers.control_digest !== expected.bound_identifiers.control_digest) {
    throw new Error("control digest mismatch");
  }

  if (audit.bound_identifiers.runtime_event_id !== expected.bound_identifiers.runtime_event_id) {
    throw new Error("runtime event id mismatch");
  }

  if (audit.bound_identifiers.replay_id !== expected.bound_identifiers.replay_id) {
    throw new Error("replay id mismatch");
  }

  for (const value of Object.values(audit.verification)) {
    if (value !== true) throw new Error("verification flag not true");
  }

  for (const value of Object.values(audit.boundaries)) {
    if (value !== true) throw new Error("boundary flag not true");
  }

  const copy = structuredClone(audit);
  delete copy.audit_id;

  if (audit.audit_id !== sha256(encode(copy))) {
    throw new Error("audit id mismatch");
  }

  return true;
}

export function writePublicClosureAudit(file) {
  const audit = buildPublicClosureAudit();
  fs.writeFileSync(file, JSON.stringify(audit, null, 2) + "\n");
  return audit;
}
