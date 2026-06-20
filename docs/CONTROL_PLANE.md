
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

