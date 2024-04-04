import { gql, TypedDocumentNode } from '@apollo/client/core';
import { Estates } from 'domains/estates/estatesEntity';

export const GET_ESTATES: TypedDocumentNode<Estates> = gql`
    query GetEstates {
        estates {
            id
            address
            city
            price
            type
        }
    }
`;