import { gql, TypedDocumentNode } from '@apollo/client/core';
import { Estates } from 'domains/estates/estatesEntity';

export const GET_ESTATES: TypedDocumentNode<Estates> = gql`
  query Estates($filter: EstatesFilter, $search: String) {
    estates(filter: $filter, search: $search) {
      id
      address
      city
      price
      type
    }
  }
`;
