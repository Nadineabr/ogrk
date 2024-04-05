
import cn from 'classnames';
import { Loader } from '../Loader';
import styles from './styles.module.scss';

interface IProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: React.MouseEventHandler;
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
    isLoading?: boolean;
}

export const Button: React.FC<IProps> = ({
    children,
    onClick,
    className,
    disabled = false,
    tabIndex,
    isLoading,
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.root, className)}
            disabled={disabled}
            tabIndex={tabIndex}
        >
            {isLoading ? <Loader /> : children}
        </button>
    );
}
