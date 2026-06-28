import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Core binds CONTROL v0.2.4 rootless fanout backpropagation echo fanout closure", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-rootless-fanout-backpropagation-echo-fanout-closure-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_BACKLINK_VERIFY_PASS=true/);
});
