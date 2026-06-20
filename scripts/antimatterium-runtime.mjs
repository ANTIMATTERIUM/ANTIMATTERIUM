#!/usr/bin/env node
import fs from "node:fs";
import {
  estimateRuntime,
  runtimeEvent,
  verifyRuntimeEvent,
  writeRuntimeEvent
} from "../src/runtime-kernel.mjs";

const command = process.argv[2] || "status";

function readInput(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

if (command === "status") {
  console.log(JSON.stringify({
    object: "ANTIMATTERIUM",
    runtime_kernel: "0.2.6-runtime-kernel",
    status: "ready",
    boundaries: {
      no_current_production_claim: true,
      no_starship_claim: true,
      no_physical_production_instructions: true
    }
  }, null, 2));
} else if (command === "estimate") {
  const file = process.argv[3];
  if (!file) throw new Error("missing input json path");
  console.log(JSON.stringify(estimateRuntime(readInput(file)), null, 2));
} else if (command === "event") {
  const file = process.argv[3];
  if (!file) throw new Error("missing input json path");
  console.log(JSON.stringify(runtimeEvent(readInput(file)), null, 2));
} else if (command === "write-event") {
  const inputFile = process.argv[3];
  const outputFile = process.argv[4];
  if (!inputFile || !outputFile) throw new Error("usage: write-event input.json output.json");
  const event = writeRuntimeEvent(readInput(inputFile), outputFile);
  console.log(JSON.stringify({ written: outputFile, event_id: event.event_id }, null, 2));
} else if (command === "verify-event") {
  const inputFile = process.argv[3];
  const eventFile = process.argv[4];
  if (!inputFile || !eventFile) throw new Error("usage: verify-event input.json event.json");
  verifyRuntimeEvent(JSON.parse(fs.readFileSync(eventFile, "utf8")), readInput(inputFile));
  console.log("ANTIMATTERIUM_RUNTIME_EVENT_VERIFY_PASS=true");
} else {
  console.error(`unknown command: ${command}`);
  process.exit(1);
}
