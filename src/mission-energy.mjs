import { antimatterKgForJoules } from "./annihilation-energy.mjs";

export function nonRelativisticKineticEnergyJoules({ vehicleKg, cruiseFractionC }) {
  if (!Number.isFinite(vehicleKg) || vehicleKg <= 0) throw new Error("vehicleKg must be positive");
  if (!Number.isFinite(cruiseFractionC) || cruiseFractionC <= 0 || cruiseFractionC >= 1) throw new Error("cruiseFractionC must be between 0 and 1");
  const c = 299792458;
  const v = cruiseFractionC * c;
  return 0.5 * vehicleKg * v * v;
}

export function idealAntimatterKgForOneBurn({ vehicleKg, cruiseFractionC, couplingEfficiency = 1 }) {
  if (!Number.isFinite(couplingEfficiency) || couplingEfficiency <= 0 || couplingEfficiency > 1) throw new Error("couplingEfficiency must be in (0,1]");
  const energy = nonRelativisticKineticEnergyJoules({ vehicleKg, cruiseFractionC });
  return antimatterKgForJoules(energy / couplingEfficiency);
}
