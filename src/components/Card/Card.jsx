import React, { useEffect, useState } from 'react';
import './Card.scss';

const Card=({width,height,direction,border='column',children}) => {
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

  const sizes={
    width: isMobile ? '100%' : width || '100%',
    height: isMobile ? 'auto' : height || '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column-reverse' : direction,
    borderRadius: isMobile ? 'opx' : border || '32px'
  };

  return (
    <article className = 'card' style={sizes}>
      {children}
    </article>
  );
};

export default Card;
