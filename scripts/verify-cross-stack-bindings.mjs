import fs from "node:fs";

const binding = JSON.parse(fs.readFileSync("integrations/CROSS_STACK_BINDING.json", "utf8"));
const verifrax = JSON.parse(fs.readFileSync("integrations/verifrax/ADMISSIBILITY_BRIDGE.json", "utf8"));
const invocorder = JSON.parse(fs.readFileSync("integrations/invocorder/MACHINE_ACTION_RECORD_PROFILE.json", "utf8"));
const qvra = JSON.parse(fs.readFileSync("integrations/qvra/LAB_RUN_BINDING.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(binding.binding === "ANTIMATTERIUM_CROSS_STACK_BINDING", "binding mismatch");
assert(binding.included_stacks.Verifrax.included === true, "Verifrax must be included");
assert(binding.included_stacks.INVOCORDER.included === true, "INVOCORDER must be included");
assert(binding.included_stacks.qvra.included === true, "qvra must be included");

for (const [name, item] of Object.entries(binding.excluded_stacks)) {
  assert(item.included === false, `${name} must remain excluded from ANTIMATTERIUM core`);
}

assert(verifrax.completion.VERIFRAX_ADMISSIBILITY_BRIDGE_BOUND === true, "Verifrax bridge not bound");
assert(invocorder.completion.INVOCORDER_MACHINE_ACTION_PROFILE_BOUND === true, "INVOCORDER profile not bound");
assert(qvra.completion.QVRA_LAB_RUN_BINDING_BOUND === true, "qvra binding not bound");

assert(binding.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(binding.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(binding.claim_boundary.claims_physical_production_instructions === false, "production instruction overclaim");

console.log("ANTIMATTERIUM_CROSS_STACK_BINDINGS_VERIFY_PASS=true");
console.log("VERIFRAX_ADMISSIBILITY_BRIDGE_BOUND=true");
console.log("INVOCORDER_MACHINE_ACTION_PROFILE_BOUND=true");
console.log("QVRA_LAB_RUN_BINDING_BOUND=true");
console.log("ONLY_RELEVANT_STACKS_IMPORTED=true");
console.log("UNRELATED_STACKS_EXCLUDED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
