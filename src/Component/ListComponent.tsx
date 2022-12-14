import './Mystyle.scss';

interface Movies {
  id: number;
  title: string;
  poster: string;
  overview: string;
  release_date: number;
  genres: string;
}

interface Props {
  list: Movies[];
  buttonText: string;
  inputValue: string;
  callback: (movies: Movies) => void;
}

const ListComponent = ({ list, buttonText, callback, inputValue }: Props) => {
  if (inputValue != '') {
    const filteredValues = list.filter((item) => {
      const searchTerm = inputValue.toLowerCase();
      const v = item.title.toLowerCase();
      return v.includes(searchTerm);
    });
    list = filteredValues;
  }

  return (
    <div className="listVideo">
      {list &&
        list.map((opt) => (
          <div className="item" key={opt.id}>
            <p>{opt.id}</p>
            <p>{opt.title}</p>
            <img src={opt.poster} alt="" className="image" />
            <p>{opt.overview}</p>
            <p>{opt.release_date}</p>
            <p>{opt.genres}</p>

            <button type={'submit'} onClick={() => callback(opt)}>
              {buttonText}
            </button>
          </div>
        ))}
    </div>
  );
};
export default ListComponent;
