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
      // The following runs if there are any problems, which there are - if apiKey has an error, then the API call will not be valid and therefore there will be an error. Can I mix this up and do .catch first 
      // No - I need to use catch to run a function that checks the error type
      .catch(checkForErrorType(apiKey))
  }

  const checkForErrorType = (apiKey) => {
    console.log('The checkForErrorType function has run')
    if (apiKey === 'YourAPIKeyHere') {
      setApiKeyError(true)
      console.log('TRUE for ApiKeyError')
      console.log('Value of apiKey: ')
      console.log(apiKey)
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
      {/* <ApiKeyError apiKeyError={apiKeyError}/> */}
      <ApiKeyError apiKeyError={apiKeyError} />
    </div>
  );
}

export default App;
