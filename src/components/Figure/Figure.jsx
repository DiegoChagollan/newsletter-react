import React from 'react';
import './Figure.scss';
import coverImage from '../../assets/illustration-sign-up-mobile.svg';

const Figure = () => {
  return (
    <figure className = 'card-image'>
        <img src = {coverImage}/>
    </figure>
  );
};

export default Figure;
