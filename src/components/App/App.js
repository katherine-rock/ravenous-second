import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import CorsError from '../Error/CorsError';
import Yelp from '../../util/Yelp';

function App() {

  const [businesses, setBusinesses ] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        setBusinesses([...businesses])
      }
      )
  }

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <CorsError />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
