import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("ANTIMATTERIUM verifier passes", () => {
const out = execFileSync("node", ["scripts/verify-antimatterium.mjs"], {
encoding: "utf8"
});
assert.match(out, /ANTIMATTERIUM_INDUSTRIALIZATION_CHARTER_PASS=true/);
assert.match(out, /NO_CURRENT_PRODUCTION_CLAIM=true/);
assert.match(out, /NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true/);
});
