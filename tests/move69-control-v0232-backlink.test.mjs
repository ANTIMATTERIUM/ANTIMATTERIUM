import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-move69-control-v0232-backlink.mjs');

test('Core Move 69 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE69_CONTROL_V0232_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE69_CONTROL_V0232_BACKLINK_ID=57a6f14ecdcbb314947c46b8001104f2f4ae2911c29526359fed3a854bb4f802/);
});
