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

<!-- antimatterium-move17-rootless-fanout-backlink-closure-backpropagation-closure-backlink -->
## CONTROL v0.2.6 Backlink

This surface binds CONTROL v0.2.6 rootless fanout backlink closure backpropagation closure as a public replayable backlink.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.6-antimatterium-control-rootless-fanout-backpropagation-echo-fanout-backlink-closure-backpropagation-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327289926
- CONTROL closure ID: 831c663f39d9d5151c5e56e16f5565406f7059624c030ba527f8a48afdd24386
- Local-root dependency: not required
- Current production claim: false
- Starship claim: false
- Physical production instructions: false\n\n<!-- ANTIMATTERIUM:ROOTLESS-FANOUT-BACKLINK-CLOSURE-BACKPROPAGATION-CLOSURE-FANOUT-CLOSURE-BACKLINK:START -->\n## CONTROL v0.2.7 rootless fanout backlink closure backpropagation closure fanout closure backlink\n\n- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.7-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure\n- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28327734001\n- Closure id: 755c0844bc9bd8c3194e1fc02bc1254e9b6a0c5cefb79d21bb5ae6d0b1e5baa1\n- Backlink id: 04cc333c78c0342594b6809f638ba855da99a6cd36c50c86596ff50f7c0a8d61\n- Local root required: false\n- Current production claim: false\n- Starship claim: false\n- Physical production instructions: false\n<!-- ANTIMATTERIUM:ROOTLESS-FANOUT-BACKLINK-CLOSURE-BACKPROPAGATION-CLOSURE-FANOUT-CLOSURE-BACKLINK:END -->\n

<!-- ANTIMATTERIUM_MOVE21_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_START -->
## CONTROL v0.2.8 rootless fanout backlink closure backlink

This surface binds the CONTROL v0.2.8 public closure into Core.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.8-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure
- CONTROL public CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28334484888
- CONTROL closure id: be4ae8df12eb897733590e1732b9e539447cb16e2b1de6018f62c4d41e4cd3ff
- Surface backlink id: 821d3cad905a1f5a779e354f31df225db665166c707289548d87e7d807ce1370
- Local root required: no
- Current production claim: no
- Starship claim: no
- Physical production instructions: no
<!-- ANTIMATTERIUM_MOVE21_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_END -->\n\n<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_START -->\n## CONTROL v0.2.9 public backlink\n\nThis surface binds CONTROL v0.2.9 as a public backlink for `rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure`.\n\n- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.9-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure\n- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28335270892\n- CONTROL closure id: `570726c66a7f54f3e015ff8d4f09860036957d41c788e3cea8be16ff81d76f44`\n- Surface backlink id: `6c84c858ce7a8fc4c70d7219b012cf51c612db32a63da6ec86696cdcd9db97ce`\n- `NO_CURRENT_PRODUCTION_CLAIM=true`\n- `NO_STARSHIP_CLAIM=true`\n- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`\n<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_END -->\n

<!-- ANTIMATTERIUM:CONTROL_V0210_BACKLINK:START -->
### CONTROL v0.2.10 backlink

This public surface binds CONTROL v0.2.10 as a replayable upstream closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.10-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28336116773
- CONTROL closure id: 12940aa22c1477af9f4748f928b94eaaecb7e1379717997504c66b6975d19baf
- Surface backlink id: 4c015cd8bc31bd51c0aa4f6b6101a4827e1ebca2e2820a2ce4d3bb2564fd23f0
- Local root required: false
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
<!-- ANTIMATTERIUM:CONTROL_V0210_BACKLINK:END -->

<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_START -->
## CONTROL v0.2.11 public backlink

This public surface binds CONTROL v0.2.11 as a replayable upstream closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.11-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28475228834
- CONTROL closure id: `58b6405492f8994415207a64b4a6051d7970996d601d3a5a7639033ee323fd8b`
- Surface backlink id: `c6d3ad0d2cac39a49bda98037b94096c06265da10bd544f8076853e08efb5ede`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_END -->

