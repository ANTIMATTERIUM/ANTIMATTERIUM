import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Core binds CONTROL v0.2.23 public closure", () => {
  const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE51_CONTROL_V0223_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 51);
  assert.equal(receipt.control_version, "0.2.23");
  assert.equal(receipt.control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.23-antimatterium-control-move49-surface-closure");
  assert.equal(receipt.control_closure_id, "35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e");
  assert.equal(receipt.surface_public_tag, "v0.2.38-antimatterium-control-v0223-backlink");
  assert.equal(receipt.backlink_id, "dc1bbccf63ed9a2ac96a73478b81d86776ed9ac9241bb6a0cdadf2f9618d16fa");
});
