# Pokémon Burst H5 Reconstruction

This repository preserves captured files grouped by their original hostnames. It is a research corpus, not a ready-to-run application. The runnable local CDN, H5SDK wrapper, and replacement WebSocket server are maintained in separate local project directories.

## Start here

- [Architecture](ARCHITECTURE.md) — components, host-folder review, boundaries, and maturity.
- [Project status](PROJECT_STATUS.md) — what was inspected and what remains unproven.
- [Evidence ledger](EVIDENCE_LEDGER.md) — observations and their evidence level.
- [AI working rules](AI_RULES.md) — constraints for future reconstruction work.
- [Next steps](NEXT_STEPS.md) — the next concrete investigation sequence.
- [Project changelog](PROJECT_CHANGELOG.md) — documentation and implementation changes.

## Captured host folders

The five game-related folders are `api.camjm.space`, `cdn.xjlgmkk.com`,
`game3.xjlgmkk.com`, `h5sdk.camjm.space`, and `mjzkstatic.zkmaiji.com`.
`www.paypal.com` is a small ancillary third-party capture. See the architecture
file for what each folder contains and what it does not establish.

## Important distinction

A file captured under a domain directory is evidence that a request or resource
was captured. It does not mean that the original domain's server has been
implemented. Keep capture data, local runtime code, and runtime validation
separate in reports.
