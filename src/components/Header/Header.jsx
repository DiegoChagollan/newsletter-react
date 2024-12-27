import React from 'react';
import './Header.scss';

const Header = ({title, description}) => {
  return (
    <div className = 'header'>
      <h1 className = 'title'> {title} </h1>
      <p className = 'description'> {description} </p>
    </div>
  );
};

export default Header;
