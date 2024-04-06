import { Estates } from 'domains/estates/estatesEntity';
import { createContext, Dispatch, SetStateAction } from 'react';

export const DEFAULT_ESTATES: Estates = {
  estates: [{
    id: 0,
    address: '',
    city: '',
    type: 0,
    price: 0,
  }]
};
interface IEstatesContext {
  contextData: Estates,
  setContextData: Dispatch<SetStateAction<Estates>>;
}

export const EstatesContext = createContext<IEstatesContext>({
  contextData: DEFAULT_ESTATES,
  setContextData: () => [{}],
});
