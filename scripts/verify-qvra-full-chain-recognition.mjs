import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("integrations/qvra/FULL_CHAIN_RECOGNITION_RECEIPT.json", "utf8"));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.receipt === "ANTIMATTERIUM_QVRA_FULL_CHAIN_RECOGNITION_RECEIPT", "receipt mismatch");
assert(receipt.version === "v0.2.1", "version mismatch");
assert(receipt.recognized_object.owner === "ANTIMATTERIUM", "owner mismatch");
assert(receipt.recognized_object.type === "qvra-recognized external runnable lab object", "object type mismatch");
assert(receipt.recognized_object.core_release.includes("v0.2.0-antimatterium-qvra-external-lab-recognition"), "core release missing");
assert(receipt.recognized_object.www_site === "https://antimatterium.github.io/WWW/", "www site missing");
assert(receipt.recognized_object.npm_package.includes("@antimatterium/antimatterium"), "npm package missing");

assert(receipt.qvra_recognition_chain.lab.includes("v0.1.0-qvra-antimatterium-lab-object"), "lab release missing");
assert(receipt.qvra_recognition_chain.index.includes("v0.1.0-qvra-index-antimatterium-runnable-object"), "index release missing");
assert(receipt.qvra_recognition_chain.launch.includes("v0.1.0-qvra-launch-antimatterium-runnable-object"), "launch release missing");
assert(receipt.qvra_recognition_chain.meta.includes("v0.1.0-qvra-meta-antimatterium-recognition"), "meta release missing");
assert(receipt.qvra_recognition_chain.profile.includes("v0.1.0-qvra-profile-antimatterium-recognition"), "profile release missing");

assert(receipt.external_evidence_chain.invocorder_profile.includes("v2.0.1-antimatterium-evidence-profile"), "INVOCORDER release missing");
assert(receipt.external_evidence_chain.public_surface.includes("v0.1.3-antimatterium-www-qvra-lab-recognition"), "WWW release missing");

assert(receipt.recognition_statement.includes("lab, index, launch, meta, and organization profile"), "recognition statement incomplete");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_current_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.claims_physical_production_instructions === false, "instruction overclaim");

assert(receipt.completion.QVRA_FULL_CHAIN_RECOGNITION_BOUND === true, "full chain not bound");
assert(receipt.completion.QVRA_LAB_BOUND === true, "lab not bound");
assert(receipt.completion.QVRA_INDEX_BOUND === true, "index not bound");
assert(receipt.completion.QVRA_LAUNCH_BOUND === true, "launch not bound");
assert(receipt.completion.QVRA_META_BOUND === true, "meta not bound");
assert(receipt.completion.QVRA_PROFILE_BOUND === true, "profile not bound");
assert(receipt.completion.INVOCORDER_PROFILE_BOUND === true, "INVOCORDER not bound");
assert(receipt.completion.PUBLIC_SURFACE_BOUND === true, "public surface not bound");

console.log("ANTIMATTERIUM_QVRA_FULL_CHAIN_RECOGNITION_VERIFY_PASS=true");
console.log("QVRA_FULL_CHAIN_RECOGNITION_BOUND=true");
console.log("QVRA_LAB_BOUND=true");
console.log("QVRA_INDEX_BOUND=true");
console.log("QVRA_LAUNCH_BOUND=true");
console.log("QVRA_META_BOUND=true");
console.log("QVRA_PROFILE_BOUND=true");
console.log("INVOCORDER_PROFILE_BOUND=true");
console.log("PUBLIC_SURFACE_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
