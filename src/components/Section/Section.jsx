import React from 'react';
import './Section.scss';

const Section = ({children}) => {
  return (
    <section className = 'card-content'>
        {children}
    </section>
  );
};

export default Section;
