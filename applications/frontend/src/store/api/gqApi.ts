import { DocumentNode, useMutation, useQuery } from '@apollo/client';
import { GetEstatesParams } from 'domains/common/commonEnums';

export const GQApi = {
  Query: (query: DocumentNode, filter: GetEstatesParams) => {
    return useQuery(
      query, 
      {
        fetchPolicy: 'cache-and-network',
        variables: filter,
        notifyOnNetworkStatusChange: true,
      });
  },

  Mutation: (query: DocumentNode) => {
    return useMutation(query);
  }
};
