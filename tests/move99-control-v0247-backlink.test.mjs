import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 99 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move99-control-v0247-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE99_CONTROL_V0247_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE99_CONTROL_V0247_BACKLINK_ID=a6e585ae0c31cf7ebe2a301bec2eba5b1b39a85bbddcf8c5c8f478dcb77138d2/);
});
