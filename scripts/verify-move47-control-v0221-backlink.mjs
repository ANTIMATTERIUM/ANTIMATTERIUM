import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../integrations/control/ANTIMATTERIUM_CORE_MOVE47_CONTROL_V0221_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('Core binds CONTROL v0.2.21 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/antimatterium');
  assert.equal(pkg.version, '0.2.36');
  assert.equal(receipt.package_name, '@antimatterium/antimatterium');
  assert.equal(receipt.package_version, '0.2.36');
  assert.equal(receipt.public_tag, 'v0.2.36-antimatterium-control-v0221-backlink');
  assert.equal(receipt.control.version, '0.2.21');
  assert.equal(receipt.control.tag, 'v0.2.21-antimatterium-control-move45-surface-closure');
  assert.equal(receipt.control.release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.21-antimatterium-control-move45-surface-closure');
  assert.equal(receipt.control.ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28527938011');
  assert.equal(receipt.control.closure_id, '84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, 'ea25bf47fc44f217a5f6d5b610c4b6f28b01933988b9dd32ccd11f028df75db1');
  assert.equal(receipt.CORE_MOVE47_CONTROL_V0221_BACKLINK_ID, 'ea25bf47fc44f217a5f6d5b610c4b6f28b01933988b9dd32ccd11f028df75db1');

  console.log('ANTIMATTERIUM_CORE_MOVE47_CONTROL_V0221_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_CORE_CONTROL_V0221_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_CORE_CONTROL_V0221_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('CORE_MOVE47_CONTROL_V0221_BACKLINK_ID=ea25bf47fc44f217a5f6d5b610c4b6f28b01933988b9dd32ccd11f028df75db1');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
