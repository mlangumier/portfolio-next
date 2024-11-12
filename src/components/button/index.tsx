import clsx from 'clsx';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<Props> = ({ className, ...rest }) => {
    return (
        <button
            className={clsx(
                'rounded-xl bg-primary px-10 py-5 font-sans uppercase text-white transition-all duration-200 ease-in-out hover:bg-primary-over',
                className
            )}
            {...rest}
        />
    );
};

export default Button;
