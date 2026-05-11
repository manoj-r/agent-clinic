# MVP Plan

## 1. Branch and Dependency Setup

1. Work on branch `mvp`.
2. Add Fastify as a production dependency.
3. Add Vitest as the validation test runner.
4. Add `npm test` for automated validation.
5. Keep `npm run build` as the TypeScript compile check.

## 2. Server Baseline

1. Create a testable Fastify server factory.
2. Keep `src/index.ts` as the runtime entrypoint.
3. Add `GET /health`.
4. Return a minimal healthy response.
5. Add Fastify injection coverage for the health route.

## 3. Domain Contracts

1. Define `AgentStrain`.
2. Define `IntakeRequest`.
3. Define `TriageResult`.
4. Define a care recommendation shape.
5. Keep all domain contracts dependency-free and independent from Fastify.

## 4. Intake Classification

1. Add a pure classifier function.
2. Detect missing context.
3. Detect scope churn.
4. Detect urgency pressure.
5. Detect contradictory instruction.
6. Return a triage result without persistence or side effects.
7. Add focused Vitest coverage for each rule.

## 5. Intake API

1. Add `POST /intake`.
2. Validate the minimal request shape at the route boundary.
3. Return a failed request response for invalid payloads.
4. Return triage and care recommendation for valid payloads.
5. Test the route with Fastify injection.

## 6. Care Path Copy

1. Map triage results to short care recommendations.
2. Keep recommendations playful but operational.
3. Return care recommendations from `POST /intake`.
4. Add tests for care recommendation mapping.

## 7. Review and Merge Readiness

1. Run `npm test`.
2. Run `npm run build`.
3. Confirm no persistence, CLI, web UI, case log, or production-readiness work slipped into the MVP.
4. Confirm `requirements.md`, `plan.md`, and `validations.md` match the implemented behavior.
5. Update `changelog.md` before merge using the `update-changelog` skill.