<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_START -->
## CONTROL v0.2.12 public backlink

This public surface binds CONTROL v0.2.12 as a replayable upstream closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.12-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28477606355
- CONTROL closure id: `a6ccef52b1a881bfbdf7f066becc46b326d964bb96ebd98648447493a7c2e0fe`
- Surface backlink id: `eee199189c9650736dcaba1905315b96f1ce4a7cddd380ce2d399324af04ac85`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_END -->

<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_START -->
## CONTROL v0.2.13 public backlink

This public surface binds CONTROL v0.2.13 as a replayable upstream closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.13-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28506699839
- CONTROL closure id: `1554781e58535f16c8c5d266af98bdbb8d60f6d397488e6c5b473d8cb780bf4d`
- Surface backlink id: `7659f6ecdec65d805d85cb22b3c02402c6d58099d91343ebda3a0a9c67938ce9`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_END -->

<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_START -->
## CONTROL v0.2.14 public backlink

This public surface binds CONTROL v0.2.14 as a replayable upstream closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.14-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28516323178
- CONTROL closure id: `34137b43fa0f45b2315b7d3df5b1214b0dbbfd9af8cec3b113ba425dfa27010f`
- Surface backlink id: `a13b1a78f9ea232e6d14c0ca99cffdfbaa647965a797ab2fed06186d1f7c04a6`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CORE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_END -->

<!-- ANTIMATTERIUM_CORE_MOVE35_CONTROL_V0215_BACKLINK_START -->
## CONTROL v0.2.15 public closure backlink

This surface binds the CONTROL v0.2.15 public surface backlink fanout closure.

- Surface package version: `0.2.30`
- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.15-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28516895725
- CONTROL closure id: `5fd82a631ca4d01e4209288479d3cbcd623ddd017587722d2c67708ff3cbf56a`
- Surface backlink id: `4436b1b981906208e96770b4fc39d5d6c56aa4b7a529509fb78217434b59eea6`
- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_CORE_MOVE35_CONTROL_V0215_BACKLINK_END -->

## CONTROL v0.2.16 public surface backlink

This surface binds the CONTROL v0.2.16 public closure as a replayable public backlink.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.16-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28518517865
- CONTROL closure id: `e9f48278e811786b35f9939f982d502a7b0eacc4aff47e03e9257095190c6d26`
- Surface backlink id: `b5a671ef8b595a9364f2aeb84bcc3a65d8204edacc4fc286c6c93c22929db325`
- Verify: `npm run verify:rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink`

Safety boundary remains explicit:

- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_MOVE39_CORE_CONTROL_V0217_BACKLINK_START -->
## CONTROL v0.2.17 public surface backlink

This surface binds the CONTROL v0.2.17 public closure as a replayable public backlink using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28520105839
- CONTROL closure id: `7be5acda41a87a01a436239de422e56c6384746bb873ef3d521284ee9c46513e`
- Surface backlink id: `7b82854012506928ee4b9d74b83f8f64682e23125dae344dda85b6f3aab60736`
- Verify: `npm run verify:move39-control-v0217-backlink`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`

Safety boundary remains explicit:

- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE39_CORE_CONTROL_V0217_BACKLINK_END -->

<!-- ANTIMATTERIUM_MOVE41_CORE_CONTROL_V0218_BACKLINK_START -->
## CONTROL v0.2.18 public surface backlink

This surface binds the CONTROL v0.2.18 public closure as a replayable public backlink using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.18-antimatterium-control-move39-surface-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28524366738
- CONTROL closure id: `01a39a53a3914b1b38f283f2b4232b190c201712f0f8edb6fd0e91fc7bca717a`
- Surface backlink id: `7a45950d954911d5c83137bcf273c7ee53fa3d78c83c94b5e1be0c8bcaccb7f3`
- Verify: `npm run verify:move41-control-v0218-backlink`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`

