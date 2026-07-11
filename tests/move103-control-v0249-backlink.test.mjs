import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 103 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move103-control-v0249-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /VERIFY_PASS=true/);
  assert.match(result.stdout, /6b30c1df950a1875c0af0f930a0121eeebdf83ceb2066cf54d0dbe1366469716/);
});
