import test from "node:test";
import assert from "node:assert/strict";
import {
  buildPublicClosureAudit,
  verifyPublicClosureAudit
} from "../src/public-closure-audit.mjs";

test("public closure audit builds and verifies", () => {
  const audit = buildPublicClosureAudit();

  assert.equal(audit.schema, "ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT");
  assert.equal(audit.object, "ANTIMATTERIUM");
  assert.equal(audit.core.tag, "v0.2.7-antimatterium-external-replay-runner");
  assert.equal(audit.www.tag, "v0.1.5-antimatterium-www-external-replay-surface");
  assert.equal(audit.org_profile.tag, "v0.0.3-antimatterium-org-profile-external-replay-surface");
  assert.match(audit.audit_id, /^[a-f0-9]{64}$/);
  assert.equal(verifyPublicClosureAudit(audit), true);
});
