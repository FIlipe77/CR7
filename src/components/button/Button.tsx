import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['bont--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export interface IButton {
    children?: any,
    type?: any,
    onClick?: any,
    buttonStyle?: any,
    buttonSize?: any,
    className?: any,
}

export const Button: React.FC<IButton> = ({ className, children, buttonSize, buttonStyle, onClick, type
}: IButton) => {

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return (
        <Link to='/SignUp' className='btn-mobile'>
            <button
                className={`btn ${className} ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};