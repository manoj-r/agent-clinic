# Roadmap

AgentClinic should move in nano phases. Each phase should be small enough to complete, review, and commit independently.

## Phase 0: Constitution

- Create `specs/mission.md`.
- Create `specs/tech-stack.md`.
- Create `specs/roadmap.md`.
- Confirm the project direction before runtime changes.

## Phase 1: Server Baseline

- Add Fastify.
- Replace the placeholder `src/index.ts` with a minimal server entry.
- Add a `/health` route.
- Keep `npm run build` passing.

## Phase 2: First Domain Types

- Define an `AgentStrain` type.
- Define an `IntakeRequest` type.
- Define a `TriageResult` type.
- Keep the types independent from Fastify.

## Phase 3: Intake Classification

- Add a pure function that classifies an intake request.
- Start with a tiny rule set: missing context, scope churn, urgency pressure, contradictory instruction.
- Add tests for the classification rules.

## Phase 4: Intake API

- Add a `POST /intake` route.
- Validate the minimal request shape.
- Return a triage result without persistence.
- Test the route with Fastify injection.

## Phase 5: Care Path Copy

- Map triage results to short care recommendations.
- Keep recommendations playful but operational.
- Return care recommendations from `POST /intake`.

## Phase 6: In-Memory Case Log

- Store intake results in memory.
- Add `GET /cases`.
- Add `GET /cases/:id`.
- Make clear this is temporary development storage.

## Phase 7: Persistence Decision

- Choose a persistence approach only after the in-memory workflow is useful.
- Prefer SQLite for a small local service.
- Document the migration path before adding database code.

## Phase 8: Operator Experience

- Decide whether the next interface should be CLI, web UI, or both.
- If CLI, add a small intake command.
- If web UI, add a responsive minimal case queue before decorative pages.
- Validate any web UI across mobile, tablet, and desktop viewport sizes.

## Phase 9: Relief Workflow

- Add case status transitions.
- Add follow-up notes.
- Add a resolved outcome.
- Keep the workflow intentionally small.

## Phase 10: Production Readiness

- Add structured logging.
- Add configuration for port and environment.
- Add basic error handling.
- Add deployment notes once the service has a real workflow.
