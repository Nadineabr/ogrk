import { Estate } from 'domains/estates/estatesEntity';
import React, { useCallback, useEffect, useState } from 'react';
import { useEstates } from 'view/hooks/estates/useEstates';
import useEstatesData from 'view/hooks/estates/useEstatesData';
import { highlightText } from 'view/utils/highlightText';
import { ClearFilters } from '../ClearFilters';
import { Filter } from '../Filter';
import { TableSearch } from '../TableSearch';

import styles from './styles.module.scss';

interface IProps {
  data: Estate[];
  filterOptions: {
    city: string[];
  }
}

export const Table: React.FC<IProps> = ({ data, filterOptions }) => {
  const { clearFilters, searchTable, data: updatedData } = useEstatesData();
  const { setContextData } = useEstates();

  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    if (updatedData) {
      setContextData(updatedData);
    }
  }, [updatedData, setContextData]);

  const handleClearFilters = useCallback(() => {
    clearFilters();
    setSearchInput('');
    setContextData(updatedData);
  }, [clearFilters, setContextData, updatedData]);

  const handleSearch = useCallback((value: string) => {
    setSearchInput(value);
    searchTable(value);
  }, [searchTable]);

  const handleSetFilter = () => {
    setSearchInput('');
  }

  return (
    <div className={styles.root}>
      <div className={styles.tableControls}>
        <TableSearch onSearch={handleSearch} value={searchInput} />
        <ClearFilters onClearFilter={handleClearFilters} />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Адрес</th>
            <th>Город <Filter options={filterOptions} onSetFilter={handleSetFilter} /></th>
            <th>Тип</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {!!data?.length && data.map((item, index) => {
            const { address, city, type, price } = item;
            return (
              <tr key={index}>
                <td dangerouslySetInnerHTML={{ __html: `<td>${highlightText(address, searchInput)}</td>` }} />
                <td>{city}</td>
                <td>{type}</td>
                <td>{price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {!data?.length && <div style={{ textAlign: 'center'}}>Не найдено</div>}
    </div>
  );
};
