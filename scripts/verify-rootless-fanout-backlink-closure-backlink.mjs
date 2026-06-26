import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const a = JSON.parse(fs.readFileSync("integrations/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK.json", "utf8"));
const b = JSON.parse(fs.readFileSync("public/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK.json", "utf8"));

assert(JSON.stringify(a) === JSON.stringify(b), "public/integration mismatch");
assert(a.schema === "ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK", "schema mismatch");
assert(a.object === "ANTIMATTERIUM_CORE", "object mismatch");
assert(a.core_version === "0.2.17", "version mismatch");
assert(a.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.2-antimatterium-control-rootless-fanout-backlink-closure", "control v022 release mismatch");
assert(a.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28265584824", "control v022 ci mismatch");
assert(a.binds_control.rootless_fanout_backlink_closure_id === "9d411e38f3dd5a7f97bd33e4d8955a4646c6bcd346ffed2c97f6176b32d17922", "closure id mismatch");
assert(a.inherited.core_rootless_fanout_echo_backlink_id === "d19eda934cb909a0e4d928990c67fb21838d374e1570a9d8004f67ab0d4db93e", "prior core id mismatch");

for (const [k, v] of Object.entries(a.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(a.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CORE_CONTROL_V022_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_MEMBER=true");
console.log("CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=" + a.core_rootless_fanout_backlink_closure_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
