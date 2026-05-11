# Server Baseline Validation

## Required Checks

1. `npm run build` exits successfully.
2. The server starts locally without TypeScript or runtime errors.
3. `GET /health` returns a successful HTTP response.
4. The implementation remains limited to Phase 1 scope.

## Manual Health Check

After starting the server, verify the health route with curl or a browser:

```sh
curl http://localhost:<port>/health
```

Expected result:

- HTTP status is successful.
- Response body is minimal and indicates the service is healthy.
- No intake, triage, persistence, or care-path data is returned.

## Merge Criteria

The feature can be merged when:

- `npm run build` passes.
- Manual `/health` verification succeeds.
- The branch contains the server baseline only.
- Spec documents describe the implemented scope accurately.

## Non-Goals to Recheck

- No automated test runner is required for this phase.
- No database or in-memory case log is added.
- No `POST /intake` route is added.
- No frontend, CLI, or deployment notes are added.
