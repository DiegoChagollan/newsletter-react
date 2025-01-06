import React from 'react';
import './Button.scss';

const Button = ({
  text,
  fontSize,
  height,
  onClick
}) => {
  const variedStyles={
    fontSize: fontSize,
    height: height
  };

  return (
    <button type = 'button' className = 'button' style={variedStyles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
