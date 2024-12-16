import React, { Children } from 'react';
import './Middle.scss';

const Middle = ({ children }) => {
  return (
    <div className = 'middleContainer'>
      { children }
    </div>
  );
};

export default Middle;
