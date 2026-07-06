import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('integrations/control/ANTIMATTERIUM_CORE_MOVE73_CONTROL_V0234_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 73);
assert.equal(receipt.surface_key, 'core');
assert.equal(receipt.surface_display, 'Core');
assert.equal(receipt.surface_version, '0.2.49');
assert.equal(receipt.surface_tag, 'v0.2.49-antimatterium-control-v0234-backlink');
assert.equal(receipt.surface_release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.49-antimatterium-control-v0234-backlink');
assert.equal(receipt.control_version, '0.2.34');
assert.equal(receipt.control_tag, 'v0.2.34-antimatterium-control-move71-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.34-antimatterium-control-move71-surface-closure');
assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28814745469');
assert.equal(receipt.control_closure_id, 'c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b');
assert.equal(receipt.binding.type, 'public_surface_backlink');
assert.equal(receipt.binding.source_move, 72);
assert.equal(receipt.binding.target_move, 73);
assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.backlink_id, 'aa29f6557667c26be9680eddfe81cde31a1ead586d8d1831c04e436558f520f3');

console.log('ANTIMATTERIUM_CORE_MOVE73_CONTROL_V0234_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_CORE_CONTROL_V0234_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_CORE_CONTROL_V0234_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_CORE_MOVE73_CONTROL_V0234_BACKLINK_ID=aa29f6557667c26be9680eddfe81cde31a1ead586d8d1831c04e436558f520f3');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
