import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('Core Move 87 verifier receipt is stable', () => {
  const out = execFileSync(process.execPath, ['scripts/verify-move87-control-v0241-backlink.mjs'], { encoding: 'utf8' });
  assert.match(out, /ANTIMATTERIUM_CORE_MOVE87_CONTROL_V0241_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_CORE_MOVE87_CONTROL_V0241_BACKLINK_CONTROL_V0241_RELEASE_BOUND=true/);
});
