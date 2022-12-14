import './Mystyle.scss';
import ListComponent from './ListComponent';
import { useState, useEffect } from 'react';

interface Movies {
  id: number;
  title: string;
  poster: string;
  overview: string;
  release_date: number;
  genres: string;
}

const main = () => {
  const [inputValue, setInputValue] = useState('');
  const [original, setOriginal] = useState<Movies[]>([]);
  const [wish, setWish] = useState<Movies[]>([]);

  const toWish = (movies: Movies) => {
    wish.push(movies);
    setWish(wish);
    const res = original.filter((obj) => obj.id !== movies.id);
    setOriginal(res);
  };

  const toList = (movies: Movies) => {
    original.push(movies);
    setOriginal(original);
    const res = wish.filter((obj) => obj.id !== movies.id);
    setWish(res);
  };

  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://mocki.io/v1/907dd10c-32f7-48a2-a56f-89c66acb723d', {
        method: 'GET'
      });
      const jsonData = await data.json();
      console.log(jsonData);
      setOriginal(jsonData.data);
      if (!data.ok) {
        const msg = `res:${data.status}`;
        throw new Error(msg);
      } else {
        console.log('ok');
      }
    };
    api();
  }, []);

  return (
    <div>
      <div className="input-container">
        <input type={'text'} placeholder={'Enter'} onChange={onInputChange} />
      </div>

      <div className="Mainlist">
        <ListComponent
          list={original}
          buttonText={'go to wish'}
          callback={toWish}
          inputValue={inputValue}
        />
        <ListComponent
          list={wish}
          buttonText={'go to list'}
          callback={toList}
          inputValue={inputValue}
        />
      </div>
    </div>
  );
};
export default main;
