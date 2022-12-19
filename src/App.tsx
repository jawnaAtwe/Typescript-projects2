import React from 'react';
import './App.scss';
import './Component/Cards.scss';
import { useState } from 'react';
import Card from './Component/Card';

function App() {
  const [items, setItems] = useState(
    [
      { id: 1, value: '1' },
      { id: 1, value: '1' },
      { id: 2, value: '2' },
      { id: 2, value: '2' },
      { id: 3, value: '3' },
      { id: 3, value: '3' },
      { id: 4, value: '4' },
      { id: 4, value: '4' },
      { id: 5, value: '5' },
      { id: 5, value: '5' },
      { id: 6, value: '6' },
      { id: 6, value: '6' },
      { id: 7, value: '7' },
      { id: 7, value: '7' },
      { id: 8, value: '8' },
      { id: 8, value: '8' }
    ].sort(() => Math.random() - 0.5)
  );

  return (
    <div className="main">
      {items.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}

export default App;
