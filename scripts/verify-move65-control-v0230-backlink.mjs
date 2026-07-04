import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE65_CONTROL_V0230_BACKLINK.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("Core binds CONTROL v0.2.30 public closure", () => {
  assert.equal(pkg.version, "0.2.45");
  assert.equal(receipt.schema, "antimatterium.surface_control_backlink_receipt.v1");
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "core");
  assert.equal(receipt.surface_name, "Core");
  assert.equal(receipt.surface_version, "0.2.45");
  assert.equal(receipt.surface_public_tag, "v0.2.45-antimatterium-control-v0230-backlink");
  assert.equal(receipt.control.version, "0.2.30");
  assert.equal(receipt.control.public_tag, "v0.2.30-antimatterium-control-move63-surface-closure");
  assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.30-antimatterium-control-move63-surface-closure");
  assert.equal(receipt.control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28707158589");
  assert.equal(receipt.control.closure_id, "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { backlink_id, ...payload } = receipt;
  assert.equal(backlink_id, "9689749f667d9470e2d098b2fd7d1f4a37e2b6921dccb21ec3b2b7266f8b9467");
  assert.equal(canonicalHash(payload), "9689749f667d9470e2d098b2fd7d1f4a37e2b6921dccb21ec3b2b7266f8b9467");
  console.log("ANTIMATTERIUM_CORE_MOVE65_CONTROL_V0230_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0230_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0230_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_CORE_MOVE65_CONTROL_V0230_BACKLINK_ID=" + backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
