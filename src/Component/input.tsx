import './Mystyle.scss';

const input = () => {
  return (
    <div>
      <div className="input-container">
        <input type={'text'} placeholder={'Enter'} />
      </div>
      <div className="Mainlist">
        <div className="listVideo">
          <div className="item">
            <text>Id:</text>
            <text>Title:</text>
            <text>poster:</text>
            <text>overview:</text>
            <text>release_date:</text>
            <text>genres:</text>

            <button type={'submit'}>go</button>
          </div>
        </div>
        <div className="listVideo">
          <div className="item">
            <text>Id:</text>
            <text>Title:</text>
            <text>poster:</text>
            <text>overview:</text>
            <text>release_date:</text>
            <text>genres:</text>

            <button type={'submit'}>go</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default input;
