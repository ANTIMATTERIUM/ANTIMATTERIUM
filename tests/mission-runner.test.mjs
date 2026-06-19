import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { runMissionEstimate } from "../src/mission-runner.mjs";

test("mission runner emits bounded estimate", () => {
  const out = runMissionEstimate({
    missionClass: 4,
    vehicleKg: 10,
    cruiseFractionC: 0.01,
    couplingEfficiency: 0.25,
    includeDeceleration: true
  });

  assert.equal(out.mission_class, 4);
  assert.equal(out.claims_current_industrial_antimatter_production, false);
  assert.equal(out.claims_current_starship_readiness, false);
  assert.ok(out.ideal_antimatter_kg > 0);
  assert.equal(out.burn_count, 2);
});

test("mission runner refuses invalid class", () => {
  assert.throws(() => runMissionEstimate({
    missionClass: 9,
    vehicleKg: 10,
    cruiseFractionC: 0.01
  }));
});

test("mission CLI emits JSON", () => {
  const raw = execFileSync("node", ["scripts/antimatterium-mission.mjs", "examples/mission-runner-class-4.json"], {
    encoding: "utf8"
  });
  const out = JSON.parse(raw);
  assert.equal(out.mission_class, 4);
});
