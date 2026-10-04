# Pokémon Burst Local Reconstruction Architecture

## Purpose and scope

This document describes the local reconstruction and the evidence in the
alonesitegamer/git-commit--m-Add-H5-SDK-client-files- repository, rechecked
on 2026-10-04. It separates:

1. Captured files grouped by original host name in this GitHub repository.
2. The local HTTP/CDN wrapper code in a separate v2.20 project.
3. The active Phase 10 WebSocket replacement server in another local project.

The GitHub repository is primarily a capture corpus. Its locally available
committed main tree at 1b35112 (2026-08-30) has no root package.json, service
launcher, or deployable multi-service configuration. Captured files do not
establish that an original backend has been reconstructed.

## Intended runtime shape

~~~text
                     Browser / recovered H5 client
                                  |
            +---------------------+---------------------+
            |                     |                     |
            v                     v                     v
      H5SDK wrapper         Static game CDN       Platform SDK assets
      HTTP :8081             HTTP :8090             mjzkstatic host
      gate, HTML,            versioned resources    hwsdk scripts
      selected API routes    and game data
            |
            +--- login / parent bridge / session handoff ---+
                                                             |
                                                             v
                                                   Phase 10 game server
                                                   WebSocket :30004
                                                   protocol + session
                                                             |
                                                             v
                                                   persistent game state
                                                   (incomplete)

    API and game3 host behavior is represented by captures and needs
    request-by-request routing validation.
~~~

Ports 8081 and 8090 are the local H5SDK/CDN conventions. The Phase 10 source
inspected on 2026-10-04 defaults its WebSocket listener to 30004. Confirm the
running process and client-advertised endpoint agree; source configuration
alone is not runtime proof. The H5SDK login-to-WebSocket handoff and complete
browser progression through startup still need correlated runtime traces.

## Repository folder review

The repository has five game-related top-level host folders and one ancillary
third-party folder.

| Folder | What is present | What it establishes | What remains missing |
| --- | --- | --- | --- |
| cdn.xjlgmkk.com/ | A large captured client/resource tree, version map, manifest, and game assets. | A substantial static resource corpus exists. | Validate completeness and URL/hash translation against real browser requests. The CDN runtime is maintained separately. |
| h5sdk.camjm.space/ | Captured gate/game responses, game HTML, CSS/JS, and SDK resources. | The original H5SDK surface and useful request/response evidence are preserved. | The runnable wrapper is outside this repository. Guest login is a local stub, not production authentication. Prove the browser-to-WS session handoff. |
| api.camjm.space/ | One captured sdkControl/replacement.bin response. | At least one response associated with this host was captured. | No API service, complete route inventory, data model, or persistence layer is present here. |
| game3.xjlgmkk.com/ | One captured server-selection/platform response for a request with platform 330. | One response fixture exists for an observed request shape. | No general service implementation is present. Confirm its runtime role and request variants from traces. |
| mjzkstatic.zkmaiji.com/ | Three captured hwsdk JavaScript versions. | Platform SDK client scripts are preserved. | These are client assets, not the remote platform service implementation. |
| www.paypal.com/ | Two PayPal SDK/logger captures. | An ancillary third-party dependency was captured. | Not one of the five game-host folders; no PayPal service is implemented here. |

## Local runtime components outside this repository

- The local H5SDK wrapper is at
  ~/Downloads/PokemonBurst-local-server-v2.20-h5sdk-real-root-local-stack-fixed/h5sdk/.
  Its server.mjs handles the gate, captured game HTML/static files, selected
  h5Tool/h5Game/h5User POST routes, and captured-fixture fallbacks.
- The active WebSocket server identified in the user's runtime context is at
  ~/pokemonburst-local-server-phase10/. Its src/server.mjs listens on
  0.0.0.0:30004 by default. Its README lists handlers for 2001, 2002, 2004,
  2005, 2020, 3001, 3003, 3004, 3005, 3011, 3017, and 3999. That documents
  code coverage, not real-browser acceptance of each reply.
- An alternate TypeScript WebSocket implementation and tests are at
  ~/Downloads/PokemonBurst-local-server-v2.20-h5sdk-real-root-local-stack-fixed/server/.
  Do not treat this as the active runtime unless the user switches to it.
