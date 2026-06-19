import fs from "node:fs";

const index = JSON.parse(fs.readFileSync("public/releases.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(index.institution === "ANTIMATTERIUM", "institution mismatch");
assert(index.release_index_version === "v0.1.4", "release index version mismatch");
assert(Array.isArray(index.releases), "releases must be array");
assert(index.releases.length === 4, "expected 4 indexed releases");

for (const release of index.releases) {
  assert(release.tag.startsWith(`v${release.version.slice(1)}-`), `tag mismatch for ${release.version}`);
  assert(release.url.includes(release.tag), `url must include tag for ${release.version}`);
}

assert(index.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(index.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(index.claim_boundary.claims_physical_production_instructions === false, "production instruction overclaim");

console.log("ANTIMATTERIUM_PUBLIC_INDEX_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_RELEASE_INDEX_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
