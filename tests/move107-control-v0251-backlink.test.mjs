import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 107 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move107-control-v0251-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE107_CONTROL_V0251_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /b8252cce6745ed95358efc596a327c186f13f1e48df43df5bde237a089a1d2ea/);
});
