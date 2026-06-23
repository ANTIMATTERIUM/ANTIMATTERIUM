import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("public chain OS binds all public surfaces", () => {
  const chain = JSON.parse(fs.readFileSync("public/ANTIMATTERIUM_PUBLIC_CHAIN_OS.json", "utf8"));

  assert.equal(chain.chain_os_version, "0.2.11");
  assert.equal(chain.public_front_doors.npm_version, "0.2.2");
  assert.equal(chain.bound_identifiers.org_profile_receipt_id, "e07a15bd0cf976e1864a1c2ea56c10e90b716bcfb20a935e85c2628a4457e96b");
  assert.equal(chain.bound_identifiers.www_surface_receipt_id, "652a71c7a591d9c99e5781d154f5d3ff7fd5a78ed6d4529e220f50c902adf321");
  assert.equal(chain.boundaries.NO_CURRENT_PRODUCTION_CLAIM, true);
  assert.equal(chain.boundaries.NO_STARSHIP_CLAIM, true);
  assert.equal(chain.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS, true);
});
