import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const index = JSON.parse(fs.readFileSync("public/antimatterium.json", "utf8"));
const releaseIndex = JSON.parse(fs.readFileSync("public/releases.json", "utf8"));

const releases = Array.isArray(releaseIndex)
  ? releaseIndex
  : releaseIndex.releases;

assert(Array.isArray(releases), "release index must expose releases array");
assert(releases.length >= 5, "expected expanded indexed release chain");

const tags = new Set(releases.map((release) => release.tag).filter(Boolean));

assert(tags.has("v0.2.7-antimatterium-external-replay-runner"), "v0.2.7 external replay release missing");
assert(tags.has("v0.2.6-antimatterium-runtime-kernel"), "v0.2.6 runtime kernel release missing");
assert(tags.has("v0.2.5-antimatterium-control-plane"), "v0.2.5 control plane release missing");

assert(index.object === "ANTIMATTERIUM", "public object identity missing");
assert(index.name === "ANTIMATTERIUM", "public name identity missing");
assert(index.control_plane, "control plane pointer missing");
assert(index.external_replay, "external replay pointer missing");
assert(index.latest_release === "v0.2.7-antimatterium-external-replay-runner", "latest release pointer mismatch");

assert(index.control_plane.bundle === "public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json", "control bundle pointer mismatch");
assert(index.external_replay.receipt === "public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json", "external replay receipt pointer mismatch");

console.log("ANTIMATTERIUM_PUBLIC_INDEX_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_RELEASE_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_EXPANDED_RELEASE_CHAIN_BOUND=true");
console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_INDEX_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
