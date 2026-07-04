import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Core Move 63 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../integrations/control/ANTIMATTERIUM_CORE_MOVE63_CONTROL_V0229_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "core");
  assert.equal(receipt.surface_version, "0.2.44");
  assert.equal(receipt.control.version, "0.2.29");
  assert.equal(receipt.control.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(receipt.backlink_id, "c19dfefc5dc203b19ea726bba2987705a13a9bff8f70b43ed77d4a9b685c26e7");
});
