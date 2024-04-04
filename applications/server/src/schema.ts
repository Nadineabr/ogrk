import { createSchema } from 'graphql-yoga';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { EstateResolver } from './resolvers/estate.resolver';

const estateResolver = new EstateResolver();

type EstatesFilter = {
  city: string;
  type: string;
};

type EstatesInput = {
  filter?: EstatesFilter;
  search?: string;
};

export const schema = createSchema({
  typeDefs: readFileSync(join(__dirname, './schema.graphql'), 'utf-8'),
  resolvers: {
    Query: {
      estates: (_, input?: EstatesInput) =>
        estateResolver.getEstates({
          city: input?.filter?.city,
          type: input?.filter?.type,
          search: input?.search,
        }),
    },
  },
});
