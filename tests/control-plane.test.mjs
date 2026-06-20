import test from "node:test";
import assert from "node:assert/strict";
import {
  buildControlPlaneBundle,
  verifyControlPlaneBundle,
  controlPlaneStatus
} from "../src/control-plane.mjs";

test("control plane bundle verifies", () => {
  const bundle = buildControlPlaneBundle();
  assert.equal(verifyControlPlaneBundle(bundle), true);
  assert.equal(bundle.object, "ANTIMATTERIUM");
  assert.equal(bundle.release.tag, "v0.2.5-antimatterium-control-plane");
  assert.ok(bundle.artifacts.length >= 15);
  assert.match(bundle.digest.sha256, /^[a-f0-9]{64}$/);
});

test("control plane status is verified", () => {
  const status = controlPlaneStatus();
  assert.equal(status.status, "verified");
  assert.equal(status.object, "ANTIMATTERIUM");
  assert.equal(status.version, "0.2.5-control-plane");
  assert.match(status.digest, /^[a-f0-9]{64}$/);
});

test("control plane boundaries remain false", () => {
  const bundle = buildControlPlaneBundle();

  for (const value of Object.values(bundle.boundaries)) {
    assert.equal(value, false);
  }
});
