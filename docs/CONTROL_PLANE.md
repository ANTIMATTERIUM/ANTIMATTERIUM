
# ANTIMATTERIUM Control Plane

The control plane is the machine-readable closure layer for ANTIMATTERIUM.

It binds:

* release receipts
* public indexes
* control seal
* mission models
* source authority index
* external recognition receipts
* package receipt
* deterministic bundle digest

Commands:

```bash
npm run verify:control
node scripts/antimatterium-control.mjs status
node scripts/antimatterium-control.mjs digest
node scripts/antimatterium-control.mjs bundle
```

The control plane is a public evidence and estimation layer only.

Boundaries remain closed:

```text
NO_CURRENT_PRODUCTION_CLAIM=true
NO_STARSHIP_CLAIM=true
NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true
NO_LOCAL_MACHINE_PATHS=true
NO_PRIVATE_FOLDER_INVENTORY=true
NO_PERSONAL_STACK_INVENTORY=true
NO_UNRELATED_NAMESPACE_INVENTORY=true
```


## Runtime Kernel

The runtime kernel adds executable admission, bounded estimate execution, event digesting, and replay verification.

```bash id="zxy3nc"
npm run verify:runtime
node scripts/antimatterium-runtime.mjs status
node scripts/antimatterium-runtime.mjs estimate examples/runtime/mission-estimate-input.json
node scripts/antimatterium-runtime.mjs event examples/runtime/mission-estimate-input.json
node scripts/antimatterium-runtime.mjs verify-event examples/runtime/mission-estimate-input.json public/ANTIMATTERIUM_RUNTIME_EVENT_EXAMPLE.json
````


## External Replay Runner

The external replay runner turns the public release into a replayable receipt.

```bash
npm run verify:replay
node scripts/antimatterium-replay.mjs status
node scripts/antimatterium-replay.mjs receipt
node scripts/antimatterium-replay.mjs verify public/ANTIMATTERIUM_EXTERNAL_REPLAY_RECEIPT.json
bash scripts/antimatterium-external-clone-replay.sh
````

