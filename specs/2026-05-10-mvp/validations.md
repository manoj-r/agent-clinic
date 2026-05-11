# MVP Validations

## Required Checks

1. `npm test` exits successfully.
2. `npm run build` exits successfully.
3. `GET /health` returns a successful minimal health response.
4. `POST /intake` validates the minimal request shape.
5. `POST /intake` returns triage and care recommendation for valid requests.
6. The implementation remains limited to MVP scope.

## Classification Coverage

Vitest coverage should verify the classifier handles:

- Missing context.
- Scope churn.
- Urgency pressure.
- Contradictory instruction.

## API Coverage

Fastify injection tests should verify:

- `GET /health` succeeds.
- `POST /intake` rejects invalid payloads.
- `POST /intake` returns a successful response for valid payloads.
- The successful intake response includes a triage result and care recommendation.

## Merge Criteria

The MVP can be merged when:

- `npm test` passes.
- `npm run build` passes.
- The branch contains API-only MVP behavior for Phases 1 through 5.
- Spec documents describe the implemented scope accurately.

## Non-Goals to Recheck

- No persistence or in-memory case log is added.
- No database dependency is introduced.
- No `GET /cases` or `GET /cases/:id` route is added.
- No CLI or web UI is added.
- No case status workflow is added.
- No production deployment or environment configuration is added.