Safety boundary remains explicit:

- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE41_CORE_CONTROL_V0218_BACKLINK_END -->

<!-- ANTIMATTERIUM_MOVE43_CORE_CONTROL_V0219_BACKLINK_START -->
## CONTROL v0.2.19 public surface backlink

This surface binds the CONTROL v0.2.19 public closure as a replayable public backlink using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.19-antimatterium-control-move41-surface-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525061736
- CONTROL closure id: `9ae0cf352d7062356e02b964d517a9321f0c0743d2eba695fb0d6adc6a702f08`
- Surface backlink id: `030604066e720daecb36c2e43a7cfe70e7f763b69f2766241f8277b058342d6a`
- Verify: `npm run verify:move43-control-v0219-backlink`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`

Safety boundary remains explicit:

- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE43_CORE_CONTROL_V0219_BACKLINK_END -->

<!-- ANTIMATTERIUM_MOVE45_CORE_CONTROL_V0220_BACKLINK_START -->
## CONTROL v0.2.20 public surface backlink

This surface binds the CONTROL v0.2.20 public closure as a replayable public backlink using short public tag discipline.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.20-antimatterium-control-move43-surface-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525467798
- CONTROL closure id: `0a336efeec3df03622df1814eeb076ba69a3e181006fe52add05c71a05704efc`
- Surface backlink id: `3438d6411b8fc4174a1003bdb20be46f57e3a766215dddf266a82679d4c47c7f`
- Verify: `npm run verify:move45-control-v0220-backlink`
- `ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true`

Safety boundary remains explicit:

- `NO_CURRENT_PRODUCTION_CLAIM=true`
- `NO_STARSHIP_CLAIM=true`
- `NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true`
<!-- ANTIMATTERIUM_MOVE45_CORE_CONTROL_V0220_BACKLINK_END -->

{start}
## Move 47 Core CONTROL v0.2.21 backlink

This surface binds CONTROL v0.2.21 as a public backlink.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.21-antimatterium-control-move45-surface-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28527938011
- CONTROL closure id: 84ca47ad18ab3583671eeb5e7d329aff13cb3b30413b2a634d2d08ba07f393d3
- Public tag: v0.2.36-antimatterium-control-v0221-backlink
- Verify:
-

Safety boundary remains explicit:

-
-
-
{end}

<!-- ANTIMATTERIUM_MOVE49_CONTROL_V0222_BACKLINK_START -->
## MOVE 49 — CONTROL v0.2.22 backlink

Core v0.2.37 binds the CONTROL v0.2.22 public surface fanout closure.

- Public tag: `v0.2.37-antimatterium-control-v0222-backlink`
- Public release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.37-antimatterium-control-v0222-backlink
- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.22-antimatterium-control-move47-surface-closure
- CONTROL CI run: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28534121995
- CONTROL closure id: `89b2f9e3f39ae4e63f9a1c648e95b310ad5145c2cae94778ca3227fcbe1c2c49`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE49_CONTROL_V0222_BACKLINK.json`
- Short public tag required: true
- No local root required: true

Safety boundary:

- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
<!-- ANTIMATTERIUM_MOVE49_CONTROL_V0222_BACKLINK_END -->

<!-- ANTIMATTERIUM_CORE_MOVE51_CONTROL_V0223_BACKLINK -->
## CONTROL v0.2.23 public closure backlink — Move 51

