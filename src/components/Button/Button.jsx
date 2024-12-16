import React from 'react';
import './Button.scss';

const Button = ({text, variant}) => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button type = 'button' className = 'button'>
      {text}
    </button>
  );
};

export default Button;
