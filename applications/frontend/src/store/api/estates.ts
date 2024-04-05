import { GET_ESTATES } from 'store/queries/estatesQuery';
import { GQApi } from './gqApi';

export const getEstates = (filter?: {city: string, type: string}, search?: string) => {
    return GQApi.Query(
      GET_ESTATES,
      filter,
      search,
    );
};
