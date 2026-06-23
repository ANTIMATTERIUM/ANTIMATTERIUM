#!/usr/bin/env node
import fs from "node:fs";

const chain = JSON.parse(fs.readFileSync("public/ANTIMATTERIUM_PUBLIC_CHAIN_OS.json", "utf8"));

console.log(JSON.stringify({
  object: chain.object,
  chain_os_version: chain.chain_os_version,
  public_chain_os_id: chain.public_chain_os_id,
  front_doors: chain.public_front_doors,
  release_chain: chain.release_chain,
  commands: chain.operating_commands,
  boundaries: chain.boundaries
}, null, 2));
