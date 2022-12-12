import './Mystyle.scss';
import { useState, useEffect } from 'react';
const input = () => {
  type Movies = {
    id: number;
    title: string;
    poster: string;
    overview: string;
    release_date: number;
    genres: string;
  };
  const handleSubmit = (e: any) => e.preventDefault();

  // const [state, setState] = useState<Movies[]>({
  //   filtered: [],
  //   filteredWish: [],
  //   original: [],
  //   wish: []
  // })
  const [original, setOriginal] = useState<Movies[]>([]);
  const [wish, setWish] = useState<Movies[]>([]);
  const [filtered, setFiltered] = useState<Movies[]>([]);
  const [filteredWish, setFilteredWish] = useState<Movies[]>([]);
  const Switch = (movies: Movies) => {
    wish.push(movies);
    setWish(wish);
    setFilteredWish(wish);
    const res = original.filter((obj) => obj.id !== movies.id);
    setOriginal(res);
    setFiltered(res);
  };
  const Back = (movies: Movies) => {
    original.push(movies);
    setOriginal(original);
    const res = wish.filter((obj) => obj.id !== movies.id);
    setWish(res);
    setFilteredWish(res);
  };
  const onInputChange = (e: any) => {
    const filteredValues = original.filter((item) => {
      const searchTerm = e.target.value.toLowerCase();
      const v = item.title.toLowerCase();
      if (!searchTerm) return true;
      return v.includes(searchTerm);
    });
    setFiltered(filteredValues);
    const filteredValues2 = wish.filter((item) => {
      const searchTerm = e.target.value.toLowerCase();
      const v = item.title.toLowerCase();
      if (!searchTerm) return true;
      return v.includes(searchTerm);
    });
    setFilteredWish(filteredValues2);
  };

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://mocki.io/v1/907dd10c-32f7-48a2-a56f-89c66acb723d', {
        method: 'GET'
      });
      const jsonData = await data.json();
      console.log(jsonData);

      setFiltered(jsonData.data);
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
      <div className="input-container" onChange={handleSubmit}>
        <input type={'text'} placeholder={'Enter'} onChange={onInputChange} />
      </div>

      <div className="Mainlist">
        <div className="listVideo">
          {filtered &&
            filtered.map((opt) => (
              <div className="item" key={opt.id}>
                <p>{opt.id}</p>
                <p>{opt.title}</p>
                <img src={opt.poster} alt="" className="image" />
                <p>{opt.overview}</p>
                <p>{opt.release_date}</p>
                <p>{opt.genres}</p>

                <button type={'submit'} onClick={() => Switch(opt)}>
                  go to wishlist
                </button>
              </div>
            ))}
        </div>
        <div className="listVideo">
          {filteredWish &&
            filteredWish.map((opt) => (
              <div className="item" key={opt.id}>
                <p>{opt.id}</p>
                <p>{opt.title}</p>
                <img src={opt.poster} alt="" className="image" />
                <p>{opt.overview}</p>
                <p>{opt.release_date}</p>
                <p>{opt.genres}</p>

                <button type={'submit'} onClick={() => Back(opt)}>
                  Back
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default input;
