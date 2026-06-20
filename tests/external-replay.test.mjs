import test from "node:test";
import assert from "node:assert/strict";
import {
  buildExternalReplayReceipt,
  verifyExternalReplayReceipt
} from "../src/external-replay.mjs";

test("external replay receipt builds and verifies", () => {
  const receipt = buildExternalReplayReceipt({ execute: false });

  assert.equal(receipt.schema, "ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT");
  assert.equal(receipt.object, "ANTIMATTERIUM");
  assert.equal(receipt.source_release, "v0.2.6-antimatterium-runtime-kernel");
  assert.match(receipt.replay_id, /^[a-f0-9]{64}$/);
  assert.equal(verifyExternalReplayReceipt(receipt), true);
});

test("external replay boundaries remain closed", () => {
  const receipt = buildExternalReplayReceipt({ execute: false });

  assert.equal(receipt.boundaries.current_production_claim, false);
  assert.equal(receipt.boundaries.starship_readiness_claim, false);
  assert.equal(receipt.boundaries.physical_instruction_content, false);
  assert.equal(receipt.boundaries.private_inventory_content, false);
  assert.equal(receipt.boundaries.unrelated_namespace_inventory, false);
});
