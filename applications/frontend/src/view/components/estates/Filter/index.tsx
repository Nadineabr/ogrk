import { useCallback, useEffect, useState } from 'react';
import { useEstates } from 'view/hooks/useEstates';
import useEstatesData from 'view/hooks/useEstatesData';
import { ReactComponent as SettingsIcon } from 'view/icons/svg/settings.svg';
import { Dropdown } from 'view/shared/ui/DropDown';

import styles from './styles.module.scss';

interface IProps {
  options?: {city: string[]};
}

export const Filter: React.FC<IProps> = ({ options = {city: ['']} }) => {
  const { data, addCityFilter } = useEstatesData();
  const { setContextData } = useEstates();

  const [selectedOption, setSelectedOption] = useState('');

  const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);

    addCityFilter(e.target.value);
  }, [addCityFilter]);

  useEffect(() => {
    if (data) {
      setContextData(data);
    }
  }, [data, setContextData])

  return (
    <div className={styles.root}>
      {Boolean(options?.city?.length) && (
        <Dropdown icon={<SettingsIcon />}>
          {options.city.map((option: string) => (
            <label key={option} >
              <input
                id={option}
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(e)}
              />
              {option}
            </label>
          ))}
        </Dropdown>
      )}
    </div>
  );
};
