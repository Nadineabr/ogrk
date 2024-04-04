import { Suspense } from 'react';
import { GET_ESTATES } from 'store/queries/estatesQuery';
import { Loader } from 'view/shared/ui/Loader';
import { GQApi } from 'store/api/gqApi';
import { Estate } from 'domains/estates/estatesEntity';

export const Estates = () => {
    const { error, data } = GQApi.Query(GET_ESTATES);

    if (error) return <p>Ошибка: {error.message}</p>

    return (
        <Suspense fallback={<Loader />}>
            {data?.estates.map((estate: Estate) => {
                return (
                    <ul key={estate.id}>
                        <li>{estate.address}</li>
                    </ul>
                )
            })}
        </Suspense>
    );
}