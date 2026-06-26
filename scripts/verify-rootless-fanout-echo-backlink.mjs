import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const a = JSON.parse(fs.readFileSync("integrations/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_ECHO_BACKLINK.json", "utf8"));
const b = JSON.parse(fs.readFileSync("public/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_ECHO_BACKLINK.json", "utf8"));

assert(JSON.stringify(a) === JSON.stringify(b), "public and integration receipts differ");
assert(a.schema === "ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_ECHO_BACKLINK", "schema mismatch");
assert(a.object === "ANTIMATTERIUM_CORE", "object mismatch");
assert(a.core_version === "0.2.16", "version mismatch");
assert(a.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.1-antimatterium-control-rootless-fanout-echo-closure", "control release mismatch");
assert(a.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28190185370", "control ci mismatch");
assert(a.binds_control.rootless_fanout_echo_closure_id === "39110d1cf58cedbfc54624d89a8e536e5d40f76821e18dd02d8ae615b9afb1a1", "fanout echo id mismatch");
assert(a.inherited.public_rootless_reconstruction_index_id === "7cab442dcb14c223ffe740cd1c1c9c5f107e7bd6ee48957db775d493e93e5e8e", "rootless index id mismatch");
assert(a.inherited.core_public_rootless_reconstruction_backlink_id === "ff854c79f3bba4166e1545b68f6cdcc18b9d2383ca2c9fdafeb818f50240d72f", "prior core backlink id mismatch");

for (const [key, value] of Object.entries(a.acceptance)) assert(value === true, "acceptance not true: " + key);
for (const [key, value] of Object.entries(a.boundaries)) assert(value === true, "boundary not true: " + key);

console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_ECHO_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CORE_CONTROL_V021_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_ECHO_MEMBER=true");
console.log("CORE_ROOTLESS_FANOUT_ECHO_BACKLINK_ID=" + a.core_rootless_fanout_echo_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