- CDN mirror/translation tooling is maintained separately and serves the
  captured CDN corpus; it does not implement account or game state.

The Phase 10 server remains a partial reconstruction. Companion server notes
mark startup-push reconstruction, complete role data, persistence, gameplay
handlers, battle behavior, and validation against the original server as
unfinished. A WebSocket listener or successful handshake is not proof of game
login.

## Request and state boundaries

### Static launch and resources

The client starts through the H5SDK gate, receives a game URL, and requests
the H5SDK page, platform scripts, and game resources. The local wrapper and CDN
mirror cover much of this path. Preserve version-map and hashed-filename
behavior. Record each requested URL, translated path, response status, and
missing file.

### H5SDK identity and bridge

The local wrapper returns a local guest session for the observed login route
and handles selected startup routes. This is a development stub. Verify the
browser POST login, response consumption, parent-frame bridge message, game
SDK session values, and first WebSocket login. Correlate the identity across
these boundaries.

### Game-server connection

The Phase 10 server implements binary framing and a partial set of login and
startup handlers. The client still depends on startup synchronization and push
messages before it can reach a stable home state. The documented minimum chain
is a working hypothesis, not proof that all required pushes are recovered.

### Persistent state and gameplay

Local guest and role defaults are scaffolding. Complete player persistence,
gameplay command coverage, and battle simulation are not established. Add
behavior only when client handlers, schemas, and observed traffic support it.

## Current maturity snapshot

| Area | Current assessment | Evidence boundary |
| --- | --- | --- |
| Captured CDN corpus | Substantial | Validate request coverage against the real client. |
| Local CDN serving/translation | Implemented in separate tooling | Outside this captured-domain repository; request coverage remains to verify. |
| H5SDK wrapper | Implemented for selected local routes | Separate project; guest login is a stub and route coverage is partial. |
| API/game3 hosts | Captures and limited fixtures | Complete service behavior and routing are not established. |
| WebSocket protocol foundation | Implemented in Phase 10 | Codec, framing, and some handlers exist; real-client startup is not proven. |
| Real-client game startup | Incomplete | Need browser + WS evidence through startup pushes and client acceptance. |
| Persistence/gameplay/battle | Incomplete | Static configuration and schemas do not implement dynamic behavior. |

## Recommended integration order

1. Record each host/path, method, query/body fields, status, content type,
   response shape, and local serving component. Mark each as captured,
   runtime-observed, implemented, or inferred.
2. Launch through the local gate and verify resource requests and hash
   translation.
3. Trace H5SDK login through the parent-frame bridge into values used by the
   game WebSocket login.
4. Capture raw WebSocket messages and client state transitions. Implement the
   minimum evidence-supported reply and verify the next client action through
   the startup push gate and home-ready state.
5. Add role state, persistence, and gameplay incrementally from observed
   client-consumed fields and traffic.
6. Once behavior is demonstrated, document one launcher/configuration for the
   H5SDK, CDN, and WebSocket processes, with ports, roots, dependencies, and
   health checks. Keep captures separate from generated runtime state.

## Evidence rules

- A captured file proves it was captured, not that a complete service exists.
- A schema or opcode name proves a serialization shape, not server behavior.
- A WebSocket 101 proves transport upgrade only, not game login.
- A static string or fixture does not prove a runtime call path.
- Separate observations, implementations, inferences, and unknowns.
- For each handler, preserve raw request bytes, decoded fields, response bytes,
  and the next client action.

## Repository snapshot notes

- Local checkout: ~/Downloads/h5sdk
- Remote: https://github.com/alonesitegamer/git-commit--m-Add-H5-SDK-client-files-
- Branch: main; locally available origin/main and HEAD both point to 1b35112
  (Add H5 SDK client files, 2026-08-30).
- The local checkout has extensive uncommitted/untracked captured-resource
  changes. This architecture note is additive; preserve those changes.
- On 2026-10-04, the Phase 10 source and README were inspected and specify
  port 30004. The running process and browser connection were not checked.
- GitHub DNS/network access failed during this review. This document reflects
  the locally available committed snapshot and companion files inspected on
  2026-10-04.
