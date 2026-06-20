import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("integrations/invocorder/EXTERNAL_RECOGNITION_RECEIPT.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.receipt === "ANTIMATTERIUM_INVOCORDER_EXTERNAL_RECOGNITION_RECEIPT", "receipt mismatch");
assert(receipt.version === "v0.1.9", "version mismatch");
assert(receipt.recognized_by.owner === "INVOCORDER", "recognizer mismatch");
assert(receipt.recognized_by.repository.includes("INVOCORDER/INVOCORDER"), "INVOCORDER repo missing");
assert(receipt.recognized_by.pull_request.endsWith("/pull/31"), "INVOCORDER PR missing");
assert(receipt.recognized_by.release.includes("v2.0.1-antimatterium-evidence-profile"), "INVOCORDER release missing");
assert(receipt.recognized_stack.owner === "ANTIMATTERIUM", "recognized owner mismatch");
assert(receipt.recognized_stack.repository.includes("ANTIMATTERIUM/ANTIMATTERIUM"), "ANTIMATTERIUM repo missing");
assert(receipt.recognized_stack.core_release.includes("v0.1.8-antimatterium-cross-stack-bindings"), "core release missing");
assert(receipt.recognized_stack.www_site === "https://antimatterium.github.io/WWW/", "site missing");
assert(receipt.recognized_stack.npm_package.includes("@antimatterium/antimatterium"), "npm package missing");
assert(receipt.recognition_scope.includes("mission-run machine-action evidence profile"), "recognition scope missing");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.claims_physical_production_instructions === false, "production instruction overclaim");

assert(receipt.completion.INVOCORDER_EXTERNAL_RECOGNITION_BOUND === true, "external recognition not bound");
assert(receipt.completion.ANTIMATTERIUM_MACHINE_ACTION_EVIDENCE_EXTERNALLY_RECOGNIZED === true, "external recognition completion missing");

console.log("ANTIMATTERIUM_INVOCORDER_RECOGNITION_VERIFY_PASS=true");
console.log("INVOCORDER_EXTERNAL_RECOGNITION_BOUND=true");
console.log("ANTIMATTERIUM_MACHINE_ACTION_EVIDENCE_EXTERNALLY_RECOGNIZED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
