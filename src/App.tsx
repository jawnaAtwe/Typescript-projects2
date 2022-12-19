import './App.scss';
import './Component/Cards.scss';
import { useState, useEffect } from 'react';
import Card from './Component/Card';

function App() {
  const [prev, setPrev] = useState(-1);
  const [number, setNumber] = useState(-1);
  const [items, setItems] = useState(
    [
      { id: 1, stat: '' },
      { id: 1, stat: '' },
      { id: 2, stat: '' },
      { id: 2, stat: '' },
      { id: 3, stat: '' },
      { id: 3, stat: '' },
      { id: 4, stat: '' },
      { id: 4, stat: '' },
      { id: 5, stat: '' },
      { id: 5, stat: '' },
      { id: 6, stat: '' },
      { id: 6, stat: '' },
      { id: 7, stat: '' },
      { id: 7, stat: '' },
      { id: 8, stat: '' },
      { id: 8, stat: '' }
    ].sort(() => Math.random() - 0.5)
  );
  const handleClick = (id: number) => {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  const check = (current: number) => {
    if (items[current].id == items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setNumber(number + 1);
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
      }, 500);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (number >= 7) {
        setNumber(0);
        location.reload();
      }
    }, 2000);
  }, [number]);
  return (
    <div className="main">
      {items.map((item, index) => (
        <Card item={item} id={index} handleClick={handleClick} key={index} />
      ))}
    </div>
  );
}

export default App;
