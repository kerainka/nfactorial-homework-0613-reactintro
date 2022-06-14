import logo from './logo.svg';
import './App.css';
import { format } from 'date-fns'


function App() {
  return (
    <div className="App">
      <div className="d-flex p-4 flex-row justify-content-between pageHeader">
        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
        <div className="headerDate">{format(new Date(), 'dd.MM.yyyy hh:mm')}</div>
      </div>
      <div className="d-flex imgContainer">
        <div className="d-flex flex-column flex-grow-1 img1 imgDiv justify-content-center">
          Hey
        </div>
        <div className="d-flex flex-column flex-grow-1 img2 imgDiv justify-content-center">
          Let's
        </div>
        <div className="d-flex flex-column flex-grow-1 img3 imgDiv justify-content-center">
          Give
        </div>
        <div className="d-flex flex-column flex-grow-1 img4 imgDiv justify-content-center">
          All
        </div>
        <div className="d-flex flex-column flex-grow-1 img5 imgDiv justify-content-center">
          You Can
        </div>
      </div>
    </div>
  );
}

export default App;
