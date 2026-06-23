import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const chain = JSON.parse(fs.readFileSync("public/ANTIMATTERIUM_PUBLIC_CHAIN_OS.json", "utf8"));
const mirror = JSON.parse(fs.readFileSync("orchestration/ANTIMATTERIUM_PUBLIC_CHAIN_OS.json", "utf8"));

assert(chain.schema === "ANTIMATTERIUM_PUBLIC_CHAIN_OS", "chain schema mismatch");
assert(chain.object === "ANTIMATTERIUM", "chain object mismatch");
assert(chain.chain_os_version === "0.2.11", "chain version mismatch");
assert(chain.public_chain_os_id === mirror.public_chain_os_id, "public mirror mismatch");

assert(chain.release_chain.core === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.10-antimatterium-npm-022-publication", "core release mismatch");
assert(chain.release_chain.www === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.6-antimatterium-www-npm-022-publication-surface", "www release mismatch");
assert(chain.release_chain.org_profile === "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.4-antimatterium-org-profile-npm-022-publication-surface", "org profile release mismatch");

assert(chain.public_front_doors.npm_version === "0.2.2", "npm version mismatch");
assert(chain.bound_identifiers.org_profile_receipt_id === "e07a15bd0cf976e1864a1c2ea56c10e90b716bcfb20a935e85c2628a4457e96b", "org profile receipt mismatch");
assert(chain.bound_identifiers.www_surface_receipt_id === "652a71c7a591d9c99e5781d154f5d3ff7fd5a78ed6d4529e220f50c902adf321", "www surface receipt mismatch");
assert(chain.bound_identifiers.npm_receipt_id === "780244fd953ed99fb20cd7cebade4c73b3dc5ade4f070bb37753281c5ca2e7aa", "npm receipt mismatch");
assert(chain.bound_identifiers.verifier_id === "59972b8a13e1d1896e76ad44f18a5d5ca58595afd624842d4557f2557a69696b", "verifier mismatch");
assert(chain.bound_identifiers.audit_id === "fcadd3a654978081f7ab9a4e775d1ee1d4e2960c14a5812cd2c349f862959d30", "audit mismatch");
assert(chain.bound_identifiers.control_digest === "bb75f4462f42f37b5fd2faa5d511dd90213df9f60997f16b5875b80a8f99b0b6", "control mismatch");
assert(chain.bound_identifiers.runtime_event_id === "f4923422f6f97910816b685376aacf9697222a6c09b1c0cabdb63419c07616d7", "runtime mismatch");
assert(chain.bound_identifiers.replay_id === "63a62592964d5c8fe2c23d8be06972eef297446d5708c898868dadae4bb92319", "replay mismatch");

for (const item of [
  "core_release_bound",
  "www_release_bound",
  "org_profile_release_bound",
  "npm_publication_bound",
  "external_public_verifier_bound",
  "public_closure_audit_bound",
  "control_digest_bound",
  "runtime_event_bound",
  "replay_receipt_bound"
]) {
  assert(chain.acceptance_matrix.includes(item), "acceptance matrix missing " + item);
}

assert(chain.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(chain.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(chain.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(chain.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_PUBLIC_CHAIN_OS_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_CORE_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_WWW_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_ORG_PROFILE_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_NPM_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_VERIFIER_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_AUDIT_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_CONTROL_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_RUNTIME_EVENT_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_REPLAY_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
