import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Core Move 85 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move85-control-v0240-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE85_CONTROL_V0240_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE85_CONTROL_V0240_BACKLINK_ID=1d898fa91a0cd0730e50ff185edef41efea12058bb35b08abbecb83afb824e9d/);
});
