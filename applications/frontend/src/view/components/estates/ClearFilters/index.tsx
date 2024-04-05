import { Button } from 'view/shared/ui/Button'

import styles from './styles.module.scss';

interface IProps {
  onClearFilter: React.MouseEventHandler;
}

export const ClearFilters: React.FC<IProps> = ({ onClearFilter }) => {
  return (
    <Button className={styles.root} onClick={onClearFilter}>Очистить фильтры</Button>
  )
}
