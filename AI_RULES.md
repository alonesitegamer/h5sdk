# AI Working Rules

These rules apply to documentation and implementation work in this repository
and its companion local runtime projects.

## Evidence and claims

- Gather the request, response, and next client action before implementing a
  protocol behavior.
- Do not invent fields, response values, request order, routes, or resource
  mappings.
- A schema proves a serialization shape, not server behavior.
- A captured/static string proves neither runtime use nor a successful route.
- A WebSocket 101 proves transport upgrade only, not game login.
- Keep evidence labels explicit: PROVEN, STRONGLY SUPPORTED, HYPOTHESIS,
  UNKNOWN, or REJECTED. Do not silently promote a claim.
- Separate captured evidence, local implementation, synthetic tests, service
  runtime tests, and real-browser validation in every report.

## Safe project workflow

- Inspect the active checkout, running server, and actual uncommitted changes
  before editing. Never silently change the project base.
- Preserve the user's existing work and make the smallest reversible change.
- Keep the captured host corpora separate from service code and generated
  runtime state.
- Treat any local nginx/ directory as read-only unless the user explicitly
  changes that boundary.
- Do not repeat completed CDN discovery or redownload the mirror without new
  evidence.
- If the user says “next,” perform the next concrete investigation rather than
  returning only a roadmap.
- Never report a planned action as completed.

## Change reports

For a code or configuration change, report the files changed, reason, evidence,
exact change, validation performed, actual result, and remaining unknowns. Do
not claim a test or runtime verification that was not run.

## Port status

The Phase 10 source inspected on 2026-10-04 defaults to port 30004; older notes
refer to 30001. Treat 30004 as the current source configuration, then verify
the running process and client endpoint before claiming the browser uses it.
