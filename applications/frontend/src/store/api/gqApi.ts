import { DocumentNode, useQuery, useMutation } from '@apollo/client';

export const GQApi = {
  Query: (query: DocumentNode) => {
    return useQuery(query, { errorPolicy: 'all' });
  },

  Mutation: (query: DocumentNode) => {
    return useMutation(query);
  }
};
