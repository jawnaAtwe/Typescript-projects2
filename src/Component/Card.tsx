import React from 'react';
import './Cards.scss';

interface Props {
  item: any;
}
const Card = ({ item }: Props) => {
  return (
    <div className={'item'}>
      <div className={'cardValue'}>{item.value}</div>
    </div>
  );
};

export default Card;
