import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("integrations/npm/NPM_021_PUBLICATION_RECEIPT.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.receipt === "ANTIMATTERIUM_NPM_021_PUBLICATION_RECEIPT", "receipt mismatch");
assert(receipt.version === "v0.2.2", "receipt version mismatch");

assert(pkg.name === "@antimatterium/antimatterium", "package name mismatch");
assert(pkg.version === "0.2.1", "local package version must remain 0.2.1 for published artifact receipt");

assert(receipt.published_package.name === "@antimatterium/antimatterium", "published package mismatch");
assert(receipt.published_package.version === "0.2.1", "published version mismatch");
assert(receipt.published_package.package_url === "https://www.npmjs.com/package/@antimatterium/antimatterium", "package url mismatch");
assert(receipt.published_package.install === "npm i @antimatterium/antimatterium", "install command mismatch");

assert(receipt.bound_release.antimatterium_core.includes("v0.2.1-antimatterium-qvra-full-chain-recognition"), "core release missing");

assert(receipt.qvra_chain.lab.includes("v0.1.0-qvra-antimatterium-lab-object"), "qvra lab missing");
assert(receipt.qvra_chain.index.includes("v0.1.0-qvra-index-antimatterium-runnable-object"), "qvra index missing");
assert(receipt.qvra_chain.launch.includes("v0.1.0-qvra-launch-antimatterium-runnable-object"), "qvra launch missing");
assert(receipt.qvra_chain.meta.includes("v0.1.0-qvra-meta-antimatterium-recognition"), "qvra meta missing");
assert(receipt.qvra_chain.profile.includes("v0.1.0-qvra-profile-antimatterium-recognition"), "qvra profile missing");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.claims_physical_production_instructions === false, "instruction overclaim");

assert(receipt.completion.NPM_021_PUBLICATION_BOUND === true, "npm publication not bound");
assert(receipt.completion.PACKAGE_VERSION_021_BOUND === true, "package version not bound");
assert(receipt.completion.QVRA_FULL_CHAIN_BOUND === true, "qvra full chain not bound");
assert(receipt.completion.PUBLIC_PACKAGE_INSTALL_BOUND === true, "public package install not bound");

console.log("ANTIMATTERIUM_NPM_021_PUBLICATION_RECEIPT_VERIFY_PASS=true");
console.log("NPM_021_PUBLICATION_BOUND=true");
console.log("PACKAGE_VERSION_021_BOUND=true");
console.log("QVRA_FULL_CHAIN_BOUND=true");
console.log("PUBLIC_PACKAGE_INSTALL_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
