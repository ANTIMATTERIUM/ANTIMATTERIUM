import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("Core binds CONTROL v0.2.8 rootless fanout backlink closure", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink.mjs"], {
    cwd: process.cwd(),
    encoding: "utf8"
  });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=821d3cad905a1f5a779e354f31df225db665166c707289548d87e7d807ce1370/);
});
