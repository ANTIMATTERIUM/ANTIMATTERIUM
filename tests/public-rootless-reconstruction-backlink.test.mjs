import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Core binds public rootless reconstruction", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-rootless-reconstruction-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CORE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_VERIFY_PASS=true/);
});
