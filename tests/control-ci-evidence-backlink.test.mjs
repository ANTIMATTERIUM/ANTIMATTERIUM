import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Core binds CONTROL CI evidence seal", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-control-ci-evidence-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CORE_CONTROL_CI_EVIDENCE_BACKLINK_VERIFY_PASS=true/);
});
