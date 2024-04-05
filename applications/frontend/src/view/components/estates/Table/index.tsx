import { Estate } from 'domains/estates/estatesEntity';
import { useCallback, useMemo, useState } from 'react';
import { getEstates } from 'store/api/estates';
import { getUniqueValues } from 'view/utils/getUniqueValues';
import { ClearFilters } from '../ClearFilters';
import { Filter } from '../Filter';
import { TableSearch } from '../TableSearch';

import styles from './styles.module.scss';

interface IProps {
  data: Estate[];
}

export const Table: React.FC<IProps> = ({ data }) => {
  const {refetch} = getEstates();

  const cities = useMemo(() => getUniqueValues(data, 'city'), [data]);

  const [searchInput, setSearchInput] = useState('');

  const handleClearFilters = useCallback(() => {
    refetch({
      filter: {
        city: '',
      },
      search: '',
    });
    setSearchInput('');
  }, [refetch]);

  const handleSearch = (value: string) => {
    setSearchInput(value);
    console.log(value)
    refetch({
      filter: {
        city: '',
      },
      search: value,
    });
  }

  return Boolean(data?.length) ? (
    <div className={styles.root}>
      <div className={styles.tableControls}>
        <TableSearch onSearch={handleSearch} value={searchInput} />
        <ClearFilters onClearFilter={handleClearFilters} />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Адрес</th>
            <th>Город <Filter options={cities} /></th>
            <th>Тип</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => {
          const { address, city, type, price } = item;
          return (
            <tr key={index}>
              <td>{address}</td>
              <td>{city}</td>
              <td>{type}</td>
              <td>{price}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  ) : (
    <div>Пусто</div>
  );
};
