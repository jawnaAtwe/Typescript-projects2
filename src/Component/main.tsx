import './Mystyle.scss';
import ListComponent from './ListComponent';
import { useState, useEffect } from 'react';

export interface Movies {
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
  const [pageNumber, setPageNumber] = useState(1);
  const [listToShow, setListToShow] = useState<Movies[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const toWish = (movies: Movies) => {
    const arr: Movies[] = [movies];
    const arr1: Movies[] = [...wish, ...arr];
    setWish(arr1);
    const res = listToShow.filter((obj) => obj.id !== movies.id);
    setListToShow(res);
  };

  const toList = (movies: Movies) => {
    const arr: Movies[] = [movies];
    const arr1: Movies[] = listToShow.concat(arr);
    setListToShow(arr1);
    const res = wish.filter((obj) => obj.id !== movies.id);
    setWish(res);
  };

  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const api = async () => {
    const data = await fetch('https://mocki.io/v1/907dd10c-32f7-48a2-a56f-89c66acb723d', {
      method: 'GET'
    });
    const jsonData = await data.json();
    setOriginal(jsonData.data);
    const arrfin = listToShow.concat(jsonData.data.slice(pageNumber * 10 - 10, pageNumber * 10));
    setListToShow(arrfin);
    setPageNumber(pageNumber + 1);
    if (!data.ok) {
      const msg = `res:${data.status}`;
      throw new Error(msg);
    } else {
      console.log('ok');
    }
  };

  const loadMore = () => {
    setPageNumber(pageNumber + 1);
    if (pageNumber == 11) setIsHidden(true);
    const arrfin = listToShow.concat(original.slice(pageNumber * 10 - 10, pageNumber * 10));
    setListToShow(arrfin);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <div className="input-container">
        <input type={'text'} placeholder={'Enter'} onChange={onInputChange} />
      </div>
      <div className="Mainlist">
        <ListComponent
          list={listToShow}
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
      </div>{' '}
      {
        <button
          type={'submit'}
          onClick={loadMore}
          className={`loadbutton ${isHidden ? '' : 'visible'}`}>
          Load More
        </button>
      }{' '}
    </div>
  );
};
export default main;
