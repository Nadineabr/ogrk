import { useState } from 'react';
import { Layout as PageLayout } from 'view/components/estates/Layout';
import { EstatesContext } from 'view/contexts/EstatesContext';
import useEstatesData from 'view/hooks/useEstatesData';

export const EstatesPage = () => {
  const { data } = useEstatesData(); 

  const [contextData, setContextData] = useState(data);

  return (
    <EstatesContext.Provider value={{ contextData, setContextData }}>
      <PageLayout />
    </EstatesContext.Provider>
    );
};
