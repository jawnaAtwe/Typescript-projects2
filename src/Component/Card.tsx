import React from 'react';
import './Cards.scss';

interface Props {
  item: any;
  id: number;
  handleClick: (id: number) => void;
}
const Card = ({ item, id, handleClick }: Props) => {
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'item' + itemClass} onClick={() => handleClick(id)}>
      <div className={'cardValue' + item.stat}>{item.id}</div>
    </div>
  );
};

export default Card;
