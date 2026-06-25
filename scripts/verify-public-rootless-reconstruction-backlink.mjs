import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const a = JSON.parse(fs.readFileSync("integrations/control/ANTIMATTERIUM_CORE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK.json", "utf8"));
const b = JSON.parse(fs.readFileSync("public/control/ANTIMATTERIUM_CORE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK.json", "utf8"));

assert(JSON.stringify(a) === JSON.stringify(b), "public copy mismatch");
assert(a.schema === "ANTIMATTERIUM_CORE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK", "schema mismatch");
assert(a.object === "ANTIMATTERIUM_CORE", "object mismatch");
assert(a.core_version === "0.2.15", "version mismatch");
assert(a.control_public_rootless_reconstruction_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.0-antimatterium-control-public-rootless-reconstruction-index", "control rootless release mismatch");
assert(a.control_public_rootless_reconstruction_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28149722481", "control rootless ci run mismatch");
assert(a.bound_identifiers.public_rootless_reconstruction_index_id === "7cab442dcb14c223ffe740cd1c1c9c5f107e7bd6ee48957db775d493e93e5e8e", "rootless id mismatch");
assert(a.bound_identifiers.prior_core_public_ecosystem_index_backlink_id === "aa4f7e799f4c29cae39c9de07ee7ed011ba3eac42b831f743b00606d6e4639ed", "prior core id mismatch");

for (const [key, value] of Object.entries(a.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(a.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(a.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(a.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_CORE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CORE_NO_LOCAL_ROOT_REQUIRED_BOUND=true");
console.log("ANTIMATTERIUM_CORE_PUBLIC_RELEASES_SUFFICIENT_BOUND=true");
console.log("CORE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_ID=" + a.core_public_rootless_reconstruction_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
