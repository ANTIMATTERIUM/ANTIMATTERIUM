import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 101 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move101-control-v0248-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE101_CONTROL_V0248_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE101_CONTROL_V0248_BACKLINK_ID=a555a952fe98d531710008e2ece633557a86786f7e1cca3b6128cec5bbf48151/);
});
