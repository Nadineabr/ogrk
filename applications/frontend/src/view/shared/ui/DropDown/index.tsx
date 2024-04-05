import { useState } from 'react';
import { Button } from '../Button';

import styles from './styles.module.scss';

interface Iprops {
  icon: React.ReactElement;
  children: React.ReactNode;
}
//TODO: тут добавить hook useClickOtside для закрытия дропдауна по клику вне компонента
export const Dropdown: React.FC<Iprops> = ({
  icon,
  children,
}) => {
  const [isFilterOptions, setIsFilterOptions] = useState<boolean>(false);

  const handleToggle = () => {
    setIsFilterOptions((prevState) => !prevState);
  };
  return (
    <>
      <Button onClick={handleToggle} className={styles.button}>
        {icon}
      </Button>

      {isFilterOptions && (
        <div className={styles.items}>{children}</div>
      )}
    </>
  );
};