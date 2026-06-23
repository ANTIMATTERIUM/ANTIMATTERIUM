# ANTIMATTERIUM Public Surface

ANTIMATTERIUM is the public industrial evidence layer for antimatter economics, custody, storage-risk modeling, source authority, and starflight mission architecture.

It does not claim current industrial antimatter production.

It does not claim current starship readiness.

It exists to make the future antimatter economy calculable before it is buildable.

## External Public Verifier

A clean external verifier script is available for independent replay from a temporary directory.

```bash
bash scripts/antimatterium-public-external-verify.sh
````

The verifier clones the public repository, installs dependencies, runs the audit/control/runtime/replay verification suite, and checks the bound audit ID, control digest, runtime event ID, and replay ID.

## npm 0.2.2 Publication

The `0.2.2` npm publication binds the external public verifier, public closure audit, control digest, runtime event ID, and replay ID into a package-distribution receipt.

```bash id="wwnhmb"
npm run verify:npm-022
```


## Public Chain OS

ANTIMATTERIUM v0.2.11 introduces a single public chain operating ledger binding Core v0.2.10, WWW v0.1.6, org profile v0.0.4, npm 0.2.2, the public verifier, public audit, control digest, runtime event, and replay receipt.

```bash id="sx720r"
npm run verify:public-chain-os
node scripts/antimatterium-public-chain.mjs
````


## CONTROL CI Evidence Backlink

Core v0.2.12 binds the public CONTROL v0.1.2 CI evidence seal.

```text
ANTIMATTERIUM_CORE_CONTROL_CI_EVIDENCE_BACKLINK_VERIFY_PASS=true
````

