import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('integrations/control/ANTIMATTERIUM_CORE_MOVE69_CONTROL_V0232_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 69);
assert.equal(receipt.surface_key, 'CORE');
assert.equal(receipt.surface_display, 'Core');
assert.equal(receipt.surface_version, '0.2.47');
assert.equal(receipt.surface_tag, 'v0.2.47-antimatterium-control-v0232-backlink');
assert.equal(receipt.surface_release, 'https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.47-antimatterium-control-v0232-backlink');
assert.equal(receipt.control_version, '0.2.32');
assert.equal(receipt.control_tag, 'v0.2.32-antimatterium-control-move67-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.32-antimatterium-control-move67-surface-closure');
assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747392917');
assert.equal(receipt.control_closure_id, '26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f');
assert.equal(receipt.binding.type, 'public_surface_backlink');
assert.equal(receipt.binding.source_move, 68);
assert.equal(receipt.binding.target_move, 69);
assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.backlink_id, '57a6f14ecdcbb314947c46b8001104f2f4ae2911c29526359fed3a854bb4f802');

console.log('ANTIMATTERIUM_CORE_MOVE69_CONTROL_V0232_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_CORE_CONTROL_V0232_RELEASE_BOUND=true');
console.log('ANTIMATTERIUM_CORE_CONTROL_V0232_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_CORE_MOVE69_CONTROL_V0232_BACKLINK_ID=57a6f14ecdcbb314947c46b8001104f2f4ae2911c29526359fed3a854bb4f802');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
