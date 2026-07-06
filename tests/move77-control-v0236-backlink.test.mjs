import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Core Move 77 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move77-control-v0236-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE77_CONTROL_V0236_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE77_CONTROL_V0236_BACKLINK_ID=8aa73e300ade2ebea5ee2bc82b40a9c02fb4efddeba6d7dd29c51b20199685aa/);
});
