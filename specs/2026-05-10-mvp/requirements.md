# MVP Requirements

## Goal

Build the smallest useful AgentClinic backend MVP: an API that accepts an agent intake request and returns a triage result plus a short care recommendation.

## Roadmap Source

This MVP covers Phases 1 through 5 from `specs/roadmap.md`:

1. Server Baseline
2. First Domain Types
3. Intake Classification
4. Intake API
5. Care Path Copy

## Scope

- Add a Fastify server with `GET /health`.
- Define dependency-free domain types for agent strain, intake requests, triage results, and care recommendations.
- Add a pure intake classifier with a small rule set:
  - missing context
  - scope churn
  - urgency pressure
  - contradictory instruction
- Add `POST /intake` with minimal request validation.
- Return triage and care recommendation directly from `POST /intake`.
- Add Vitest coverage for domain behavior, classification, care copy, and Fastify routes.

## Out of Scope

- Persistence or in-memory case logs.
- `GET /cases` or `GET /cases/:id`.
- SQLite or any other database.
- CLI or web UI.
- Case status transitions, follow-up notes, or resolved outcomes.
- Structured logging, environment configuration, deployment notes, or other production-readiness work.

## Decisions

- Feature slug: `mvp`.
- Spec directory: `specs/2026-05-10-mvp`.
- Branch for this work: `mvp`.
- Interface: API only.
- Storage: no storage.
- Backend framework: Fastify.
- Validation framework: Vitest.
- Domain logic must stay independent from Fastify.
- Routes should stay thin and delegate behavior to testable modules.

## Context

AgentClinic should feel playful but operational. The MVP should make agent distress legible through concrete states and events, then return a useful care path without broad simulation or durable records.

The stack starts as server-side TypeScript on Node.js. Fastify is the first backend framework because it supports small route-by-route growth. Dependencies should be added only when they unlock the next small phase.
