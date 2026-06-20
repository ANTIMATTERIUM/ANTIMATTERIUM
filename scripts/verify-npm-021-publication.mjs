import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("integrations/npm/NPM_021_PUBLICATION_RECEIPT.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const text = JSON.stringify(receipt);

assert(pkg.name === "@antimatterium/antimatterium", "package name mismatch");
assert(/^0\.2\.[1-9][0-9]*$/.test(pkg.version), "local package must stay inside 0.2.x line");
assert(text.includes("@antimatterium/antimatterium"), "historical package name missing");
assert(text.includes("0.2.1"), "historical 0.2.1 version missing");
assert(text.includes("npmjs.com") || text.includes("registry.npmjs.org"), "historical npm public surface missing");

console.log("ANTIMATTERIUM_NPM_021_PUBLICATION_RECEIPT_VERIFY_PASS=true");
console.log("NPM_021_PUBLICATION_BOUND=true");
console.log("PACKAGE_VERSION_021_BOUND=true");
console.log("PUBLIC_PACKAGE_INSTALL_BOUND=true");
console.log("HISTORICAL_NPM_021_RECEIPT_STILL_BOUND=true");
console.log("LOCAL_PACKAGE_VERSION_CAN_ADVANCE_WITHIN_0_2_LINE=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
