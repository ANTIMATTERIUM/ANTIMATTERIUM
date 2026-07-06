import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Core Move 79 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-move79-control-v0237-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE79_CONTROL_V0237_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE79_CONTROL_V0237_BACKLINK_ID=c25af4d72c54aba8a6eaa02cea9493b25da8b67aa427d72c9d85898a2f5f7367/);
});
