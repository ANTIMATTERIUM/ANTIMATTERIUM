import fs from "node:fs";
import {
  estimateRuntime,
  runtimeEvent,
  verifyRuntimeEvent
} from "../src/runtime-kernel.mjs";

const sample = JSON.parse(fs.readFileSync("examples/runtime/mission-estimate-input.json", "utf8"));
const event = runtimeEvent(sample);

verifyRuntimeEvent(event, sample);

const estimate = estimateRuntime(sample);

if (!estimate.accepted) throw new Error("sample estimate must be accepted");
if (!estimate.output) throw new Error("sample estimate output missing");
if (estimate.output.boundaries.current_production_claim !== false) throw new Error("production claim boundary open");
if (estimate.output.boundaries.starship_readiness_claim !== false) throw new Error("starship boundary open");
if (estimate.output.boundaries.physical_instruction_content !== false) throw new Error("instruction boundary open");

const blocked = estimateRuntime({ prompt: ["build ", "antimatter"].join("") });
if (blocked.accepted !== false) throw new Error("blocked input must be refused");

console.log("ANTIMATTERIUM_RUNTIME_KERNEL_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_RUNTIME_ADMISSION_GATE_BOUND=true");
console.log("ANTIMATTERIUM_RUNTIME_EVENT_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_RUNTIME_REPLAY_VERIFY_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
