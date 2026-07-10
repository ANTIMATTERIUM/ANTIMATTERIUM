import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Core Move 97 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-move97-control-v0246-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE97_CONTROL_V0246_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE97_CONTROL_V0246_BACKLINK_ID=df8df22c35ef57a793cdb57033d05ebc2c0ba9abd3b072fd6bed6520d2421b6c/);
});
