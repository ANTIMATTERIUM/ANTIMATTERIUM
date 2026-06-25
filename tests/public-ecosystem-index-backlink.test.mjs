import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Core binds public ecosystem index", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-public-ecosystem-index-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CORE_PUBLIC_ECOSYSTEM_INDEX_BACKLINK_VERIFY_PASS=true/);
});
