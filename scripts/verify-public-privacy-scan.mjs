import fs from "node:fs";
import path from "node:path";

function token(parts) {
  return parts.join("");
}

const blocked = [
  token(["/U", "sers/"]),
  token(["Down", "loads", "/A", "pps"]),
  token(["SOVEREIGN", "-STACK", "-INDEX"]),
  token(["V", "AT", "Fix"]),
  token(["ka", "af", "film"]),
  token(["TRUTH", "FRAMER"]),
  token(["CINE", "MATICUM"]),
  token(["private", " folder"]),
  token(["personal", " stack", " inventory"])
];

const skipDirs = new Set([".git", "node_modules"]);
const skipFiles = new Set(["package-lock.json"]);

let failed = false;

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

    for (const b of blocked) {
      if (data.includes(b)) {
        console.error(`BLOCKED_TOKEN_PRESENT ${full}`);
        failed = true;
      }
    }
  }
}

walk(".");

if (failed) process.exit(1);

console.log("ANTIMATTERIUM_PUBLIC_PRIVACY_SCAN_PASS=true");
console.log("NO_FORBIDDEN_PUBLIC_TOKENS=true");
console.log("NO_LOCAL_MACHINE_PATHS=true");
console.log("NO_PRIVATE_FOLDER_INVENTORY=true");
console.log("NO_PERSONAL_STACK_INVENTORY=true");
console.log("NO_UNRELATED_NAMESPACE_INVENTORY=true");
