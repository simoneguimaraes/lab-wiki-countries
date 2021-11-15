import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import countries from '../countries.json';

import Navbar from './Navbar';
import CountriesList from './CountriesList';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
