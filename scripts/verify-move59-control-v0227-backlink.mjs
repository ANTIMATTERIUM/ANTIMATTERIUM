import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE59_CONTROL_V0227_BACKLINK.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("Core binds CONTROL v0.2.27 public closure", () => {
  assert.match(pkg.version, /^0\.2\.\d+$/);
  assert.equal(receipt.schema, "antimatterium.surface_control_backlink_receipt.v1");
  assert.equal(receipt.move, 59);
  assert.equal(receipt.surface, "core");
  assert.equal(receipt.surface_label, "Core");
  assert.equal(receipt.surface_version, "0.2.42");
  assert.equal(receipt.surface_public_tag, "v0.2.42-antimatterium-control-v0227-backlink");
  assert.equal(receipt.control.version, "0.2.27");
  assert.equal(receipt.control.public_tag, "v0.2.27-antimatterium-control-move57-surface-closure");
  assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.27-antimatterium-control-move57-surface-closure");
  assert.equal(receipt.control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28705916342");
  assert.equal(receipt.control.closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  assert.equal(receipt.membership, "surface_binds_control_public_surface_fanout_closure");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { backlink_id, ...payload } = receipt;
  assert.equal(backlink_id, "84b3bc590a2205f7e454fdd8f0598eef906b4768d98b3dae212e53180c5792ad");
  assert.equal(canonicalHash(payload), "84b3bc590a2205f7e454fdd8f0598eef906b4768d98b3dae212e53180c5792ad");
  console.log("ANTIMATTERIUM_CORE_MOVE59_CONTROL_V0227_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0227_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0227_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_CORE_MOVE59_CONTROL_V0227_BACKLINK_ID=" + backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
