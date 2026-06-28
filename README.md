# ANTIMATTERIUM

**ANTIMATTERIUM models, verifies, and industrializes antimatter as a manufactured energy carrier for starflight.**

This is the governing sentence.

Not fantasy propulsion.
Not a laboratory claim.
Not a particle accelerator project.
Not a starship company.
Not a harmful-systems project.
Not a DIY antimatter machine.

ANTIMATTERIUM begins at the only lawful current position:

```text
antimatter-starflight civilization requires a calculable industrial pathway before it can become a buildable industrial pathway
````

## Primary identity

ANTIMATTERIUM is a public engineering, economics, custody, and mission-architecture framework for antimatter as a manufactured energy carrier for deep-space and interstellar propulsion.

The first task is not to produce antimatter.

The first task is to make the future antimatter economy inspectable:

* production energy
* production efficiency
* antiproton / antihydrogen yield
* capture loss
* trap custody
* storage decay and loss
* transport boundary
* annihilation-event accounting
* propulsion architecture
* radiator and shielding penalty
* mission class feasibility
* source authority
* refusal conditions
* public proof of assumptions

## Boundary

ANTIMATTERIUM does not claim current industrial antimatter production.

ANTIMATTERIUM does not claim that bulk antimatter storage is solved.

ANTIMATTERIUM does not claim that a starship is currently buildable.

ANTIMATTERIUM does not provide physical production instructions.

ANTIMATTERIUM does not collapse physics, engineering, economics, custody, propulsion, and governance into one untyped story.

## Correct category

```text
industrial antimatter evidence infrastructure
```

## Central future thesis

A future civilization may spend `10^24` dollars or more on antimatter production, storage, custody, and propulsion infrastructure if compact onboard relativistic starflight becomes strategically necessary.

ANTIMATTERIUM exists to make that economy calculable before it is buildable.

## First release target

```text
v0.1.0 — Antimatter Industrialization Charter
```

## Acceptance condition

```text
ANTIMATTERIUM_INDUSTRIALIZATION_CHARTER_PASS=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
NASA_SOURCE_BOUND=true
CERN_SOURCE_BOUND=true
MISSION_CLASSES_BOUND=true
PRODUCTION_COST_MODEL_BOUND=true
STORAGE_FAILURE_MODEL_BOUND=true
CUSTODY_RECEIPT_STANDARD_BOUND=true
SOURCE_AUTHORITY_INDEX_BOUND=true
```

## Mission classes

| Class | Name                    | Meaning                                                                       |
| ----: | ----------------------- | ----------------------------------------------------------------------------- |
|     0 | Physics benchmark       | laboratory antimatter production and measurement boundary                     |
|     1 | Custody benchmark       | storage, transfer, and loss accounting boundary                               |
|     2 | Catalyzed propulsion    | antimatter as ignition or trigger, not bulk fuel                              |
|     3 | Deep-space precursor    | outer solar system and heliopause-class mission analysis                      |
|     4 | 250 AU probe            | bounded interstellar precursor target class                                   |
|     5 | Interstellar precursor  | multi-decade probe beyond solar gravity lens / nearby-star precursor envelope |
|     6 | Relativistic starflight | civilization-scale antimatter economy and propulsion architecture             |

## Repository map

```text
ANTIMATTERIUM/
├─ README.md
├─ CHARTER_OF_ANTIMATTER_INDUSTRIALIZATION.md
├─ standards/
│  └─ ANTIMATTERIUM_STANDARD.json
├─ models/
│  ├─ MISSION_CLASSES.json
│  ├─ PRODUCTION_ECONOMY_MODEL.json
│  ├─ STORAGE_FAILURE_MODEL.json
│  └─ STARFLIGHT_ASSUMPTION_LEDGER.json
├─ custody/
│  └─ CUSTODY_RECEIPT_STANDARD.json
├─ sources/
│  └─ SOURCE_AUTHORITY_INDEX.json
├─ scripts/
│  └─ verify-antimatterium.mjs
├─ tests/
│  └─ antimatterium.test.mjs
└─ .github/workflows/
   └─ antimatterium.yml
