import test from "node:test";
import assert from "node:assert/strict";
import {
  admitRuntimeInput,
  estimateRuntime,
  runtimeEvent,
  verifyRuntimeEvent
} from "../src/runtime-kernel.mjs";

test("runtime accepts bounded public mission input", () => {
  const input = { mission_class: "CLASS_4_250_AU", target_au: 250, payload_kg: 1000 };
  const result = estimateRuntime(input);

  assert.equal(result.accepted, true);
  assert.equal(result.output.boundaries.current_production_claim, false);
  assert.equal(result.output.boundaries.starship_readiness_claim, false);
  assert.equal(result.output.boundaries.physical_instruction_content, false);
});

test("runtime rejects blocked claim token input", () => {
  const input = { prompt: ["build ", "antimatter"].join("") };
  const admission = admitRuntimeInput(input);

  assert.equal(admission.accepted, false);
  assert.equal(admission.reason, "blocked_claim_token");
});

test("runtime event verifies by replay", () => {
  const input = { mission_class: "CLASS_4_250_AU", target_au: 250, payload_kg: 1000 };
  const event = runtimeEvent(input);

  assert.equal(verifyRuntimeEvent(event, input), true);
  assert.match(event.event_id, /^[a-f0-9]{64}$/);
});
