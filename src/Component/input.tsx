import './Mystyle.scss';
import { useRef, useState, useEffect } from 'react';
const input = () => {
  type Movies = {
    id: number;
    title: string;
    poster: string;
    overview: string;
    release_date: number;
    genres: string;
  };
  const ref = useRef(null);
  const [filtered, setFiltered] = useState<Movies[]>([]);
  const [filteredwish, setFilteredwish] = useState<Movies[]>([]);
  const Switch = (movies: Movies) => {
    filteredwish.push(movies);
    setFilteredwish(filteredwish);
    const res = filtered.filter((obj) => obj.id !== movies.id);
    setFiltered(res);
  };
  const Back = (movies: Movies) => {
    filtered.push(movies);
    setFiltered(filtered);
    const res = filteredwish.filter((obj) => obj.id !== movies.id);
    setFilteredwish(res);
  };

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://mocki.io/v1/907dd10c-32f7-48a2-a56f-89c66acb723d', {
        method: 'GET'
      });
      const jsonData = await data.json();
      console.log(jsonData);

      setFiltered(jsonData.data);
      // setFilteredwish(jsonData.data);
      if (!data.ok) {
        const msg = `res:${data.status}`;
        throw new Error(msg);
      } else {
        console.log('ok');
        console.log(filtered.length);
      }
    };
    api();
  }, []);

  return (
    <div>
      <div className="input-container">
        <input type={'text'} placeholder={'Enter'} />
      </div>

      <div className="Mainlist" ref={ref}>
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
          {filteredwish &&
            filteredwish.map((opt) => (
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
