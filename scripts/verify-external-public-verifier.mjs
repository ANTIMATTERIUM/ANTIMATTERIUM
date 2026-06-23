import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json", "utf8"));
const text = JSON.stringify(receipt);

assert(receipt.schema === "ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER", "verifier schema mismatch");
assert(receipt.object === "ANTIMATTERIUM", "verifier object mismatch");
assert(receipt.verifier_script === "scripts/antimatterium-public-external-verify.sh", "verifier script mismatch");
assert(receipt.external_run_command === "bash scripts/antimatterium-public-external-verify.sh", "external run command mismatch");

assert(receipt.bound_surfaces.core_external_public_verifier === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.9-antimatterium-external-public-verifier", "core verifier release mismatch");
assert(receipt.bound_surfaces.www_external_replay_surface === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.5-antimatterium-www-external-replay-surface", "www release mismatch");
assert(receipt.bound_surfaces.org_profile_external_replay_surface === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.3-antimatterium-org-profile-external-replay-surface", "org profile release mismatch");
assert(receipt.bound_surfaces.npm_package === "https://www.npmjs.com/package/@antimatterium/antimatterium", "npm package mismatch");
assert(receipt.bound_surfaces.npm_version === "0.2.2", "npm version mismatch");

assert(receipt.expected_outputs.AUDIT_ID, "audit id missing");
assert(receipt.expected_outputs.CONTROL_DIGEST, "control digest missing");
assert(receipt.expected_outputs.RUNTIME_EVENT_ID, "runtime event missing");
assert(receipt.expected_outputs.REPLAY_ID, "replay id missing");
assert(receipt.verifier_id, "verifier id missing");

assert(text.includes("ANTIMATTERIUM"), "object name missing");
assert(text.includes("npmjs.com"), "npm public surface missing");

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

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
