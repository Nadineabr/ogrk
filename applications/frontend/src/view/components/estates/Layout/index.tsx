import { GET_ESTATES } from 'store/queries/estatesQuery';
import { GQApi } from 'store/api/gqApi';
import { Table } from '../Table';
import { Loader } from 'view/shared/ui/Loader';

export const Layout = () => {
    const { error, loading, data } = GQApi.Query(GET_ESTATES);

    if (error) return <p>Ошибка: {error.message}</p>

    return loading ? (
        <Loader />
        ) : (
        <Table data={data?.estates} />
    );
}