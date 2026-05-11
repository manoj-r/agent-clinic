# First Domain Types Requirements

## Goal

Define the first domain model contracts for AgentClinic so later phases can describe agent strain, intake requests, and triage results without coupling domain logic to Fastify.

## Roadmap Source

This feature implements Phase 2 from `specs/roadmap.md`.

The user prompt referenced `specs/roadmap.sh`, but this repository contains `specs/roadmap.md` and no `specs/roadmap.sh`.

## Scope

- Define an `AgentStrain` type.
- Define an `IntakeRequest` type.
- Define a `TriageResult` type.
- Keep these types independent from Fastify and HTTP handlers.
- Export the types from a small domain module that future phases can import.
- Add focused Vitest validation where the exported domain contracts can be consumed at runtime or through representative fixtures.

## Out of Scope

- Intake classification rules or classifier functions.
- `POST /intake` or any other API route.
- Runtime request validation schemas.
- Persistence, case logs, or database decisions.
- UI, CLI, deployment, logging, or production configuration.

## Decisions

- Feature slug: `first-domain-types`.
- Spec directory: `specs/2026-05-10-first-domain-types`.
- Branch for this work: `feature-first-domain-types`.
- Use TypeScript literal unions and interfaces, not enums.
- Do not introduce runtime schema dependencies.
- Validation requires both `npm run build` and `npm test`.

## Context

AgentClinic should make agent distress legible through concrete states and events while keeping the product playful but operational. These first types should name the domain clearly enough for future intake, triage, and care-path phases to build on them.

The current stack is server-side TypeScript on Node.js with Fastify for HTTP. The domain types should remain framework-neutral so route handlers can stay thin and future behavior can live in testable modules.
