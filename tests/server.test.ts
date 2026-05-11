import { afterEach, describe, expect, test } from 'vitest';
import type { FastifyInstance } from 'fastify';
import { buildServer } from '../src/server';

let server: FastifyInstance | undefined;

afterEach(async () => {
  await server?.close();
  server = undefined;
});

describe('server', () => {
  test('returns a healthy status from GET /health', async () => {
    server = buildServer();

    const response = await server.inject({
      method: 'GET',
      url: '/health',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: 'ok' });
  });

  test('rejects invalid intake payloads', async () => {
    server = buildServer();

    const response = await server.inject({
      method: 'POST',
      url: '/intake',
      payload: {
        agentId: 'agent-5',
      },
    });

    expect(response.statusCode).toBe(400);
    expect(response.json()).toEqual({
      error: 'Invalid intake request',
    });
  });

  test('returns triage and care recommendation for valid intake payloads', async () => {
    server = buildServer();

    const response = await server.inject({
      method: 'POST',
      url: '/intake',
      payload: {
        agentId: 'agent-6',
        summary: 'Urgent request with missing context and no acceptance criteria.',
        reportedStrains: [],
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      triage: {
        strain: 'missing-context',
        severity: 'moderate',
        recommendedAction: 'request-clarification',
      },
      careRecommendation: {
        action: 'request-clarification',
        summary: 'Pause the work and ask for the missing acceptance criteria before continuing.',
      },
    });
  });
});
