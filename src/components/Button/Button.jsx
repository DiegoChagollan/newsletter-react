import React from 'react';
import './Button.scss';

const Button = ({
  text,
  fontSize,
  height
}) => {
  const variedStyles={
    fontSize: fontSize,
    height: height
  };

  return (
    <button type = 'button' className = 'button' style={variedStyles}>
      {text}
    </button>
  );
};

export default Button;
