import React, { useState } from 'react';
import './Input.scss';

const Input = () => {

  const [inputValue, setInputValue] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);

  const validarEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value.trim());
  };

  const handleBlur = () => {
    setIsInvalidEmail(!validarEmail(inputValue));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInvalidEmail(!validarEmail(value));
  };

  return (
    <form className = 'form'>
        <div className = {`labels ${ isInvalidEmail  ? 'label-invalid' : '' }`}>
            <label> Email address </label>
            <label> Valid email required </label>
        </div>
        <input
          className = {`input ${ isInvalidEmail ? 'input-invalid' : '' }`}
          type = "text"
          placeholder =' email@company.com'
          value = {inputValue}
          onChange = {handleChange}
          onBlur = {handleBlur}
        />
    </form>
  );
};

export default Input;