This public surface binds the CONTROL v0.2.23 Move 49 surface closure back into Core.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.23-antimatterium-control-move49-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28641499317
- CONTROL closure ID: `35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e`
- Surface public tag: `v0.2.38-antimatterium-control-v0223-backlink`
- Surface backlink ID: `dc1bbccf63ed9a2ac96a73478b81d86776ed9ac9241bb6a0cdadf2f9618d16fa`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE51_CONTROL_V0223_BACKLINK.json`
- Verifier: `scripts/verify-move51-control-v0223-backlink.mjs`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CORE_MOVE53_CONTROL_V0224_BACKLINK -->
## CONTROL v0.2.24 public closure backlink — Move 53

This public surface binds the CONTROL v0.2.24 Move 51 surface closure back into Core.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.24-antimatterium-control-move51-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28678642573
- CONTROL closure ID: `fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872`
- Surface public tag: `v0.2.39-antimatterium-control-v0224-backlink`
- Surface backlink ID: `2510ae9ac118d45670c24263996408bb68f8a319cc46ec868a72cef24a78c7d7`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE53_CONTROL_V0224_BACKLINK.json`
- Verifier: `scripts/verify-move53-control-v0224-backlink.mjs`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_MOVE55_CONTROL_V0225_BACKLINK:CORE -->
## Move 55 CONTROL v0.2.25 backlink

This public surface binds CONTROL v0.2.25 as the latest public surface fanout closure.

- Surface: Core
- Surface version: 0.2.40
- Surface tag: `v0.2.40-antimatterium-control-v0225-backlink`
- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.25-antimatterium-control-move53-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28679307644
- CONTROL closure ID: `99efa1a97857babbe872e4e126114afc3d119cde359968ba62602c99b46cba08`
- Backlink ID: `25300eab3d4e02042e2a78ddea6390e7eb6224ee05677d0de1ebe61f1fb66cd3`
- Short public tag required: true
- No local root required: true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_MOVE57_CONTROL_V0226_BACKLINK:CORE -->
## Move 57 CONTROL v0.2.26 backlink

This public surface binds CONTROL v0.2.26 as the latest public surface fanout closure.

- Surface: Core
- Surface version: 0.2.41
- Surface tag: `v0.2.41-antimatterium-control-v0226-backlink`
- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.26-antimatterium-control-move55-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28704906669
- CONTROL closure ID: `8a4746968c055d92c7ee896656caa2e6ffad611b2800943901d843da1a256fbf`
- Backlink ID: `2e0deb97724408f5b010420abca50ad4992c06027ba38178d6921db32de995dd`
- Short public tag required: true
- No local root required: true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CORE_MOVE59_CONTROL_V0227_BACKLINK -->
## Move 59 — Core binds CONTROL v0.2.27

Core 0.2.42 binds the CONTROL v0.2.27 public closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.27-antimatterium-control-move57-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28705916342
- CONTROL closure ID: `a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba`
- Core public tag: `v0.2.42-antimatterium-control-v0227-backlink`
- Move 59 backlink ID: `84b3bc590a2205f7e454fdd8f0598eef906b4768d98b3dae212e53180c5792ad`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE59_CONTROL_V0227_BACKLINK.json`
- Verifier: `scripts/verify-move59-control-v0227-backlink.mjs`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CORE_MOVE61_CONTROL_V0228_BACKLINK -->
## Move 61 — Core binds CONTROL v0.2.28

Core 0.2.43 binds the CONTROL v0.2.28 public closure.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.28-antimatterium-control-move59-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706320665
- CONTROL closure ID: `0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671`
- Surface public tag: `v0.2.43-antimatterium-control-v0228-backlink`
- Move 61 backlink ID: `d8214afe35a399057787514c2786665028a8f65491750406741d521329bc635f`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE61_CONTROL_V0228_BACKLINK.json`
- Verifier: `scripts/verify-move61-control-v0228-backlink.mjs`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CORE_MOVE63_CONTROL_V0229_BACKLINK -->
## Move 63 — Core binds CONTROL v0.2.29

