import { GET_ESTATES } from 'store/queries/estatesQuery';
import { GQApi } from './gqApi';

export const getEstates = (filter?: any) => {
    return GQApi.Query(
      GET_ESTATES,
      filter,
    );
};
