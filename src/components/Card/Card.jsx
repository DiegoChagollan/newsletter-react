import React from 'react';
import './Card.scss';

const Card=({width,height,direction='column',children}) => {
  const sizes={
    width: width || '100%',
    height: height || '100%',
    display: 'flex',
    flexDirection: direction
  };

  return (
    <article className = 'card' style={sizes}>
      {children}
    </article>
  );
};

export default Card;
