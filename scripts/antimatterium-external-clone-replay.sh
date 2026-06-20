#!/usr/bin/env bash
set -euo pipefail

REPO_URL="${1:-https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git}"
REF="${2:-v0.2.6-antimatterium-runtime-kernel}"
WORKDIR="$(mktemp -d)"

cleanup() { rm -rf "$WORKDIR"; }
trap cleanup EXIT

git clone --depth 1 --branch "$REF" "$REPO_URL" "$WORKDIR/ANTIMATTERIUM"
cd "$WORKDIR/ANTIMATTERIUM"

npm install
npm test
npm run verify
npm run verify:privacy
npm run verify:claims
npm run verify:control
npm run verify:runtime
node scripts/antimatterium-runtime.mjs verify-event examples/runtime/mission-estimate-input.json public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json
node scripts/antimatterium-replay.mjs receipt
