import React, { useEffect, useState } from 'react';
import './Header.scss';

const Header=({
  title,
  description,
  titleFontSize,
  titleLineHeight,
  descriptionFontSize,
  descriptionLineHeight
}) => {
  const [isMobile,setIsMobile]= useState(window.innerWidth<898);

  useEffect(() =>{
    const handleResize = () =>{
      setIsMobile(window.innerWidth<898);
    };
    
    window.addEventListener('resize',handleResize);

    return () =>{
      window.removeEventListener('resize',handleResize);
    };
  },[]);

  const titleStyles={
    fontSize: isMobile ? '40px' : titleFontSize,
    lineHeight : titleLineHeight
  };

  const descriptionStyles={
    fontSize: isMobile ? '17px' : descriptionFontSize,
    lineHeight: isMobile ? '28px' : descriptionLineHeight
  };
  
  const email = 'ash@loremcompany.com';

  return (
    <div className = 'header'>
      <h1 className = 'title' style={titleStyles}> {title}</h1>
      <p className = 'description' style={descriptionStyles}>
        {description.includes(email) ? (
          <>
            {description.split(email)[0]}
            <strong>{email}</strong>
            {description.split(email)[1]}
          </>
        ) : (
          description
        )}
      </p>
    </div>
  );
};

export default Header;
