import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 113 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move113-control-v0254-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /MOVE113_CONTROL_V0254_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /6778a5fd828e9470ad30a5a06106dd328089eb00061a10b28c996fd712451ca4/);
});
