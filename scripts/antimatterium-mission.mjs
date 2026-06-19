#!/usr/bin/env node
import { runMissionEstimateFile } from "../src/mission-runner.mjs";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("usage: antimatterium-mission <mission.json>");
  process.exit(64);
}

const result = runMissionEstimateFile(inputPath);
console.log(JSON.stringify(result, null, 2));
