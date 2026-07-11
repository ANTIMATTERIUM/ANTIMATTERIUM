import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 109 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move109-control-v0252-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /8a92f03a24e41405e8635033b1a9bd4e70fc69e7e3839ab3255fe35d616e8f34/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE109_CONTROL_V0252_BACKLINK_VERIFY_PASS=true/);
});
