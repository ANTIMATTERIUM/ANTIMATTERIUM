import fs from "node:fs";
import assert from "node:assert/strict";
import test from "node:test";

const receipt = JSON.parse(fs.readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE55_CONTROL_V0225_BACKLINK.json", import.meta.url), "utf8"));
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));

test("Core binds CONTROL v0.2.25 public closure", () => {
  assert.equal(pkg.name, "@antimatterium/antimatterium");
  assert.equal(pkg.version, "0.2.40");
  assert.equal(pkg.scripts["verify:move55-control-v0225-backlink"], "node scripts/verify-move55-control-v0225-backlink.mjs");
  assert.equal(pkg.scripts["test:move55-control-v0225-backlink"], "node --test tests/move55-control-v0225-backlink.test.mjs");

  assert.equal(receipt.schema, "antimatterium.public_surface_control_backlink.v1");
  assert.equal(receipt.move, 55);
  assert.equal(receipt.surface_key, "CORE");
  assert.equal(receipt.surface, "Core");
  assert.equal(receipt.repository, "ANTIMATTERIUM/ANTIMATTERIUM");
  assert.equal(receipt.package, "@antimatterium/antimatterium");
  assert.equal(receipt.surface_version, "0.2.40");
  assert.equal(receipt.surface_tag, "v0.2.40-antimatterium-control-v0225-backlink");
  assert.equal(receipt.control_version, "0.2.25");
  assert.equal(receipt.control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.25-antimatterium-control-move53-surface-closure");
  assert.equal(receipt.control_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28679307644");
  assert.equal(receipt.control_closure_id, "99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08");
  assert.match(receipt.backlink_id, /^[a-f0-9]{64}$/);
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);

  console.log("ANTIMATTERIUM_CORE_MOVE55_CONTROL_V0225_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0225_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0225_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_CORE_MOVE55_CONTROL_V0225_BACKLINK_ID=" + receipt.backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
