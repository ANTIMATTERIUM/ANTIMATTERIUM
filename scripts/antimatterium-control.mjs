#!/usr/bin/env node
import {
  buildControlPlaneBundle,
  verifyControlPlaneBundle,
  writeControlPlaneBundle,
  controlPlaneStatus
} from "../src/control-plane.mjs";

const command = process.argv[2] || "status";

if (command === "status") {
  console.log(JSON.stringify(controlPlaneStatus(), null, 2));
} else if (command === "bundle") {
  const bundle = buildControlPlaneBundle();
  console.log(JSON.stringify(bundle, null, 2));
} else if (command === "write-bundle") {
  const bundle = writeControlPlaneBundle();
  console.log(JSON.stringify({ written: true, digest: bundle.digest.sha256 }, null, 2));
} else if (command === "verify") {
  verifyControlPlaneBundle();
  console.log("ANTIMATTERIUM_CONTROL_PLANE_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_CONTROL_PLANE_BUNDLE_BOUND=true");
  console.log("ANTIMATTERIUM_CONTROL_PLANE_DIGEST_BOUND=true");
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
} else if (command === "digest") {
  console.log(buildControlPlaneBundle().digest.sha256);
} else {
  console.error(`unknown command: ${command}`);
  process.exit(1);
}
