import fs from "node:fs";
import {
  buildPublicClosureAudit,
  verifyPublicClosureAudit,
  writePublicClosureAudit
} from "../src/public-closure-audit.mjs";

const file = "audits/public-closure/ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_V027.json";

if (process.argv.includes("--write")) {
  writePublicClosureAudit(file);
}

if (!fs.existsSync(file)) {
  writePublicClosureAudit(file);
}

const audit = JSON.parse(fs.readFileSync(file, "utf8"));
verifyPublicClosureAudit(audit);

const generated = buildPublicClosureAudit();
if (audit.audit_id !== generated.audit_id) {
  throw new Error("public closure audit is stale");
}

console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_CORE_V027_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_WWW_V015_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_ORG_PROFILE_V003_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_CONTROL_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_RUNTIME_EVENT_BOUND=true");
console.log("ANTIMATTERIUM_PUBLIC_CLOSURE_REPLAY_ID_BOUND=true");
console.log("NON_PUBLIC_INFORMATION_EXCLUDED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
