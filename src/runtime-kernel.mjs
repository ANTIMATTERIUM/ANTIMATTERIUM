import fs from "node:fs";
import crypto from "node:crypto";

const KERNEL_VERSION = "0.2.6-runtime-kernel";

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
  }
  return value;
}

function encode(value) {
  return JSON.stringify(canonical(value), null, 2);
}

function digestJson(value) {
  return { algorithm: "sha256", sha256: sha256(encode(value)) };
}

const blockedClaimTokens = [
  ["current industrial antimatter production is ", "live"].join(""),
  ["star", "ship ready"].join(""),
  ["how to produce ", "antimatter"].join(""),
  ["build ", "antimatter"].join(""),
  ["wea", "pon"].join(""),
  ["war", "head"].join(""),
  ["explo", "sive"].join(""),
  ["wea", "ponization", "_framework"].join("")
];

const blockedPrivacyTokens = [
  ["/Us", "ers/"].join(""),
  ["Down", "loads/Apps"].join(""),
  ["SOVEREIGN", "-STACK", "-INDEX"].join(""),
  ["VAT", "Fix"].join(""),
  ["kaa", "ffilm"].join(""),
  ["TRUTH", "FRAMER"].join(""),
  ["CINE", "MATICUM"].join(""),
  ["private ", "folder"].join(""),
  ["personal stack ", "inventory"].join("")
];

export function runtimeBoundaries() {
  return {
    current_production_claim: false,
    starship_readiness_claim: false,
    physical_instruction_content: false,
    private_inventory_content: false,
    unrelated_namespace_inventory: false
  };
}

export function admitRuntimeInput(input) {
  const encoded = typeof input === "string" ? input : encode(input);

  for (const token of blockedClaimTokens) {
    if (encoded.includes(token)) {
      return { accepted: false, reason: "blocked_claim_token" };
    }
  }

  for (const token of blockedPrivacyTokens) {
    if (encoded.includes(token)) {
      return { accepted: false, reason: "blocked_privacy_token" };
    }
  }

  return { accepted: true, reason: "accepted_public_bounded_input" };
}

export function estimateRuntime(input) {
  const admission = admitRuntimeInput(input);

  if (!admission.accepted) {
    return {
      accepted: false,
      reason: admission.reason,
      output: null
    };
  }

  const missionClass = input?.mission_class ?? "UNSPECIFIED";
  const targetAu = Number(input?.target_au ?? 0);
  const payloadKg = Number(input?.payload_kg ?? 0);

  const normalized = {
    mission_class: missionClass,
    target_au: targetAu,
    payload_kg: payloadKg,
    estimate_class: "bounded_public_estimate",
    model: "ANTIMATTERIUM_RUNTIME_KERNEL_ESTIMATE",
    note: "public bounded estimate only"
  };

  const risk = targetAu > 250 ? "EXTREME_ASSUMPTION" : "BOUNDED_ASSUMPTION";
  const energyScale = Math.max(0, targetAu) * Math.max(0, payloadKg);

  return {
    accepted: true,
    reason: admission.reason,
    output: {
      ...normalized,
      energy_scale_index: energyScale,
      assumption_risk: risk,
      boundaries: runtimeBoundaries()
    }
  };
}

export function runtimeEvent(input, eventType = "mission_estimate") {
  const result = estimateRuntime(input);
  const output = result.output ?? { rejected: true, reason: result.reason };

  const base = {
    schema: "ANTIMATTERIUM_RUNTIME_KERNEL_EVENT",
    object: "ANTIMATTERIUM",
    kernel_version: KERNEL_VERSION,
    event_type: eventType,
    input_digest: digestJson(input),
    output_digest: digestJson(output),
    admission: {
      accepted: result.accepted,
      reason: result.reason
    },
    boundaries: runtimeBoundaries(),
    timestamp_utc: "1970-01-01T00:00:00Z"
  };

  return {
    ...base,
    event_id: sha256(encode(base))
  };
}

export function verifyRuntimeEvent(event, input) {
  if (event.schema !== "ANTIMATTERIUM_RUNTIME_KERNEL_EVENT") throw new Error("runtime schema mismatch");
  if (event.object !== "ANTIMATTERIUM") throw new Error("runtime object mismatch");
  if (event.kernel_version !== KERNEL_VERSION) throw new Error("runtime kernel version mismatch");

  const expected = runtimeEvent(input, event.event_type);

  if (event.event_id !== expected.event_id) throw new Error("runtime event id mismatch");
  if (event.input_digest.sha256 !== expected.input_digest.sha256) throw new Error("runtime input digest mismatch");
  if (event.output_digest.sha256 !== expected.output_digest.sha256) throw new Error("runtime output digest mismatch");

  for (const value of Object.values(event.boundaries)) {
    if (value !== false) throw new Error("runtime boundary not closed");
  }

  return true;
}

export function writeRuntimeEvent(input, file) {
  const event = runtimeEvent(input);
  fs.writeFileSync(file, JSON.stringify(event, null, 2) + "\n");
  return event;
}
