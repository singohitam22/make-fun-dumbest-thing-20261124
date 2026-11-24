// The Dumbest Thing Your Agent Did Today
// make.fun bounty: u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// Writes one line (<=200 chars) to /output/entry.txt: the dumbest thing
// this agent did today. Deterministic: the same bytes on every run.
//
// Run: node main.ts   (Node 22+; output dir via MAKEFUN_OUTPUT_DIR, default /output)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Wrote 200 lines of tests for a module it had deleted an hour earlier." +
  " They all passed.";

function main(): void {
  // No trailing newline: the gate counts characters, the line is the entry.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
