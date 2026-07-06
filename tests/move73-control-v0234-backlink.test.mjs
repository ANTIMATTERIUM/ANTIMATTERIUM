import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-move73-control-v0234-backlink.mjs');

test('Core Move 73 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE73_CONTROL_V0234_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_MOVE73_CONTROL_V0234_BACKLINK_ID=aa29f6557667c26be9680eddfe81cde31a1ead586d8d1831c04e436558f520f3/);
});
