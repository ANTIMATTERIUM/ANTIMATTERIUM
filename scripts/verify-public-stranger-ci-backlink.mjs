import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const a = JSON.parse(fs.readFileSync("integrations/control/ANTIMATTERIUM_CORE_PUBLIC_STRANGER_CI_BACKLINK.json", "utf8"));
const b = JSON.parse(fs.readFileSync("public/control/ANTIMATTERIUM_CORE_PUBLIC_STRANGER_CI_BACKLINK.json", "utf8"));

assert(JSON.stringify(a) === JSON.stringify(b), "public copy mismatch");
assert(a.schema === "ANTIMATTERIUM_CORE_PUBLIC_STRANGER_CI_BACKLINK", "schema mismatch");
assert(a.object === "ANTIMATTERIUM_CORE", "object mismatch");
assert(a.core_version === "0.2.13", "version mismatch");
assert(a.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.6-antimatterium-control-public-stranger-ci", "control release mismatch");
assert(a.public_stranger_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28130879044", "public stranger ci run mismatch");
assert(a.bound_identifiers.public_stranger_ci_id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");
assert(a.bound_identifiers.public_release_matrix_id === "c062a81788d930fe0924526b94d5b6dbadc027337d2ab416c86710771d8c27c1", "matrix id mismatch");
assert(a.bound_identifiers.stranger_final_audit_id === "95b03e5adbaad27eafa524a020c83de0bf590d7bf9a9a92e89b967b48a0ff9e7", "audit id mismatch");
assert(a.bound_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "closure id mismatch");
assert(a.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence id mismatch");
assert(a.bound_identifiers.prior_core_control_backlink_id === "603a4fb88b0a00d4d10b904b870c77f3c9354f90442e180261957da59014ccf7", "prior backlink id mismatch");

for (const [key, value] of Object.entries(a.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(a.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(a.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(a.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_CORE_PUBLIC_STRANGER_CI_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CORE_PUBLIC_STRANGER_CI_RUN_BOUND=true");
console.log("ANTIMATTERIUM_CORE_CONTROL_V016_RELEASE_BOUND=true");
console.log("CORE_PUBLIC_STRANGER_CI_BACKLINK_ID=" + a.core_public_stranger_ci_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
