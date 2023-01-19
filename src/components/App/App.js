import React, { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import CorsError from '../CorsError/CorsError';
import Yelp from '../../util/Yelp';
import ApiKeyError from '../ApiKeyError/ApiKeyError';
import { apiKey } from '../../util/Yelp';

function App() {

  const [businesses, setBusinesses ] = useState([]);
  const [corsError, setCorsError ] = useState(false);
  const [apiKeyError, setApiKeyError ] = useState(false);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        setBusinesses([...businesses])
      }
      ).then(
        checkApiKey(apiKey)
      )
      .catch(setCorsError(true))
  }

  const checkApiKey = (apiKey) => {
    if (apiKey === 'YourAPIKeyHere') {
      setApiKeyError(true)
    } else {
      setApiKeyError(false)
    }
  }

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
      <CorsError corsError={corsError} />
      {/* <ApiKeyError apiKeyError={apiKeyError}/> */}
      <ApiKeyError apiKeyError={apiKeyError} />
    </div>
  );
}

export default App;
