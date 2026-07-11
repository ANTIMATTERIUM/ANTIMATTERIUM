import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 105 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move105-control-v0250-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE105_CONTROL_V0250_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /4cbbdf5854fa9683e56d2f4aadb50f18bbeb4aa5f7ae021b9fe197b2bee5e812/);
});
