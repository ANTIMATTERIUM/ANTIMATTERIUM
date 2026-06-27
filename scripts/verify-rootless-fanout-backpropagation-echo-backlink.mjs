import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const a = JSON.parse(fs.readFileSync("integrations/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK.json", "utf8"));
const b = JSON.parse(fs.readFileSync("public/control/ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK.json", "utf8"));

assert(JSON.stringify(a) === JSON.stringify(b), "public/integration mismatch");
assert(a.schema === "ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK", "schema mismatch");
assert(a.object === "ANTIMATTERIUM_CORE", "object mismatch");
assert(a.core_version === "0.2.18", "version mismatch");
assert(a.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.3-antimatterium-control-rootless-fanout-backpropagation-echo-closure", "control v023 release mismatch");
assert(a.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28267965467", "control v023 ci mismatch");
assert(a.binds_control.rootless_fanout_backpropagation_echo_closure_id === "01ac56b5b2f42077580d464d5053ea3ae5860f3a2f05a46d68ca1c1805215649", "v023 echo closure id mismatch");
assert(a.inherited.core_rootless_fanout_backlink_closure_backlink_id === "2cdb00b9cfb8812aa58f9afcbaa05ab2ba84ad49f9946a5ba69994c48111f3ef", "prior core id mismatch");

for (const [k, v] of Object.entries(a.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(a.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CORE_CONTROL_V023_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_MEMBER=true");
console.log("CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK_ID=" + a.core_rootless_fanout_backpropagation_echo_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
