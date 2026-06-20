import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("integrations/qvra/EXTERNAL_LAB_RECOGNITION_RECEIPT.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.receipt === "ANTIMATTERIUM_QVRA_EXTERNAL_LAB_RECOGNITION_RECEIPT", "receipt mismatch");
assert(receipt.version === "v0.2.0", "version mismatch");
assert(receipt.recognized_by.owner === "qvra", "recognizer mismatch");
assert(receipt.recognized_by.repository.includes("qvra/lab"), "qvra lab repo missing");
assert(receipt.recognized_by.pull_request.endsWith("/pull/1"), "qvra PR missing");
assert(receipt.recognized_by.release.includes("v0.1.0-qvra-antimatterium-lab-object"), "qvra release missing");
assert(receipt.recognized_stack.owner === "ANTIMATTERIUM", "recognized owner mismatch");
assert(receipt.recognized_stack.repository.includes("ANTIMATTERIUM/ANTIMATTERIUM"), "ANTIMATTERIUM repo missing");
assert(receipt.recognized_stack.core_release.includes("v0.1.9-antimatterium-invocorder-external-recognition"), "core release missing");
assert(receipt.recognized_stack.www_site === "https://antimatterium.github.io/WWW/", "site missing");
assert(receipt.recognized_stack.npm_package.includes("@antimatterium/antimatterium"), "npm package missing");
assert(receipt.recognized_stack.invocorder_release.includes("v2.0.1-antimatterium-evidence-profile"), "INVOCORDER release missing");

assert(receipt.recognition_scope.includes("runnable qvra lab object"), "lab object recognition missing");
assert(receipt.recognition_scope.includes("mission-run profile"), "mission profile missing");
assert(receipt.recognition_scope.includes("bounded claim object"), "bounded claim object missing");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.claims_physical_production_instructions === false, "instruction overclaim");

assert(receipt.completion.QVRA_EXTERNAL_LAB_RECOGNITION_BOUND === true, "qvra recognition not bound");
assert(receipt.completion.ANTIMATTERIUM_RUNNABLE_LAB_OBJECT_EXTERNALLY_RECOGNIZED === true, "runnable recognition missing");

console.log("ANTIMATTERIUM_QVRA_LAB_RECOGNITION_VERIFY_PASS=true");
console.log("QVRA_EXTERNAL_LAB_RECOGNITION_BOUND=true");
console.log("ANTIMATTERIUM_RUNNABLE_LAB_OBJECT_EXTERNALLY_RECOGNIZED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
