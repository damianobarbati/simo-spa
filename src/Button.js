import React from 'react';

const Button = ({ children, onClick, ...props }) => {
    const onClickCB = () => {
        alert('ciao');

        if (onClick)
            onClick();
    };

    return (
        <button onClick={onClickCB} {...props}>{children}</button>
    );
};

export default Button;
