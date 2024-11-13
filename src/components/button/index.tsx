import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    linkNavigation?: boolean;
    linkExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
    return (
        <button className={clsx('btn', className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
