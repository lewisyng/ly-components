import { FunctionComponent, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
    return <button>{children}</button>;
};

export default Button;
