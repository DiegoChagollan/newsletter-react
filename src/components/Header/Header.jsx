import React, { useEffect, useState } from 'react';
import './Header.scss';

const Header=({
  title,
  description,
  titleFontSize,
  descriptionFontSize,
  descriptionLineHeight
}) => {
  const [isMobile,setIsMobile]= useState(window.innerWidth<837);

  useEffect(() =>{
    const handleResize = () =>{
      setIsMobile(window.innerWidth<837);
    };
    
    window.addEventListener('resize',handleResize);

    return () =>{
      window.removeEventListener('resize',handleResize);
    };
  },[]);

  const titleStyles={
    fontSize: isMobile ? '40px' : titleFontSize
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
