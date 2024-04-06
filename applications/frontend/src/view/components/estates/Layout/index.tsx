import { Table } from '../Table';
import { Loader } from 'view/shared/ui/Loader';
import useEstatesData from 'view/hooks/useEstatesData';
import { useEstates } from 'view/hooks/useEstates';
import { useEffect, useState } from 'react';
import { getUniqueValues } from 'view/utils/getUniqueValues';

export const Layout = () => {
  const { error, loading, data } = useEstatesData(); 
  const { contextData, setContextData } = useEstates();

  const [filterOptions, setFilterOptions] = useState<{city: string[]}>({city: ['']});

  useEffect(() => {
    if (data) {
      setContextData(data);

      const cities = getUniqueValues(data.estates, 'city');
      setFilterOptions({city: cities})
    }
  }, [data, setContextData]);

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }
  
  return loading ? (
    <Loader />
  ) : (
    <Table data={contextData?.estates} filterOptions={filterOptions} />
  );
}