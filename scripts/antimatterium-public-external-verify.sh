#!/usr/bin/env bash
set -euo pipefail

echo "=== ANTIMATTERIUM EXTERNAL PUBLIC VERIFY ==="

WORKDIR="${TMPDIR:-/tmp}/antimatterium-public-verify-$$"
REPO_URL="https://github.com/ANTIMATTERIUM/ANTIMATTERIUM.git"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"

echo "VERIFY_WORKDIR=$WORKDIR"
git clone --depth 1 "$REPO_URL" "$WORKDIR/ANTIMATTERIUM"

cd "$WORKDIR/ANTIMATTERIUM"

npm install

npm test
npm run verify
npm run verify:index
npm run verify:seal
npm run verify:privacy
npm run verify:claims
npm run verify:control
npm run verify:runtime
npm run verify:replay
npm run verify:audit
npm run verify:external-public
node --test tests/economy-engine.test.mjs tests/mission-runner.test.mjs tests/control-plane.test.mjs tests/runtime-kernel.test.mjs tests/external-replay.test.mjs tests/public-closure-audit.test.mjs tests/external-public-verifier.test.mjs

EXPECTED_AUDIT_ID="$(jq -r '.expected_outputs.AUDIT_ID' public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json)"
EXPECTED_CONTROL_DIGEST="$(jq -r '.expected_outputs.CONTROL_DIGEST' public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json)"
EXPECTED_RUNTIME_EVENT_ID="$(jq -r '.expected_outputs.RUNTIME_EVENT_ID' public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json)"
EXPECTED_REPLAY_ID="$(jq -r '.expected_outputs.REPLAY_ID' public/verifiers/ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFIER.json)"

AUDIT_ID="$(node scripts/antimatterium-audit.mjs receipt | jq -r '.audit_id')"
CONTROL_DIGEST="$(node scripts/antimatterium-control.mjs digest)"
RUNTIME_EVENT_ID="$(node scripts/antimatterium-runtime.mjs event examples/runtime/mission-estimate-input.json | jq -r '.event_id')"
REPLAY_ID="$(node scripts/antimatterium-replay.mjs receipt | jq -r '.replay_id')"

test "$AUDIT_ID" = "$EXPECTED_AUDIT_ID"
test "$CONTROL_DIGEST" = "$EXPECTED_CONTROL_DIGEST"
test "$RUNTIME_EVENT_ID" = "$EXPECTED_RUNTIME_EVENT_ID"
test "$REPLAY_ID" = "$EXPECTED_REPLAY_ID"

echo "ANTIMATTERIUM_EXTERNAL_PUBLIC_VERIFY_PASS=true"
echo "ANTIMATTERIUM_PUBLIC_CLOSURE_AUDIT_VERIFY_PASS=true"
echo "ANTIMATTERIUM_CONTROL_DIGEST_BOUND=true"
echo "ANTIMATTERIUM_RUNTIME_EVENT_BOUND=true"
echo "ANTIMATTERIUM_REPLAY_ID_BOUND=true"
echo "AUDIT_ID=$AUDIT_ID"
echo "CONTROL_DIGEST=$CONTROL_DIGEST"
echo "RUNTIME_EVENT_ID=$RUNTIME_EVENT_ID"
echo "REPLAY_ID=$REPLAY_ID"
echo "NO_CURRENT_PRODUCTION_CLAIM=true"
echo "NO_STARSHIP_CLAIM=true"
echo "NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true"
