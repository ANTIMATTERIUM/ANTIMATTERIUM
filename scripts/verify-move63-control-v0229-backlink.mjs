import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE63_CONTROL_V0229_BACKLINK.json", import.meta.url), "utf8"));

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("Core binds CONTROL v0.2.29 public closure", () => {
  assert.equal(pkg.version, "0.2.44");
  assert.equal(receipt.schema, "antimatterium.surface_control_backlink_receipt.v1");
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "core");
  assert.equal(receipt.surface_name, "Core");
  assert.equal(receipt.surface_version, "0.2.44");
  assert.equal(receipt.surface_public_tag, "v0.2.44-antimatterium-control-v0229-backlink");
  assert.equal(receipt.control.version, "0.2.29");
  assert.equal(receipt.control.public_tag, "v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.control.release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.29-antimatterium-control-move61-surface-closure");
  assert.equal(receipt.control.verify_ci_run, "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706590644");
  assert.equal(receipt.control.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);
  const { backlink_id, ...payload } = receipt;
  assert.equal(backlink_id, "c19dfefc5dc203b19ea726bba2987705a13a9bff8f70b43ed77d4a9b685c26e7");
  assert.equal(canonicalHash(payload), "c19dfefc5dc203b19ea726bba2987705a13a9bff8f70b43ed77d4a9b685c26e7");
  console.log("ANTIMATTERIUM_CORE_MOVE63_CONTROL_V0229_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0229_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_CORE_CONTROL_V0229_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_CORE_MOVE63_CONTROL_V0229_BACKLINK_ID=" + backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
