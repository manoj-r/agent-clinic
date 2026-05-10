# Tech Stack

AgentClinic starts as a server-side TypeScript project. The current repository already uses TypeScript with a CommonJS build target and a single `src/index.ts` entry point.

## Recommended Backend Framework

Use Fastify for the first backend phase.

Fastify fits the project because it is small, fast, strongly typed, and easy to grow one route at a time. It keeps early implementation work close to plain TypeScript while still providing production-shaped primitives for routing, validation, plugins, logging, and tests.

## Initial Stack

- Language: TypeScript
- Runtime: Node.js
- Server framework: Fastify
- Package scripts: keep `npm run build` as the TypeScript compile check and add `npm test` for automated validation
- Testing: use Vitest for fast TypeScript-friendly validation tests
- Persistence: defer until a real workflow needs durable records

## Later Options

NestJS may become useful if the product grows into a larger service with many modules, dependency injection needs, background jobs, and stricter architectural boundaries. It is not the right first move because AgentClinic needs nano-sized phases and low framework ceremony.

If AgentClinic adds a web UI, choose a frontend stack that supports responsive layouts, component-level testing, and viewport-based validation without adding unnecessary framework ceremony.

## Stack Principles

- Add dependencies only when they unlock the next small phase.
- Keep domain logic independent from HTTP handlers.
- Prefer explicit types for agent states, intake records, triage outcomes, and care plans.
- Keep routes thin and move behavior into testable modules.
- Treat responsive web UI behavior as a product requirement, not a final polish pass.
- Avoid committing to a database, frontend framework, or deployment platform before the product shape proves it needs one.
