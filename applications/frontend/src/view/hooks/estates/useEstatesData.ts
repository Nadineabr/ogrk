import { useCallback } from 'react';
import { getEstates } from 'store/api/estates';

const useEstatesData = () => {
  const { refetch, error, loading, data} = getEstates();

  const addCityFilter = useCallback((city: string) => {
    refetch({
      filter: { city },
    });

  }, [refetch]);

  const searchTable = useCallback((value: string) => {
    refetch({
      filter: {
        city: '',
      },
      search: value,
      });
  }, [refetch]);

  const clearFilters = useCallback(() => {
    refetch({
      filter: {
        city: '',
      },
      search: '',
    });
  }, [refetch]);

  return {
    data,
    loading,
    error,
    clearFilters,
    searchTable,
    addCityFilter,
  };
};

export default useEstatesData;