Core binds the CONTROL v0.2.29 public closure for the Move 61 surface fanout.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.29-antimatterium-control-move61-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28706590644
- CONTROL closure ID: `cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c`
- Surface tag: `v0.2.44-antimatterium-control-v0229-backlink`
- Backlink ID: `c19dfefc5dc203b19ea726bba2987705a13a9bff8f70b43ed77d4a9b685c26e7`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE63_CONTROL_V0229_BACKLINK.json`
- Verifier: `scripts/verify-move63-control-v0229-backlink.mjs`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

<!-- ANTIMATTERIUM_CORE_MOVE65_CONTROL_V0230_BACKLINK -->
## Move 65 — Core binds CONTROL v0.2.30

Core binds the CONTROL v0.2.30 public closure for the Move 61 surface fanout.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.30-antimatterium-control-move63-surface-closure
- CONTROL verify CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28707158589
- CONTROL closure ID: `f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea`
- Surface tag: `v0.2.45-antimatterium-control-v0230-backlink`
- Backlink ID: `9689749f667d9470e2d098b2fd7d1f4a37e2b6921dccb21ec3b2b7266f8b9467`
- Receipt: `integrations/control/ANTIMATTERIUM_CORE_MOVE65_CONTROL_V0230_BACKLINK.json`
- Verifier: `scripts/verify-move65-control-v0230-backlink.mjs`

ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 67 — Core binds CONTROL v0.2.31

Core binds the CONTROL v0.2.31 public closure for the Move 65 surface fanout.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.31-antimatterium-control-move65-surface-closure
- CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28746575495
- CONTROL closure ID: ed2ac2e0ae68635986a07084622f3ae9a2fc746995b1aaf11846913bad8d9c8d
- Surface release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.46-antimatterium-control-v0231-backlink
- Backlink ID: b59e89409997dfdb99f1aad7ff2078e83e3732725fd7f8d6c8930ef598f98cb9
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 69 — Core binds CONTROL v0.2.32

Core binds the CONTROL v0.2.32 public closure for the Move 67 surface fanout.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.32-antimatterium-control-move67-surface-closure
- CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747392917
- CONTROL closure ID: 26f9d60e76939e16c27da34d345686d37fad0a0caa1cd097673f1dc1c9d5210f
- Surface release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.47-antimatterium-control-v0232-backlink
- Backlink ID: 57a6f14ecdcbb314947c46b8001104f2f4ae2911c29526359fed3a854bb4f802
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 71 — Core binds CONTROL v0.2.33

Core binds the CONTROL v0.2.33 public closure for the Move 67 surface fanout.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.33-antimatterium-control-move69-surface-closure
- CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28747726663
- CONTROL closure ID: 6e32a74f67f999c779dbcf5117de6fda1bbdc8a2c1505bf3d47c85f8f00b145b
- Surface release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.48-antimatterium-control-v0233-backlink
- Backlink ID: e530e13a78d4bd2d5d77303b8f58c7bb3402f826defb5769e96f57410a27fb47
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 73 — Core binds CONTROL v0.2.34 backlink

Core 0.2.49 binds a public backlink to CONTROL v0.2.34.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.34-antimatterium-control-move71-surface-closure
- CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28814745469
- CONTROL closure ID: c9af607f2cdaa3d88e0ff3c9abfeab7deaa031e38e48e75af3dbdfa0f738687b
- Surface release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.49-antimatterium-control-v0234-backlink
- Surface tag: v0.2.49-antimatterium-control-v0234-backlink
- Backlink ID: aa29f6557667c26be9680eddfe81cde31a1ead586d8d1831c04e436558f520f3
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true

## Move 75 — CONTROL v0.2.35 backlink to Core

Core binds the CONTROL v0.2.35 public closure as a public surface backlink.

- CONTROL release: https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.35-antimatterium-control-move73-surface-closure
- CONTROL CI: https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28817843561
- CONTROL closure ID: 2585bfc44100f7684c5ea9ac876dc522b0329df829fb4bfb35ee0fcf09cd351f
- Surface release: https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.50-antimatterium-control-v0235-backlink
- Surface backlink ID: a56cd46dc7dd7d61a55de4d2137f5fa8703c551c61700cac223833a944ff6464
- ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true
- ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true
- NO_CURRENT_PRODUCTION_CLAIM=true
- NO_STARSHIP_CLAIM=true
- NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
