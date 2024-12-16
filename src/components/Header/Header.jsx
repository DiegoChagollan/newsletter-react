import React from 'react';
import './Header.scss';

const Header = ({title, content}) => {
  return (
    <div className = 'header'>
      <h1 className = 'title'> {title} </h1>
      <p className = 'content'> {content} </p>
    </div>
  );
};

export default Header;
