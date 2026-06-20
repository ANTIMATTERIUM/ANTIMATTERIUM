#!/usr/bin/env node
import fs from "node:fs";
import {
  buildExternalReplayReceipt,
  verifyExternalReplayReceipt,
  writeExternalReplayReceipt
} from "../src/external-replay.mjs";

const command = process.argv[2] || "status";

if (command === "status") {
  const receipt = buildExternalReplayReceipt({ execute: false });
  console.log(JSON.stringify({
    object: "ANTIMATTERIUM",
    replay_runner: "0.2.7-external-replay-runner",
    source_release: receipt.source_release,
    control_plane_digest: receipt.control_plane_digest,
    runtime_event_id: receipt.runtime_event_id,
    artifact_count: receipt.artifact_count,
    status: "ready"
  }, null, 2));
} else if (command === "receipt") {
  console.log(JSON.stringify(buildExternalReplayReceipt({ execute: false }), null, 2));
} else if (command === "run") {
  console.log(JSON.stringify(buildExternalReplayReceipt({ execute: true }), null, 2));
} else if (command === "write") {
  const file = process.argv[3] || "public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json";
  const receipt = writeExternalReplayReceipt(file, { execute: false });
  console.log(JSON.stringify({ written: file, replay_id: receipt.replay_id }, null, 2));
} else if (command === "verify") {
  const file = process.argv[3] || "public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json";
  verifyExternalReplayReceipt(JSON.parse(fs.readFileSync(file, "utf8")));
  console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT_VERIFY_PASS=true");
} else {
  console.error(`unknown command: ${command}`);
  process.exit(1);
}
