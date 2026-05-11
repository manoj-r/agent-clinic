# First Domain Types Validation

## Required Checks

1. `npm test` exits successfully.
2. `npm run build` exits successfully.
3. Domain types are importable without importing Fastify or server setup.
4. The implementation remains limited to Phase 2 scope.

## Type Contract Check

Representative test values should demonstrate that downstream code can consume:

- `AgentStrain`
- `IntakeRequest`
- `TriageResult`

The tests should not assert classification rules, HTTP behavior, persistence behavior, or runtime schema validation.

## Merge Criteria

The feature can be merged when:

- `npm test` passes.
- `npm run build` passes.
- The branch contains only the first domain type contracts and their focused validation.
- Spec documents describe the implemented scope accurately.

## Non-Goals to Recheck

- No intake classification function is added.
- No `POST /intake` route is added.
- No database or in-memory case log is added.
- No runtime validation library is introduced.
- No frontend, CLI, or deployment implementation is added.
