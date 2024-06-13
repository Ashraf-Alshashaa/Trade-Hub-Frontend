import React from 'react';
import './button.css';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const handleClick = () => {
    onClick(); // Call the provided onClick function
  };

  return (
    <button className="custom-button" onClick={handleClick}>{text} </button>
  );
};

export default Button;