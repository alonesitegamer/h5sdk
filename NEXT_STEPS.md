# Next Steps

These are ordered investigations, not claims of completed work. The Phase 10
source defaults to 30004, but the running process and browser target must still
be confirmed.

1. **Identify the live stack.** Record the exact H5SDK process, CDN process,
   WebSocket process, checkout/package path, branch/version, bind address, and
   ports. Verify the server process and client endpoint use 30004.
2. **Trace the login bridge.** Capture the browser's H5SDK login request/response,
   parent-frame message, values passed to the game SDK, and first WS connection.
   Verify that the account/session identity is consistent across it.
3. **Capture the current WS boundary.** For each message, save raw bytes and
   decoded fields; correlate request, response, and the browser's immediate
   next action. Focus on the first point where the browser closes, reconnects,
   or stops advancing.
4. **Implement one evidence-supported response at a time.** Reproduce the
   smallest response shape justified by client source/runtime evidence. Keep
   schema-valid probes labeled as probes until a real client accepts them.
5. **Verify resource coverage during the same browser run.** Record requested
   URL, translated path, status, and missing files. Fix only observed gaps in
   the CDN path.
6. **Expand game behavior only after startup is stable.** Derive role data,
   persistence, and gameplay handlers from client-consumed fields and observed
   traffic; static configuration is not dynamic game state.
7. **Update the evidence ledger, project status, and changelog with dated
   results.** Keep synthetic tests, service runtime checks, and browser proof in
   separate rows.

## Stop conditions

Do not say “login works” from a successful HTTP login or WS handshake alone.
Do not say “startup works” until the client reaches a defined home-ready state
and the preceding network sequence is captured.
