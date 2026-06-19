import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("NPM_PUBLICATION_RECEIPT.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.receipt === "ANTIMATTERIUM_NPM_PUBLICATION_RECEIPT", "receipt mismatch");
assert(receipt.published_package === "@antimatterium/antimatterium", "package mismatch");
assert(receipt.published_version === "0.1.6", "version mismatch");
assert(receipt.npm_latest === "0.1.6", "latest mismatch");
assert(receipt.completion.NPM_PUBLICATION_COMPLETE === true, "npm publication not complete");
assert(receipt.completion.NPM_PACKAGE_PUBLIC === true, "npm package not public");
assert(receipt.completion.NPM_VERSION_BOUND === true, "npm version not bound");
assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.claims_physical_production_instructions === false, "production instruction overclaim");

console.log("ANTIMATTERIUM_NPM_PUBLICATION_RECEIPT_VERIFY_PASS=true");
console.log("NPM_PUBLICATION_COMPLETE=true");
console.log("NPM_PACKAGE_PUBLIC=true");
console.log("NPM_VERSION_BOUND=true");
