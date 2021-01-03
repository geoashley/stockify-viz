import React from 'react';
import '../styles/card.scss';

function Card({ children, name}) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="card-wrapper">
      <div className="card-item">{children}</div>
    </a>
  );
}

export default Card;