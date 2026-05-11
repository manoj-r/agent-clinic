import Fastify from 'fastify';
import { recommendCarePath } from './care-path';
import type { IntakeRequest } from './domain';
import { classifyIntake } from './intake-classifier';

export function buildServer() {
  const server = Fastify({
    logger: true,
  });

  server.get('/health', async () => {
    return { status: 'ok' };
  });

  server.post('/intake', async (request, reply) => {
    if (!isIntakeRequest(request.body)) {
      return reply.code(400).send({
        error: 'Invalid intake request',
      });
    }

    const triage = classifyIntake(request.body);

    return {
      triage,
      careRecommendation: recommendCarePath(triage),
    };
  });

  return server;
}

function isIntakeRequest(value: unknown): value is IntakeRequest {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<IntakeRequest>;

  return (
    typeof candidate.agentId === 'string' &&
    candidate.agentId.trim().length > 0 &&
    typeof candidate.summary === 'string' &&
    candidate.summary.trim().length > 0 &&
    Array.isArray(candidate.reportedStrains)
  );
}
