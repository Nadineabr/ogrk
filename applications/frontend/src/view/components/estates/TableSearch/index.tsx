import { Input } from 'view/shared/ui/Input';

interface IProps{
  onSearch: (value: string) => void;
  value: string;
}

export const TableSearch: React.FC<IProps> = ({ onSearch, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //TODO: тут добавить hook throttle
    onSearch(e.target.value);
  };

  return (
    <Input
      onChange={handleChange}
      value={value}
      placeholder={'Найти...'}
    />
  );
};
