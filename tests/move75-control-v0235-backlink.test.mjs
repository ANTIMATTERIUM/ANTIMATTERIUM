import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Core Move 75 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move75-control-v0235-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE75_CONTROL_V0235_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE75_CONTROL_V0235_BACKLINK_ID=a56cd46dc7dd7d61a55de4d2137f5fa8703c551c61700cac223833a944ff6464/);
});
