# Evidence Ledger

This ledger summarizes evidence inspected for the 2026-10-04 architecture
review and carries forward explicitly dated runtime observations. It does not
claim that historical runtime conditions still exist.

## Evidence labels

- PROVEN: directly present in the inspected tree or directly observed in a
  dated trace/test.
- STRONGLY SUPPORTED: multiple sources agree but direct runtime confirmation
  is missing.
- HYPOTHESIS: plausible explanation that still needs a test.
- UNKNOWN: evidence is insufficient.
- REJECTED: contradicted by later evidence.

## Current repository inspection — 2026-10-04

| ID | Claim | Level | Evidence / limit |
| --- | --- | --- | --- |
| R001 | The locally available main and origin/main resolve to 1b35112. | PROVEN | Local Git metadata; live GitHub refresh was not available. |
| R002 | The committed tree contains five game-related hostname folders plus www.paypal.com. | PROVEN | git ls-tree origin/main; PayPal is ancillary. |
| R003 | The committed tree is a capture corpus, not a runnable multi-service app. | PROVEN | No root package manifest or service launcher; files are captured assets/responses. |
| R004 | The companion v2.20 project contains the H5SDK wrapper; user-identified active WS code is in the Phase 10 project. | PROVEN | Inspected h5sdk/server.mjs under ~/Downloads/ and src/server.mjs under ~/pokemonburst-local-server-phase10/. Neither service is in this capture repository. |
| R005 | Phase 10 source defaults to WebSocket port 30004. | PROVEN | Inspected ~/pokemonburst-local-server-phase10/src/server.mjs and README on 2026-10-04. This proves source configuration, not the running process or browser target. |
| R006 | The current browser accepts the latest 2005/2020/2004 responses and proceeds to game login. | UNKNOWN | Historical fixes and synthetic tests do not prove current browser acceptance. |
| R007 | Player persistence, broad gameplay handlers, and battle simulation are complete. | REJECTED | Companion server-state documentation describes these as incomplete; no evidence of completion was found in this review. |
| R008 | The current running process and browser use WebSocket port 30004. | UNKNOWN | No process output or fresh browser connection was inspected in this review. |

## Historical Phase 10 observations (2026-09-15 to 2026-09-18 notes)

| ID | Claim | Level | Evidence / limit |
| --- | --- | --- | --- |
| H001 | A user-provided trace showed the browser sending 2001, then 2005 and 2020; the Phase 10 server logged 2005 and 2020 as unhandled. | PROVEN for that run | Recorded in the 2026-09-15 evidence ledger and handoff. Not a statement about the current run. |
| H002 | A 2001 response with empty server lists corresponded to UI rows rendered as undefined. | STRONGLY SUPPORTED | Historical screenshot, observed empty response, and client source path aligned; exact production list contents were not recovered. |
| H003 | Local server-list entries and empty 2005/2020 arrays were introduced as schema-valid probes. | PROVEN as implementation history | Historical notes call these probes, not recovered production responses. |
| H004 | Phase 10 default port was changed to 30004 in the 2026-09-18 package notes. | PROVEN as documented change | Local Phase 10 source and README inspected 2026-10-04 also specify 30004; current process/browser use is tracked separately in R008. |

## Required evidence for updates

For each new protocol step, record timestamp, runtime/base, raw request bytes,
decoded fields, raw response bytes, handler/version, client state immediately
after the response, and the next request or close/reconnect event. Record tests
separately from browser evidence.
