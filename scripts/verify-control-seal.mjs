import fs from "node:fs";

const seal = JSON.parse(fs.readFileSync("ANTIMATTERIUM_CONTROL_SEAL.json", "utf8"));
const releases = JSON.parse(fs.readFileSync("public/releases.json", "utf8"));
const publicSurface = JSON.parse(fs.readFileSync("public/antimatterium.json", "utf8"));
const receipt = JSON.parse(fs.readFileSync("receipts/MISSION_CLASS_4_EXAMPLE_RECEIPT.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(seal.seal === "ANTIMATTERIUM_CONTROL_SEAL", "seal type mismatch");
assert(seal.status === "public_control_chain_closed", "seal status mismatch");
assert(seal.released_versions.length === 5, "expected five prior releases");
assert(releases.releases.length === 4, "public release index must bind four pre-seal releases");
assert(publicSurface.claims_current_industrial_antimatter_production === false, "public surface production overclaim");
assert(publicSurface.claims_current_starship_readiness === false, "public surface starship overclaim");
assert(receipt.source_authority_required === true, "mission receipt must require source authority");
assert(seal.claim_boundary.claims_current_industrial_antimatter_production === false, "seal production overclaim");
assert(seal.claim_boundary.claims_current_starship_readiness === false, "seal starship overclaim");
assert(seal.claim_boundary.claims_physical_production_instructions === false, "seal production instruction overclaim");
assert(seal.completion.PUBLIC_CONTROL_CHAIN_CLOSED === true, "control chain not closed");

console.log("ANTIMATTERIUM_CONTROL_SEAL_VERIFY_PASS=true");
console.log("PUBLIC_CONTROL_CHAIN_CLOSED=true");
console.log("RELEASE_INDEX_BOUND=true");
console.log("MISSION_RECEIPT_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
