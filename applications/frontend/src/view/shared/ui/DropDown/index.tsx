import { useCallback, useRef, useState } from 'react';
import { useClickOutside } from 'view/hooks/useClickOutside';
import { Button } from '../Button';

import styles from './styles.module.scss';

interface Iprops {
  icon: React.ReactElement;
  children: React.ReactNode;
}

export const Dropdown: React.FC<Iprops> = ({
  icon,
  children,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(() => {
    setIsOpened(false);
  }, [setIsOpened]);

  useClickOutside(containerRef, handleClickOutside);

  const handleToggle = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <div ref={containerRef}>
      <Button onClick={handleToggle} className={styles.button}>
        {icon}
      </Button>

      {isOpened && (
        <div className={styles.items}>{children}</div>
      )}
    </div>
  );
};