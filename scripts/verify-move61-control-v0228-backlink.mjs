import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE61_CONTROL_V0228_BACKLINK.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("Core binds CONTROL v0.2.28 public closure", () => {
  assert.equal(pkg.version, "0.2.43");
  assert.equal(receipt.schema, "antimatterium.surface_control_backlink_receipt.v1");
  assert.equal(receipt.move, 61);
  assert.equal(receipt.surface.key, "CORE");
  assert.equal(receipt.surface.label, "Core");
  assert.equal(receipt.surface.version, "0.2.43");
  assert.equal(receipt.surface.public_tag, "v0.2.43-antimatterium-control-v0228-backlink");
  assert.equal(receipt.control.version, "0.2.28");
  assert.equal(receipt.control.public_tag, "v0.2.28-antimatterium-control-move59-surface-closure");
  assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.28-antimatterium-control-move59-surface-closure");
  assert.equal(receipt.control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706320665");
  assert.equal(receipt.control.closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { backlink_id, ...payload } = receipt;
  assert.equal(backlink_id, "d8214afe35a399057787514c2786665028a8f65491750406741d521329bc635f");
  assert.equal(canonicalHash(payload), "d8214afe35a399057787514c2786665028a8f65491750406741d521329bc635f");
  console.log("ANTIMATTERIUM_CORE_MOVE61_CONTROL_V0228_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0228_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0228_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_CORE_MOVE61_CONTROL_V0228_BACKLINK_ID=" + backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
