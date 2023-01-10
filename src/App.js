

import './App.css';
import {BrowserRouter, useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  let history = useNavigate
  return (
  <>
    <BrowserRouter history={history}>
      <Navbar/>
    </BrowserRouter>
  </>
);
}

export default App;
