import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("receipts/MISSION_CLASS_4_EXAMPLE_RECEIPT.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.receipt === "ANTIMATTERIUM_MISSION_ESTIMATE_RECEIPT", "receipt type mismatch");
assert(receipt.mission_class === 4, "mission class mismatch");
assert(receipt.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claims_current_starship_readiness === false, "starship overclaim");
assert(receipt.source_authority_required === true, "source authority must be required");
assert(receipt.completion.MISSION_RUNNER_RECEIPT_BOUND === true, "receipt not bound");

console.log("ANTIMATTERIUM_RECEIPTS_VERIFY_PASS=true");
console.log("MISSION_RUNNER_RECEIPT_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
