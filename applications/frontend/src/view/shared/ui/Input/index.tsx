import { ChangeEvent } from 'react';

import styles from './styles.module.scss';

interface IProps{
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}

export const Input: React.FC<IProps> = ({ onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};
