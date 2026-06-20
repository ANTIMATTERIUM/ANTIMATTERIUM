import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import crypto from "node:crypto";

test("external public verifier receipt binds script and expected identifiers", () => {
  const receipt = JSON.parse(fs.readFileSync("public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json", "utf8"));
  const script = fs.readFileSync("scripts/antimatterium-public-external-verify.sh", "utf8");

  assert.equal(receipt.schema, "ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER");
  assert.equal(receipt.object, "ANTIMATTERIUM");
  assert.equal(receipt.verifier_version, "0.2.9-external-public-verifier");
  assert.match(receipt.verifier_id, /^[a-f0-9]{64}$/);

  assert.match(receipt.expected_outputs.AUDIT_ID, /^[a-f0-9]{64}$/);
  assert.match(receipt.expected_outputs.CONTROL_DIGEST, /^[a-f0-9]{64}$/);
  assert.match(receipt.expected_outputs.RUNTIME_EVENT_ID, /^[a-f0-9]{64}$/);
  assert.match(receipt.expected_outputs.REPLAY_ID, /^[a-f0-9]{64}$/);

  assert.ok(script.includes("git clone --depth 1"));
  assert.ok(script.includes("npm run verify:audit"));
  assert.ok(script.includes("npm run verify:external-public"));

  assert.ok(script.includes("jq -r '.expected_outputs.AUDIT_ID'"));
  assert.ok(script.includes("jq -r '.expected_outputs.CONTROL_DIGEST'"));
  assert.ok(script.includes("jq -r '.expected_outputs.RUNTIME_EVENT_ID'"));
  assert.ok(script.includes("jq -r '.expected_outputs.REPLAY_ID'"));

  const copy = structuredClone(receipt);
  delete copy.verifier_id;
  const expectedVerifierId = crypto.createHash("sha256").update(JSON.stringify(copy)).digest("hex");
  assert.equal(receipt.verifier_id, expectedVerifierId);
});
