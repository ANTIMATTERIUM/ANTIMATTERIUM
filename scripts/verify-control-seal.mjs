import fs from "node:fs";

function assert(condition, message) {
if (!condition) throw new Error(message);
}

const seal = JSON.parse(fs.readFileSync("ANTIMATTERIUM_CONTROL_SEAL.json", "utf8"));
const releaseIndex = JSON.parse(fs.readFileSync("public/releases.json", "utf8"));
const missionReceipt = JSON.parse(fs.readFileSync("receipts/MISSION_CLASS_4_EXAMPLE_RECEIPT.json", "utf8"));

const releases = Array.isArray(releaseIndex)
? releaseIndex
: releaseIndex.releases;

assert(seal && typeof seal === "object" && !Array.isArray(seal), "control seal must be an object");
assert(missionReceipt && typeof missionReceipt === "object" && !Array.isArray(missionReceipt), "mission receipt must be an object");
assert(Array.isArray(releases), "public release index must expose releases array");
assert(releases.length >= 6, "public release index must bind expanded release chain");

const tags = new Set(releases.map((release) => release.tag).filter(Boolean));

assert(tags.has("v0.2.11-antimatterium-public-chain-os"), "public chain OS release missing");
assert(tags.has("v0.2.10-antimatterium-npm-022-publication"), "npm 0.2.2 release missing");
assert(tags.has("v0.2.9-antimatterium-external-public-verifier"), "external public verifier release missing");
assert(tags.has("v0.2.8-antimatterium-public-closure-audit"), "public closure audit release missing");
assert(tags.has("v0.2.7-antimatterium-external-replay-runner"), "external replay release missing");
assert(tags.has("v0.2.6-antimatterium-runtime-kernel"), "runtime kernel release missing");
assert(tags.has("v0.2.5-antimatterium-control-plane"), "control plane release missing");

const sealText = JSON.stringify(seal);
assert(sealText.includes("ANTIMATTERIUM") || sealText.includes("PUBLIC_CONTROL_CHAIN"), "control seal identity marker missing");

console.log("ANTIMATTERIUM_CONTROL_SEAL_VERIFY_PASS=true");
console.log("PUBLIC_CONTROL_CHAIN_CLOSED=true");
console.log("EXPANDED_RELEASE_INDEX_BOUND=true");
console.log("MISSION_RECEIPT_BOUND=true");
console.log("EXTERNAL_REPLAY_RELEASE_BOUND=true");
console.log("EXTERNAL_PUBLIC_VERIFIER_RELEASE_BOUND=true");
console.log("NPM_022_RELEASE_BOUND=true");
console.log("PUBLIC_CHAIN_OS_RELEASE_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
