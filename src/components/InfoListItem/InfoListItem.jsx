import React from 'react';
import './InfoListItem.scss';

const InfoListItem = ({text}) => {
  return (
    <li className='text-icon'>
      <span className='text'>{text}</span>
    </li>
  );
};

export default InfoListItem;
