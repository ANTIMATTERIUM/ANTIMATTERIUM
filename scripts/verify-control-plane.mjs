import fs from "node:fs";
import {
  buildControlPlaneBundle,
  verifyControlPlaneBundle,
  writeControlPlaneBundle
} from "../src/control-plane.mjs";

const committedPath = "public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json";

if (process.argv.includes("--write")) {
  writeControlPlaneBundle(committedPath);
}

const generated = buildControlPlaneBundle();
verifyControlPlaneBundle(generated);

if (!fs.existsSync(committedPath)) {
  throw new Error("committed control-plane bundle missing");
}

const committed = JSON.parse(fs.readFileSync(committedPath, "utf8"));
verifyControlPlaneBundle(committed);

if (committed.digest.sha256 !== generated.digest.sha256) {
  throw new Error("committed control-plane bundle digest differs from generated digest");
}

console.log("ANTIMATTERIUM_CONTROL_PLANE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_CONTROL_PLANE_BUNDLE_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PLANE_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_CONTROL_PLANE_ARTIFACTS_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