```

## Non-role clauses

ANTIMATTERIUM is not CERN.

ANTIMATTERIUM is not NASA.

ANTIMATTERIUM is not a production facility.

ANTIMATTERIUM is not a propulsion test range.

ANTIMATTERIUM is not a harmful-systems research program.

ANTIMATTERIUM is not a launch provider.

ANTIMATTERIUM is the industrial evidence and architecture layer required before antimatter starflight can become an accountable engineering program.

## License

Apache License 2.0.

## Control Plane

ANTIMATTERIUM now includes a deterministic public control plane.

```bash
npm run verify:control
node scripts/antimatterium-control.mjs status
node scripts/antimatterium-control.mjs digest
````

The control plane binds public receipts, indexes, model files, source authority, external recognition receipts, and package receipt into one digest-addressed bundle:

```text
public/ANTIMATTERIUM_CONTROL_PLANE_BUNDLE.json
schemas/ANTIMATTERIUM_CONTROL_PLANE_SCHEMA.json
docs/CONTROL_PLANE.md
```


## Runtime Kernel

ANTIMATTERIUM now includes a runtime kernel for public bounded execution.

```bash id="ul6kc2"
npm run verify:runtime
node scripts/antimatterium-runtime.mjs status
node scripts/antimatterium-runtime.mjs estimate examples/runtime/mission-estimate-input.json
node scripts/antimatterium-runtime.mjs event examples/runtime/mission-estimate-input.json
```

The runtime kernel performs admission checks, emits replayable runtime events, and binds input/output digests without physical-production instructions.

## External Replay Runner

ANTIMATTERIUM includes an external replay runner that binds the public release, control-plane digest, runtime event, artifact digests, and replay commands into one public receipt.

```bash
npm run verify:replay
node scripts/antimatterium-replay.mjs status
node scripts/antimatterium-replay.mjs receipt
bash scripts/antimatterium-external-clone-replay.sh
```


## Public Closure Audit

ANTIMATTERIUM includes a public closure audit binding the core external replay runner, WWW projection, organization profile projection, npm package, control-plane digest, runtime event ID, and replay ID.

```bash
npm run verify:audit
antimatterium-audit status
```


## External Public Verify

Run a clean public replay from a temporary directory:

```bash
bash scripts/antimatterium-public-external-verify.sh
```

Expected bound outputs are checked against the public closure audit.

## npm 0.2.2

The npm package release `0.2.2` carries the external public verifier stack.

```bash id="0c97r2"
npm i @antimatterium/antimatterium@0.2.2
npx antimatterium-public-external-verify
````


## Public Chain OS

```bash id="yhajgh"
npm run verify:public-chain-os
node scripts/antimatterium-public-chain.mjs
```


## Rootless Fanout Echo Backlink

Core v0.2.16 binds the CONTROL v0.2.1 rootless fanout echo closure.

Command:

npm run verify:rootless-fanout-echo

Marker:

ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_ECHO_MEMBER=true

## Rootless Fanout Backlink Closure Backlink

Core v0.2.17 binds CONTROL v0.2.2 rootless fanout backlink closure.

Command:

npm run verify:rootless-fanout-backlink-closure

Marker:

ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_MEMBER=true

## Rootless Fanout Backpropagation Echo Backlink

Core v0.2.18 binds CONTROL v0.2.3 rootless fanout backpropagation echo closure.

Command:

npm run verify:rootless-fanout-backpropagation-echo

Marker:

ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_MEMBER=true

## Rootless Fanout Backpropagation Echo Fanout Closure Backlink

Core v0.2.19 binds CONTROL v0.2.4 rootless fanout backpropagation echo fanout closure.

Command:

npm run verify:rootless-fanout-backpropagation-echo-fanout-closure

Marker:

ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_CLOSURE_MEMBER=true

## Rootless Fanout Backpropagation Echo Fanout Backlink Closure

Core binds CONTROL v0.2.5 as a public backlink to the rootless fanout backpropagation echo fanout backlink closure.

Command:

npm run verify:rootless-fanout-backpropagation-echo-fanout-backlink-closure

Markers:

ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
