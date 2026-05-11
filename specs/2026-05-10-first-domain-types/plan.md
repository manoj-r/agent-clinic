# First Domain Types Plan

## 1. Branch and Spec Setup

1. Work on branch `feature-first-domain-types`.
2. Keep the feature limited to Phase 2 from `specs/roadmap.md`.
3. Use `specs/mission.md` and `specs/tech-stack.md` as the product and technical guidance.

## 2. Domain Type Module

1. Create a small domain module for shared AgentClinic types.
2. Define `AgentStrain` as a TypeScript literal union.
3. Define `IntakeRequest` as an interface that can describe the initial intake data needed by later phases.
4. Define `TriageResult` as an interface that can represent the initial triage output needed by later phases.
5. Keep all types dependency-free and independent from Fastify.

## 3. Export Wiring

1. Export the domain types from a stable module path.
2. Avoid importing the server or route setup from the domain module.
3. Keep existing server behavior unchanged.

## 4. Vitest Validation

1. Add focused Vitest coverage for consuming the exported domain contracts.
2. Use representative values only to prove the types are usable by downstream code.
3. Do not add classification behavior, route tests, persistence tests, or runtime schema tests in this phase.

## 5. Build and Test Verification

1. Run `npm test`.
2. Run `npm run build`.
3. Resolve any TypeScript or Vitest failures.

## 6. Review and Merge Readiness

1. Confirm the implementation only touches files needed for Phase 2.
2. Confirm no Fastify coupling, intake route, classifier, persistence, UI, or CLI work slipped into this phase.
3. Confirm `requirements.md`, `plan.md`, and `validation.md` match the implemented behavior.
4. Update `changelog.md` before merge using the `update-changelog` skill.
