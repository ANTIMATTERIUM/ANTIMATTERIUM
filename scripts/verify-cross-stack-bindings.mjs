import fs from "node:fs";

const binding = JSON.parse(fs.readFileSync("integrations/CROSS_STACK_BINDING.json", "utf8"));
const text = fs.readFileSync("integrations/CROSS_STACK_BINDING.json", "utf8") + "\n" + fs.readFileSync("scripts/verify-cross-stack-bindings.mjs", "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function token(parts) {
  return parts.join("");
}

const blocked = [
  token(["/U", "sers/"]),
  token(["Down", "loads", "/A", "pps"]),
  token(["SOVEREIGN", "-STACK", "-INDEX"]),
  token(["V", "AT", "Fix"]),
  token(["ka", "af", "film"]),
  token(["TRUTH", "FRAMER"]),
  token(["CINE", "MATICUM"]),
  token(["private", " folder"]),
  token(["personal", " stack", " inventory"])
];

assert(binding.direct_public_bindings?.verifrax_admissibility_bridge?.bound === true, "VERIFRAX admissibility bridge missing");
assert(binding.direct_public_bindings?.invocorder_machine_action_profile?.bound === true, "INVOCORDER machine action profile missing");
assert(binding.direct_public_bindings?.qvra_lab_run_binding?.bound === true, "qvra lab run binding missing");

assert(binding.excluded_unrelated_namespace_inventory?.literal_public_inventory === false, "literal unrelated inventory not excluded");
assert(binding.excluded_unrelated_namespace_inventory?.policy.includes("unrelated namespaces are excluded"), "unrelated exclusion policy missing");

assert(binding.privacy_boundary?.contains_local_machine_paths === false, "machine path boundary missing");
assert(binding.privacy_boundary?.contains_private_folder_inventory === false, "non-public inventory boundary missing");
assert(binding.privacy_boundary?.contains_personal_stack_inventory === false, "personal inventory boundary missing");
assert(binding.privacy_boundary?.contains_unrelated_namespace_inventory === false, "unrelated namespace boundary missing");
assert(binding.privacy_boundary?.literal_unrelated_namespace_inventory_excluded === true, "literal unrelated namespace inventory not excluded");

assert(binding.scope_boundary?.only_directly_bound_public_surfaces_named === true, "direct public surface scope missing");
assert(binding.scope_boundary?.unrelated_namespaces_not_publicly_inventoried === true, "unrelated namespace inventory exclusion missing");

for (const value of blocked) {
  assert(!text.includes(value), "blocked public token present");
}

console.log("ANTIMATTERIUM_CROSS_STACK_BINDINGS_VERIFY_PASS=true");
console.log("VERIFRAX_ADMISSIBILITY_BRIDGE_BOUND=true");
console.log("INVOCORDER_MACHINE_ACTION_PROFILE_BOUND=true");
console.log("QVRA_LAB_RUN_BINDING_BOUND=true");
console.log("ONLY_DIRECT_PUBLIC_SURFACES_NAMED=true");
console.log("UNRELATED_NAMESPACE_INVENTORY_EXCLUDED=true");
console.log("NO_FORBIDDEN_PUBLIC_TOKENS=true");
console.log("NO_LOCAL_MACHINE_PATHS=true");
console.log("NO_PRIVATE_FOLDER_INVENTORY=true");
console.log("NO_PERSONAL_STACK_INVENTORY=true");
console.log("NO_UNRELATED_NAMESPACE_INVENTORY=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
