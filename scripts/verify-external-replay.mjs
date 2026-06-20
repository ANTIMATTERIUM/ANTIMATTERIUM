import fs from "node:fs";
import {
  buildExternalReplayReceipt,
  verifyExternalReplayReceipt,
  writeExternalReplayReceipt
} from "../src/external-replay.mjs";

const file = "public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json";

if (process.argv.includes("--write")) writeExternalReplayReceipt(file, { execute: false });
if (!fs.existsSync(file)) writeExternalReplayReceipt(file, { execute: false });

const receipt = JSON.parse(fs.readFileSync(file, "utf8"));
verifyExternalReplayReceipt(receipt);

const generated = buildExternalReplayReceipt({ execute: false });
if (receipt.replay_id !== generated.replay_id) throw new Error("external replay receipt stale");

console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT_BOUND=true");
console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_ARTIFACT_DIGESTS_BOUND=true");
console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_RUNTIME_EVENT_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
