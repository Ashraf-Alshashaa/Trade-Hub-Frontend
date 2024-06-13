import React from 'react';
import './button.css';
import { ButtonProps } from './types.ts';

const Button: React.FC <ButtonProps> = ({ text, onClick, className = '' }) => {
  const handleClick = () => {
    onClick(); // Call the provided onClick function
  };

  return (
    <button
    className={`custom-button ${className}`}
    onClick={handleClick}
    >
        {text}
    </button>
  );
};

export default Button;