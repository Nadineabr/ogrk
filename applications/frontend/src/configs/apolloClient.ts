import { ApolloClient, InMemoryCache, DocumentNode } from '@apollo/client';

export type Query = <QV>(query: DocumentNode, variables?: QV) => Promise<unknown>;

export type Mutate = <MV>(mutation: DocumentNode, variables?: MV) => Promise<unknown>;

export type GraphQLClient = {
  query: Query;
  mutate: Mutate;
  client: ApolloClient<unknown>;
};

export const client = new ApolloClient({
  uri: 'http://localhost:4040/graphql',
  cache: new InMemoryCache(),
});
