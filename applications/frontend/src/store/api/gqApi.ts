import { DocumentNode, useMutation, useQuery } from '@apollo/client';

export const GQApi = {
  Query: (query: DocumentNode, filter?: {city: string, type: string}, search?: string) => {
    return useQuery(
      query, 
      {
        fetchPolicy: 'cache-and-network',
        variables: [filter, search],
        notifyOnNetworkStatusChange: true,
      });
  },

  Mutation: (query: DocumentNode) => {
    return useMutation(query);
  }
};
