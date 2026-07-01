import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../integrations/control/ANTIMATTERIUM_CORE_MOVE41_CONTROL_V0218_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('Core binds CONTROL v0.2.18 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/antimatterium');
  assert.equal(pkg.version, '0.2.33');
  assert.equal(receipt.package_name, '@antimatterium/antimatterium');
  assert.equal(receipt.package_version, '0.2.33');
  assert.equal(receipt.control_version, '0.2.18');
  assert.equal(receipt.control_tag, 'v0.2.18-antimatterium-control-move39-surface-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.18-antimatterium-control-move39-surface-closure');
  assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28524366738');
  assert.equal(receipt.control_closure_id, '01a39a53a3914b1b38f283f2b4232b190c201712f0f8edb6fd0e91fc7bca717a');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, '7a45950d954911d5c83137bcf273c7ee53fa3d78c83c94b5e1be0c8bcaccb7f3');
  assert.equal(receipt.CORE_MOVE41_CONTROL_V0218_BACKLINK_ID, '7a45950d954911d5c83137bcf273c7ee53fa3d78c83c94b5e1be0c8bcaccb7f3');

  console.log('ANTIMATTERIUM_CORE_MOVE41_CONTROL_V0218_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_CORE_CONTROL_V0218_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_CONTROL_V0218_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('CORE_MOVE41_CONTROL_V0218_BACKLINK_ID=7a45950d954911d5c83137bcf273c7ee53fa3d78c83c94b5e1be0c8bcaccb7f3');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
