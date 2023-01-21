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
      )
     // If the API call is bad, call a function to check for the error type - missing API Key or CORS error. 
      .catch(checkForErrorType(apiKey))
  }

  const checkForErrorType = (apiKey) => {
    // Logic has been so that only 1 error is displayed at a time to avoid confusion
    if (apiKey === 'YourAPIKeyHere') {
      setApiKeyError(true)
      setCorsError(false)
    } else {
      setApiKeyError(false)
      setCorsError(true)
    }
  }

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses} />
      <CorsError corsError={corsError} />
      <ApiKeyError apiKeyError={apiKeyError} />
    </div>
  );
}

export default App;
