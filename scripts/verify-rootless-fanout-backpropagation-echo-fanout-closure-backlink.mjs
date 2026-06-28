import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const a = JSON.parse(fs.readFileSync("integrations/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK.json", "utf8"));
const b = JSON.parse(fs.readFileSync("public/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK.json", "utf8"));

assert(JSON.stringify(a) === JSON.stringify(b), "public/integration mismatch");
assert(a.schema === "ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK", "schema mismatch");
assert(a.object === "ANTIMATTERIUM_CORE", "object mismatch");
assert(a.core_version === "0.2.19", "version mismatch");
assert(a.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.4-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-closure", "control v024 release mismatch");
assert(a.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28281726132", "control v024 ci mismatch");
assert(a.binds_control.rootless_fanout_backpropagation_echo_fanout_closure_id === "f295de72115effeba53942447cb96919bc468661d35a28223057e57890b58f8c", "v024 fanout closure id mismatch");
assert(a.inherited.core_rootless_fanout_backpropagation_echo_backlink_id === "a42952ee829a77a4916e5b1fd4f6c16aa3baf7167f3997c4fdad89d31b4e844e", "prior core id mismatch");

for (const [k, v] of Object.entries(a.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(a.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CORE_CONTROL_V024_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_MEMBER=true");
console.log("CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK_ID=" + a.core_rootless_fanout_backpropagation_echo_fanout_closure_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
