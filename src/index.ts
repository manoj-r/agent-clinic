import { buildServer } from './server';

const server = buildServer();

async function start() {
  await server.listen({ port: 3000, host: '127.0.0.1' });
}

start().catch((error) => {
  server.log.error(error);
  throw error;
});
