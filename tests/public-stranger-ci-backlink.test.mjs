import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Core binds public stranger CI proof", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-stranger-ci-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CORE_PUBLIC_STRANGER_CI_BACKLINK_VERIFY_PASS=true/);
});
