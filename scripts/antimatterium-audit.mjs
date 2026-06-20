#!/usr/bin/env node
import fs from "node:fs";
import {
  buildPublicClosureAudit,
  verifyPublicClosureAudit,
  writePublicClosureAudit
} from "../src/public-closure-audit.mjs";

const command = process.argv[2] || "status";

if (command === "status") {
  const audit = buildPublicClosureAudit();
  console.log(JSON.stringify({
    object: "ANTIMATTERIUM",
    audit: "0.2.8-public-closure-audit",
    audit_id: audit.audit_id,
    control_digest: audit.bound_identifiers.control_digest,
    runtime_event_id: audit.bound_identifiers.runtime_event_id,
    replay_id: audit.bound_identifiers.replay_id,
    status: "ready"
  }, null, 2));
} else if (command === "receipt") {
  console.log(JSON.stringify(buildPublicClosureAudit(), null, 2));
} else if (command === "write") {
  const file = process.argv[3] || "audits/public-closure/ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_V027.json";
  const audit = writePublicClosureAudit(file);
  console.log(JSON.stringify({ written: file, audit_id: audit.audit_id }, null, 2));
} else if (command === "verify") {
  const file = process.argv[3] || "audits/public-closure/ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_V027.json";
  verifyPublicClosureAudit(JSON.parse(fs.readFileSync(file, "utf8")));
  console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_VERIFY_PASS=true");
} else {
  console.error(`unknown command: ${command}`);
  process.exit(1);
}
