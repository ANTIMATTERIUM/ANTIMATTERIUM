import fs from "node:fs";
import path from "node:path";

function token(parts) {
  return parts.join("");
}

const blocked = [
  token(["current industrial antimatter production is ", "live"]),
  token(["star", "ship ready"]),
  token(["how to produce ", "antimatter"]),
  token(["build ", "antimatter"]),
  token(["wea", "pon"]),
  token(["war", "head"]),
  token(["explo", "sive"]),
  token(["wea", "ponization", "_framework"])
];

const allowedBoundaryPhrases = [
  "does not provide physical production instructions",
  "not current industrial antimatter production",
  "not starship readiness",
  "not physical production instructions",
  "physical production instructions are excluded",
  "REFUSE_PHYSICAL_PRODUCTION_INSTRUCTIONS"
];

const skipDirs = new Set([".git", "node_modules"]);
const skipFiles = new Set([
  "package-lock.json",
  "verify-claim-boundary-scan.mjs",
  "verify-antimatterium.mjs"
]);

let failed = false;

function isAllowedBoundary(line) {
  return allowedBoundaryPhrases.some((p) => line.includes(p));
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!skipDirs.has(entry.name)) walk(full);
      continue;
    }

    if (!entry.isFile() || skipFiles.has(entry.name)) continue;

    let data;
    try {
      data = fs.readFileSync(full, "utf8");
    } catch {
      continue;
    }

    const lines = data.split(/\r?\n/);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      for (const b of blocked) {
        if (line.includes(b) && !isAllowedBoundary(line)) {
          console.error(`UNBOUNDED_CLAIM_TOKEN ${full}:${i + 1}`);
          failed = true;
        }
      }
    }
  }
}

walk(".");

if (failed) process.exit(1);

console.log("ANTIMATTERIUM_CLAIM_BOUNDARY_SCAN_PASS=true");
console.log("NO_UNBOUNDED_CLAIM_TOKENS=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
console.log("NO_HARMFUL_SYSTEMS_FRAMEWORK=true");
