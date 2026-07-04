import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Core Move 61 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE61_CONTROL_V0228_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 61);
  assert.equal(receipt.surface.version, "0.2.43");
  assert.equal(receipt.control.version, "0.2.28");
  assert.equal(receipt.control.closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  assert.equal(receipt.backlink_id, "d8214afe35a399057787514c2786665028a8f65491750406741d521329bc635f");
});
