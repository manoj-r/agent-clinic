# Server Baseline Requirements

## Goal

Establish the first runtime baseline for AgentClinic by replacing the placeholder TypeScript entrypoint with a minimal Fastify server that exposes a health check.

## Roadmap Source

This feature implements Phase 1 from `specs/roadmap.md`.

The user prompt referenced `specs/roadmap.sh`, but this repository contains `specs/roadmap.md` and no `specs/roadmap.sh`.

## Scope

- Add Fastify as the backend framework.
- Replace the placeholder `src/index.ts` behavior with a minimal server entry.
- Add a `GET /health` route.
- Keep `npm run build` passing.

## Out of Scope

- Domain types for agent strain, intake requests, or triage results.
- Intake classification or intake API routes.
- Persistence, case logs, or database decisions.
- CLI, web UI, deployment, structured logging, or production configuration.
- Automated test runner setup.

## Decisions

- Feature slug: `server-baseline`.
- Spec directory: `specs/2026-05-10-server-baseline`.
- Branch created for this work: `feature-server-baseline`.
- Scope is roadmap-only.
- Validation requires `npm run build` and manual `/health` verification.

## Context

AgentClinic should stay playful but operational. This phase should avoid decorative behavior and focus on a small server foundation that later phases can extend.

The project starts as a server-side TypeScript application with CommonJS output, Node.js runtime, and a single `src/index.ts` entrypoint. Fastify is the recommended first backend framework because it supports typed, small, route-by-route growth without larger framework ceremony.
