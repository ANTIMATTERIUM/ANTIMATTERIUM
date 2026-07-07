import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Core Move 83 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move83-control-v0239-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE83_CONTROL_V0239_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE83_CONTROL_V0239_BACKLINK_ID=1b0610067973f8527502495b58a7c745f36b081198b51f4398bf96f30b4dc7cb/);
});
