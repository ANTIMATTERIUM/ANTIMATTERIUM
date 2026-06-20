import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();

const CONTROL_BUNDLE_PATH = "public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json";

const REQUIRED_ARTIFACTS = [
  "README.md",
  "CHARTER_OF_ANTIMATTER_INDUSTRIALIZATION.md",
  "ANTIMATTERIUM_CONTROL_SEAL.json",
  "ANTIMATTERIUM_COMPLETION_RECEIPT.json",
  "public/antimatterium.json",
  "public/releases.json",
  "integrations/CROSS_STACK_BINDING.json",
  "integrations/verifrax/ADMISSIBILITY_BRIDGE.json",
  "integrations/invocorder/MACHINE_ACTION_RECORD_PROFILE.json",
  "integrations/qvra/LAB_RUN_BINDING.json",
  "integrations/qvra/FULL_CHAIN_RECOGNITION_RECEIPT.json",
  "integrations/npm/NPM_021_PUBLICATION_RECEIPT.json",
  "models/MISSION_CLASSES.json",
  "models/PRODUCTION_ECONOMY_MODEL.json",
  "models/STORAGE_FAILURE_MODEL.json",
  "models/STARFLIGHT_ASSUMPTION_LEDGER.json",
  "sources/SOURCE_AUTHORITY_INDEX.json",
  "standards/ANTIMATTERIUM_STANDARD.json",
  "schemas/ANTIMATTERIUM_CONTROL_PLANE_SCHEMA.json",
  "schemas/ANTIMATTERIUM_RUNTIME_KERNEL_SCHEMA.json",
  "src/runtime-kernel.mjs",
  "scripts/antimatterium-runtime.mjs",
  "scripts/verify-runtime-kernel.mjs",
  "public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json"
];

function read(file) {
  return fs.readFileSync(path.join(ROOT, file));
}

function readText(file) {
  return read(file).toString("utf8");
}

function sha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function canonical(value) {
  return JSON.stringify(value, Object.keys(value).sort(), 2);
}

function deepCanonical(value) {
  if (Array.isArray(value)) {
    return value.map(deepCanonical);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, deepCanonical(value[key])])
    );
  }

  return value;
}

function packageVersion() {
  return JSON.parse(readText("package.json")).version;
}

function artifact(file) {
  const data = read(file);

  return {
    path: file,
    sha256: sha256(data),
    bytes: data.length
  };
}

function requiredArtifacts() {
  for (const file of REQUIRED_ARTIFACTS) {
    if (!fs.existsSync(path.join(ROOT, file))) {
      throw new Error(`missing required control-plane artifact: ${file}`);
    }
  }

  return REQUIRED_ARTIFACTS.map(artifact);
}

function graph() {
  return {
    nodes: [
      { id: "ANTIMATTERIUM", type: "bounded_public_object" },
      { id: "CONTROL_SEAL", type: "public_control_closure" },
      { id: "PUBLIC_INDEX", type: "release_index" },
      { id: "MISSION_MODELS", type: "bounded_estimation_models" },
      { id: "VERIFRAX_BRIDGE", type: "admissibility_bridge" },
      { id: "INVOCORDER_PROFILE", type: "machine_action_profile" },
      { id: "QVRA_BINDING", type: "external_lab_binding" },
      { id: "NPM_RECEIPT", type: "package_receipt" },
      { id: "RUNTIME_KERNEL", type: "admission_runtime_kernel" }
    ],
    edges: [
      ["ANTIMATTERIUM", "CONTROL_SEAL", "sealed_by"],
      ["ANTIMATTERIUM", "PUBLIC_INDEX", "indexed_by"],
      ["ANTIMATTERIUM", "MISSION_MODELS", "uses"],
      ["ANTIMATTERIUM", "VERIFRAX_BRIDGE", "admitted_by"],
      ["ANTIMATTERIUM", "INVOCORDER_PROFILE", "recordable_by"],
      ["ANTIMATTERIUM", "QVRA_BINDING", "recognized_by"],
      ["ANTIMATTERIUM", "NPM_RECEIPT", "distributed_as"],
      ["ANTIMATTERIUM", "RUNTIME_KERNEL", "executed_by"]
    ]
  };
}

function boundaries() {
  return {
    current_production_claim: false,
    starship_readiness_claim: false,
    physical_instruction_content: false,
    forbidden_public_tokens: false,
    local_machine_paths: false,
    non_public_inventory: false,
    unrelated_namespace_inventory: false
  };
}

export function buildControlPlaneBundle() {
  const artifacts = requiredArtifacts();

  const bundleWithoutDigest = {
    schema: "ANTIMATTERIUM_CONTROL_PLANE_BUNDLE",
    object: "ANTIMATTERIUM",
    version: "0.2.5-control-plane",
    package_version: packageVersion(),
    release: {
      tag: "v0.2.5-antimatterium-control-plane",
      url: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.5-antimatterium-control-plane"
    },
    previous_release: {
      tag: "v0.2.4-antimatterium-claim-token-scrub",
      url: "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.4-antimatterium-claim-token-scrub"
    },
    npm: {
      package: "@antimatterium/antimatterium",
      latest_published_version: "0.2.1"
    },
    boundaries: boundaries(),
    artifacts,
    graph: graph()
  };

  const encoded = canonical(bundleWithoutDigest);

  return {
    ...bundleWithoutDigest,
    digest: {
      algorithm: "sha256",
      sha256: sha256(encoded)
    }
  };
}

export function verifyControlPlaneBundle(bundle = buildControlPlaneBundle()) {
  if (bundle.schema !== "ANTIMATTERIUM_CONTROL_PLANE_BUNDLE") throw new Error("schema mismatch");
  if (bundle.object !== "ANTIMATTERIUM") throw new Error("object mismatch");
  if (bundle.version !== "0.2.5-control-plane") throw new Error("version mismatch");
  if (bundle.package_version !== packageVersion()) throw new Error("package version mismatch");
  if (bundle.release.tag !== "v0.2.5-antimatterium-control-plane") throw new Error("release tag mismatch");

  for (const [key, value] of Object.entries(bundle.boundaries)) {
    if (value !== false) throw new Error(`boundary must be false: ${key}`);
  }

  for (const item of bundle.artifacts) {
    const data = read(item.path);
    if (item.sha256 !== sha256(data)) throw new Error(`artifact digest mismatch: ${item.path}`);
    if (item.bytes !== data.length) throw new Error(`artifact byte length mismatch: ${item.path}`);
  }

  const copy = structuredClone(bundle);
  delete copy.digest;

  const expected = sha256(canonical(copy));

  if (bundle.digest.algorithm !== "sha256") throw new Error("digest algorithm mismatch");
  if (bundle.digest.sha256 !== expected) throw new Error("bundle digest mismatch");

  return true;
}

export function writeControlPlaneBundle(file = CONTROL_BUNDLE_PATH) {
  const bundle = buildControlPlaneBundle();
  fs.writeFileSync(path.join(ROOT, file), JSON.stringify(bundle, null, 2) + "\n");
  return bundle;
}

export function controlPlaneStatus() {
  const bundle = buildControlPlaneBundle();
  verifyControlPlaneBundle(bundle);

  return {
    object: bundle.object,
    version: bundle.version,
    package_version: bundle.package_version,
    release: bundle.release.tag,
    artifact_count: bundle.artifacts.length,
    digest: bundle.digest.sha256,
    status: "verified"
  };
}
