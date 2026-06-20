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
