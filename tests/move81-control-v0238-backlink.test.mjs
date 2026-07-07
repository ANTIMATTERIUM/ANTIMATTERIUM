import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Core Move 81 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move81-control-v0238-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE81_CONTROL_V0238_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE81_CONTROL_V0238_BACKLINK_ID=c95084dd908698c740b3e523863dc991a8630433f40024ee1e2a560a7eebcbd1/);
});
