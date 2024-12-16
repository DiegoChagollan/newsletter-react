import React from 'react';
import './Form.scss';

const Form = ({children}) => {
  return (
    <div className = 'form-container'>
      {children}
    </div>
  );
};

export default Form;
