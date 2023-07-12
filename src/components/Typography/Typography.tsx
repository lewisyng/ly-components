import { FunctionComponent, ReactNode } from 'react';
import styles from './Typography.module.scss';
import clsx from 'clsx';

type TypographyProps = {
    as: keyof JSX.IntrinsicElements;
    children: ReactNode;
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'small'
        | 'lead'
        | 'body';
};

const Typography: FunctionComponent<TypographyProps> = ({
    as,
    variant,
    children,
}) => {
    const As = as;

    return <As className={clsx(styles['typography'])}>{children}</As>;
};

export default Typography;
