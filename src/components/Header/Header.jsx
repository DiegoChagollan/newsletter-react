import React from 'react';
import './Header.scss';

const Header=({
  title,
  description,
  titleFontSize,
  descriptionFontSize,
  descriptionLineHeight
}) => {
  const titleStyles={
    fontSize: titleFontSize
  };

  const descriptionStyles={
    fontSize: descriptionFontSize,
    lineHeight: descriptionLineHeight
  };
  
  return (
    <div className = 'header'>
      <h1 className = 'title' style={titleStyles}> {title}</h1>
      <p className = 'description' style={descriptionStyles}> {description} </p>
    </div>
  );
};

export default Header;
