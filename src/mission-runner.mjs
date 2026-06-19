import fs from "node:fs";
import { idealAntimatterKgForOneBurn, nonRelativisticKineticEnergyJoules } from "./mission-energy.mjs";

export function runMissionEstimate(input) {
  const {
    missionClass,
    vehicleKg,
    cruiseFractionC,
    couplingEfficiency = 1,
    includeDeceleration = false
  } = input;

  if (!Number.isInteger(missionClass) || missionClass < 0 || missionClass > 6) {
    throw new Error("missionClass must be an integer from 0 to 6");
  }

  const oneBurnEnergyJ = nonRelativisticKineticEnergyJoules({ vehicleKg, cruiseFractionC });
  const burnCount = includeDeceleration ? 2 : 1;
  const totalKineticEnergyJ = oneBurnEnergyJ * burnCount;
  const idealAntimatterKg = idealAntimatterKgForOneBurn({ vehicleKg, cruiseFractionC, couplingEfficiency }) * burnCount;

  return {
    schema_version: "antimatterium.mission_estimate.v0.1.2",
    mission_class: missionClass,
    vehicle_kg: vehicleKg,
    cruise_fraction_c: cruiseFractionC,
    coupling_efficiency: couplingEfficiency,
    includes_deceleration: includeDeceleration,
    burn_count: burnCount,
    total_kinetic_energy_j: totalKineticEnergyJ,
    ideal_antimatter_kg: idealAntimatterKg,
    claim_boundary: "bounded non-relativistic estimate; not production readiness; not starship readiness",
    claims_current_industrial_antimatter_production: false,
    claims_current_starship_readiness: false
  };
}

export function runMissionEstimateFile(inputPath) {
  const input = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  return runMissionEstimate(input);
}
