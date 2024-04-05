import { Table } from '../Table';
import { Loader } from 'view/shared/ui/Loader';
import { getEstates } from 'store/api/estates';

export const Layout = () => {
  const { error, loading, data } = getEstates();

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  return loading ? (
    <Loader />
  ) : (
    <Table data={data?.estates} />
  );
}