import React, { useEffect, useState } from 'react';
import './Card.scss';

const Card=({width,height,direction='column',children}) => {
  // const cardWindow = window.innerWidth<768;
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

  const sizes={
    width: isMobile ? '100%' : width || '100%',
    height: isMobile ? '100%' : height || '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column-reverse' : direction
  };

  return (
    <article className = 'card' style={sizes}>
      {children}
    </article>
  );
};

export default Card;
