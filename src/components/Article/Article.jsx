import React from 'react';
import './Article.scss';

const Article = ({children}) => {
  return (
    <article className = 'card'>
      {children}
    </article>
  );
};

export default Article;
