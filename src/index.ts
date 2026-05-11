import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

server.get('/health', async () => {
  return { status: 'ok' };
});

async function start() {
  await server.listen({ port: 3000, host: '127.0.0.1' });
}

start().catch((error) => {
  server.log.error(error);
  throw error;
});
