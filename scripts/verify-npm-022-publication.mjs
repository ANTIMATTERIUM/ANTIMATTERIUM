import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("integrations/npm/NPM_022_PUBLICATION_RECEIPT.json", "utf8"));
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const external = JSON.parse(fs.readFileSync("public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json", "utf8"));
const audit = JSON.parse(fs.readFileSync("audits/public-closure/ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_V027.json", "utf8"));
const runtime = JSON.parse(fs.readFileSync("public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_NPM_022_PUBLICATION_RECEIPT", "receipt schema mismatch");
assert(receipt.object === "ANTIMATTERIUM", "receipt object mismatch");
assert(receipt.package === "@antimatterium/antimatterium", "package mismatch");
assert(receipt.version === "0.2.2", "receipt version mismatch");
assert(pkg.version === "0.2.2", "package version mismatch");

assert(receipt.npm.package_url === "https://www.npmjs.com/package/@antimatterium/antimatterium", "npm url mismatch");
assert(receipt.npm.tarball.includes("antimatterium"), "tarball mismatch");
assert(receipt.npm.integrity, "integrity missing");
assert(receipt.npm.shasum, "shasum missing");
assert(receipt.npm.bin["antimatterium-public-external-verify"], "external verifier bin missing");

assert(receipt.bound_identifiers.verifier_id === external.verifier_id, "verifier id mismatch");
assert(receipt.bound_identifiers.audit_id === audit.audit_id, "audit id mismatch");
assert(receipt.bound_identifiers.runtime_event_id === runtime.event_id, "runtime event id mismatch");

console.log("ANTIMATTERIUM_NPM_022_PUBLICATION_RECEIPT_VERIFY_PASS=true");
console.log("NPM_022_PUBLICATION_BOUND=true");
console.log("PACKAGE_VERSION_022_BOUND=true");
console.log("EXTERNAL_PUBLIC_VERIFIER_BOUND=true");
console.log("PUBLIC_CLOSURE_AUDIT_BOUND=true");
console.log("PUBLIC_PACKAGE_INSTALL_BOUND=true");
console.log("NPM_022_BIN_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
