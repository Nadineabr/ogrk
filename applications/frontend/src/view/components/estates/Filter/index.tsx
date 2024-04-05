import { useCallback, useState } from 'react';
import { getEstates } from 'store/api/estates';
import { ReactComponent as SettingsIcon } from 'view/icons/svg/settings.svg';
import { Dropdown } from 'view/shared/ui/DropDown';

import styles from './styles.module.scss';

interface IProps {
  onClick?: React.MouseEventHandler;
  options?: string[];
}

export const Filter: React.FC<IProps> = ({ options = [''] }) => {
  const {refetch} = getEstates();

  const [selectedOption, setSelectedOption] = useState('');

  const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    refetch({
      filter: {
        city: e.target.value
      },
    });
  }, [refetch]);

  return (
    <div className={styles.root}>
      {Boolean(options?.length) && (
        <Dropdown icon={<SettingsIcon />}>
          {options.map((option: string) => (
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
