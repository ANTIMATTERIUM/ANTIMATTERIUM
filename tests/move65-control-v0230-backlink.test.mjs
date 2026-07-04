import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Core Move 65 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE65_CONTROL_V0230_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "core");
  assert.equal(receipt.surface_version, "0.2.45");
  assert.equal(receipt.control.version, "0.2.30");
  assert.equal(receipt.control.closure_id, "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");
  assert.equal(receipt.backlink_id, "9689749f667d9470e2d098b2fd7d1f4a37e2b6921dccb21ec3b2b7266f8b9467");
});
