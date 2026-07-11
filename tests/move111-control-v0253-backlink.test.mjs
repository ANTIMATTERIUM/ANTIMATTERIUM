import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 111 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move111-control-v0253-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE111_CONTROL_V0253_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /acfb83e951098c7bf6641c91565ab6485eeb56cabfa536cbd5b5f19364b1daf1/);
});
