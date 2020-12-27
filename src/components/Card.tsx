import React from 'react';
import '../styles/card.scss';

interface IProps {
  name?: string;
}

function Card(props: IProps) {
  const { name } = props;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="card-wrapper">
      <div className="card-item">{name}</div>
    </a>
  );
}

export default Card;