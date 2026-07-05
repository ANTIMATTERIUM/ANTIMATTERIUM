import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('integrations/control/ANTIMATTERIUM_CORE_MOVE71_CONTROL_V0233_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 69);
assert.equal(receipt.surface_key, 'CORE');
assert.equal(receipt.surface_display, 'Core');
assert.equal(receipt.surface_version, '0.2.48');
assert.equal(receipt.surface_tag, 'v0.2.48-antimatterium-control-v0233-backlink');
assert.equal(receipt.surface_release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.48-antimatterium-control-v0233-backlink');
assert.equal(receipt.control_version, '0.2.33');
assert.equal(receipt.control_tag, 'v0.2.33-antimatterium-control-move69-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.33-antimatterium-control-move69-surface-closure');
assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747726663');
assert.equal(receipt.control_closure_id, '6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b');
assert.equal(receipt.binding.type, 'public_surface_backlink');
assert.equal(receipt.binding.source_move, 68);
assert.equal(receipt.binding.target_move, 69);
assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.backlink_id, 'e530e13a78d4bd2d5d77303b8f58c7bb3402f826defb5769e96f57410a27fb47');

console.log('ANTIMATTERIUM_CORE_MOVE71_CONTROL_V0233_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_CORE_CONTROL_V0233_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_CORE_CONTROL_V0233_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_CORE_MOVE71_CONTROL_V0233_BACKLINK_ID=e530e13a78d4bd2d5d77303b8f58c7bb3402f826defb5769e96f57410a27fb47');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
