import './Mystyle.scss';
import { useRef, useState, useEffect } from 'react';
const input = () => {
  const ref = useRef(null);
  type Movies = {
    id: number;
    title: string;
    poster: string;
    overview: string;
    release_date: number;
    genres: string;
  };
  const [filtered, setFiltered] = useState<Movies[]>([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://mocki.io/v1/907dd10c-32f7-48a2-a56f-89c66acb723d', {
        method: 'GET',

        headers: { 'Content-Type': 'application/json' }
      });
      const jsonData = await data.json();
      setFiltered(jsonData.results);
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

  // useEffect(() => {
  //
  //   fetch('https://mocki.io/v1/907dd10c-32f7-48a2-a56f-89c66acb723d')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setFiltered(result.results);
  //       if (!result.ok) {
  //         const msg = `res:${result.status}`;
  //         throw new Error(msg);
  //       } else {
  //         console.log('ok');
  //         console.log(filtered.length);
  //       }
  //     });
  // }, []);
  // const onInputChange = (e) => {
  //   setInputValue(e.target.value)
  //
  //   const filteredValues = filtered.filter((item) => {
  //     const searchTerm = e.target.value.toLowerCase()
  //     const v = item.value.toLowerCase()
  //     if (!searchTerm) return true
  //     return v.includes(searchTerm)
  //   })
  //   setFiltered( filteredValues )
  // }
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
                <img src={opt.poster} alt="" />
                <p>{opt.overview}</p>
                <p>{opt.release_date}</p>
                <p>{opt.genres}</p>

                <button type={'submit'}>go to wishlist</button>
              </div>
            ))}
        </div>
        <div className="listVideo">
          <div className="item">
            <p>Id:</p>
            <p>Title:</p>
            <p>poster:</p>
            <p>overview:</p>
            <p>release_date:</p>
            <p>genres:</p>

            <button type={'submit'}>go</button>
          </div>
          <div className="item">
            <p>Id:</p>
            <p>Title:</p>
            <p>poster:</p>
            <p>overview:</p>
            <p>release_date:</p>
            <p>genres:</p>

            <button type={'submit'}>go</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default input;
