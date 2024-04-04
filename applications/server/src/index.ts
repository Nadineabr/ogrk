import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { schema } from './schema';

const PORT = 4040;

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server is running on http://localhost:${PORT}/graphql`);
});
