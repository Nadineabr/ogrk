import { Estate } from 'domains/estates/estatesEntity';

import styles from './styles.module.scss';

interface IProps {
    data: Estate[];
}

export const Table: React.FC<IProps> = ({ data }) => {
    return Boolean(data.length) ? (
        <div className={styles.root}>
            <table>
                <thead>
                    <tr>
                        <th>Адрес</th>
                        <th>Город</th>
                        <th>Тип</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    const { address, city, type, price } = item;
                    return (
                        <tr key={index}>
                            <td>{address}</td>
                            <td>{city}</td>
                            <td>{type}</td>
                            <td>{price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    ) : (
        <div>Пусто</div>
    );
};