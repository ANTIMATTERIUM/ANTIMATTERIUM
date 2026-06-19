import test from "node:test";
import assert from "node:assert/strict";
import { annihilationJoulesFromAntimatterKg, antimatterKgForJoules } from "../src/annihilation-energy.mjs";
import { nonRelativisticKineticEnergyJoules, idealAntimatterKgForOneBurn } from "../src/mission-energy.mjs";

test("1 kg antimatter with 1 kg matter releases expected order energy", () => {
  const j = annihilationJoulesFromAntimatterKg(1);
  assert.ok(j > 1.79e17);
  assert.ok(j < 1.80e17);
});

test("joules to antimatter kg round trip", () => {
  const j = annihilationJoulesFromAntimatterKg(0.001);
  const kg = antimatterKgForJoules(j);
  assert.ok(Math.abs(kg - 0.001) < 1e-15);
});

test("mission energy refuses invalid coupling", () => {
  assert.throws(() => idealAntimatterKgForOneBurn({ vehicleKg: 10, cruiseFractionC: 0.1, couplingEfficiency: 0 }));
});

test("mission kinetic energy is positive", () => {
  const j = nonRelativisticKineticEnergyJoules({ vehicleKg: 10, cruiseFractionC: 0.1 });
  assert.ok(j > 0);
});
