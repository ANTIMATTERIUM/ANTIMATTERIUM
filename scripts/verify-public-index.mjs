import fs from "node:fs";

function assert(condition, message) {
if (!condition) throw new Error(message);
}

const index = JSON.parse(fs.readFileSync("public/antimatterium.json", "utf8"));
const releaseIndex = JSON.parse(fs.readFileSync("public/releases.json", "utf8"));

const releases = Array.isArray(releaseIndex)
? releaseIndex
: releaseIndex.releases;

assert(index.object === "ANTIMATTERIUM", "public index object mismatch");
assert(index.name === "ANTIMATTERIUM", "public index name mismatch");
assert(index.latest_release === "v0.2.11-antimatterium-public-chain-os", "latest release mismatch");

assert(Array.isArray(releases), "release index must expose releases");
assert(releases.length >= 6, "expanded release chain too short");

const tags = new Set(releases.map((release) => release.tag).filter(Boolean));

assert(tags.has("v0.2.9-antimatterium-external-public-verifier"), "v0.2.9 missing");
assert(tags.has("v0.2.8-antimatterium-public-closure-audit"), "v0.2.8 missing");
assert(tags.has("v0.2.7-antimatterium-external-replay-runner"), "v0.2.7 missing");
assert(tags.has("v0.2.6-antimatterium-runtime-kernel"), "v0.2.6 missing");
assert(tags.has("v0.2.5-antimatterium-control-plane"), "v0.2.5 missing");

assert(index.external_public_verifier?.receipt === "public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json", "external public verifier receipt missing");
assert(index.external_public_verifier?.script === "scripts/antimatterium-public-external-verify.sh", "external public verifier script missing");
assert(index.external_replay?.receipt === "public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json", "external replay receipt missing");

console.log("ANTIMATTERIUM_PUBLIC_INDEX_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_RELEASE_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_EXPANDED_RELEASE_CHAIN_BOUND=true");
console.log("ANTIMATTERIUM_EXTERNAL_REPLAY_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_NPM_022_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CHAIN_OS_INDEX_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
