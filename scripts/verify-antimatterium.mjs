import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(p) {
return fs.readFileSync(path.join(root, p), "utf8");
}

function json(p) {
return JSON.parse(read(p));
}

function assert(condition, message) {
if (!condition) throw new Error(message);
}

function assertFile(p) {
assert(fs.existsSync(path.join(root, p)), `missing file: ${p}`);
}

const requiredFiles = [
"README.md",
"CHARTER_OF_ANTIMATTER_INDUSTRIALIZATION.md",
"standards/ANTIMATTERIUM_STANDARD.json",
"models/MISSION_CLASSES.json",
"models/PRODUCTION_ECONOMY_MODEL.json",
"models/STORAGE_FAILURE_MODEL.json",
"models/STARFLIGHT_ASSUMPTION_LEDGER.json",
"custody/CUSTODY_RECEIPT_STANDARD.json",
"sources/SOURCE_AUTHORITY_INDEX.json"
];

for (const file of requiredFiles) assertFile(file);

const rootSentence = "ANTIMATTERIUM models, verifies, and industrializes antimatter as a manufactured energy carrier for starflight.";
const readme = read("README.md");
const charter = read("CHARTER_OF_ANTIMATTER_INDUSTRIALIZATION.md");
const standard = json("standards/ANTIMATTERIUM_STANDARD.json");
const missions = json("models/MISSION_CLASSES.json");
const production = json("models/PRODUCTION_ECONOMY_MODEL.json");
const storage = json("models/STORAGE_FAILURE_MODEL.json");
const custody = json("custody/CUSTODY_RECEIPT_STANDARD.json");
const assumptions = json("models/STARFLIGHT_ASSUMPTION_LEDGER.json");
const sources = json("sources/SOURCE_AUTHORITY_INDEX.json");

assert(readme.includes(rootSentence), "README root sentence missing");
assert(charter.includes(rootSentence), "charter root sentence missing");
assert(standard.root_sentence === rootSentence, "standard root sentence mismatch");

assert(standard.current_claims.claims_current_industrial_antimatter_production === false, "industrial production overclaim");
assert(standard.current_claims.claims_current_starship_readiness === false, "starship readiness overclaim");
assert(standard.current_claims.provides_physical_production_instructions === false, "physical production instruction overclaim");

assert(Array.isArray(missions.mission_classes), "mission classes missing");
assert(missions.mission_classes.length === 7, "expected mission classes 0 through 6");
assert(missions.mission_classes.map(x => x.class_id).join(",") === "0,1,2,3,4,5,6", "mission class IDs must be 0..6");

assert(production.constants.speed_of_light_m_per_s === 299792458, "speed of light constant mismatch");
assert(production.refusal_conditions.includes("REFUSE_PHYSICAL_PRODUCTION_INSTRUCTIONS"), "production model must refuse physical production instructions");

assert(storage.refusal_conditions.includes("REFUSE_STORAGE_WITHOUT_LOSS_MODEL"), "storage must refuse missing loss model");
assert(custody.required_does_not_prove.includes("industrial_production"), "custody receipt must not prove industrial production");
assert(custody.required_does_not_prove.includes("starship_readiness"), "custody receipt must not prove starship readiness");

assert(assumptions.alternative_comparison_required === true, "alternative propulsion comparison required");
assert(assumptions.forbidden_shortcuts.includes("treat_annihilation_energy_as_100_percent_thrust"), "must forbid 100% thrust shortcut");

const sourceIds = new Set(sources.sources.map(s => s.source_id));
assert(sourceIds.has("CERN_ANTIMATTER_OVERVIEW"), "CERN source missing");
assert(sourceIds.has("NASA_NTRS_ANTIMATTER_PROPULSION_2020"), "NASA source missing");

const allText = requiredFiles.map(read).join("\n").toLowerCase();
assert(!allText.includes("how to build an antimatter"), "unsafe production phrasing present");
console.log("ANTIMATTERIUM_INDUSTRIALIZATION_CHARTER_PASS=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
console.log("NASA_SOURCE_BOUND=true");
console.log("CERN_SOURCE_BOUND=true");
console.log("MISSION_CLASSES_BOUND=true");
console.log("PRODUCTION_COST_MODEL_BOUND=true");
console.log("STORAGE_FAILURE_MODEL_BOUND=true");
console.log("CUSTODY_RECEIPT_STANDARD_BOUND=true");
console.log("SOURCE_AUTHORITY_INDEX_BOUND=true");

const claimScanText = [
  "README.md",
  "CHARTER_OF_ANTIMATTER_INDUSTRIALIZATION.md",
  "standards/ANTIMATTERIUM_STANDARD.json"
]
  .filter((file) => fs.existsSync(file))
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

const blockedClaimTokens = [
  ["wea", "ponize"].join(""),
  ["wea", "ponization"].join(""),
  ["war", "head"].join(""),
  ["explo", "sive"].join("")
];

for (const token of blockedClaimTokens) {
  assert(!claimScanText.includes(token), "prohibited misuse phrasing present");
}
