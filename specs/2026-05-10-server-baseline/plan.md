# Server Baseline Plan

## 1. Dependency Setup

1. Add Fastify as a production dependency.
2. Keep TypeScript as the existing development dependency.
3. Do not add a test runner in this phase.
4. Confirm `package.json` still keeps `npm run build` as the primary verification command.

## 2. Server Entrypoint

1. Replace the placeholder `src/index.ts` console message with a minimal Fastify server.
2. Create a Fastify instance in the entrypoint.
3. Register only the routes needed for this phase.
4. Start the server from `src/index.ts`.
5. Use a small default local port if no explicit port is provided.

## 3. Health Route

1. Add `GET /health`.
2. Return a successful HTTP response with a minimal health payload.
3. Keep the route free of persistence, domain triage logic, or intake concepts.
4. Keep response copy clear and operational, with no decorative workflow behavior.

## 4. Build Verification

1. Run `npm run build`.
2. Resolve any TypeScript errors introduced by Fastify or the new server entrypoint.
3. Confirm compiled output is produced under `dist` according to the existing `tsconfig.json`.

## 5. Manual Runtime Verification

1. Start the server locally.
2. Request `GET /health` with a browser or curl.
3. Confirm the route returns a successful response.
4. Stop the local server after verification.

## 6. Review and Merge Readiness

1. Confirm the implementation only touches files needed for Phase 1.
2. Confirm no domain model, intake, persistence, UI, or production-readiness work slipped into this phase.
3. Confirm `requirements.md`, `plan.md`, and `validation.md` still match the implemented behavior.
4. Commit the feature when validation passes.
