import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Core Move 59 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE59_CONTROL_V0227_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 59);
  assert.equal(receipt.surface, "core");
  assert.equal(receipt.surface_version, "0.2.42");
  assert.equal(receipt.control.version, "0.2.27");
  assert.equal(receipt.control.closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  assert.equal(receipt.backlink_id, "84b3bc590a2205f7e454fdd8f0598eef906b4768d98b3dae212e53180c5792ad");
});
