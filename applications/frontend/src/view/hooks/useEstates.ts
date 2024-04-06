import { useContext } from 'react';
import { EstatesContext } from 'view/contexts/EstatesContext';

export function useEstates() {
  return useContext(EstatesContext);
}
