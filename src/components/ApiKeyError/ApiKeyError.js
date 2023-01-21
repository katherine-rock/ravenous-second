import React from 'react';
import './ApiKeyError.css'

// If the API response is bad because the user has not updated the Yelp.js file with their API key, user will be prompted with instructions and link to generate the key

const ApiKeyError = (props) => {
    if (props.apiKeyError) {
        return (
            <div className="ApiKeyErrorSection">
                <div className="ApiKeyErrorText">
                    <h2>Oops!</h2>
                    <p>It looks like you have not added your API Key to the source code.</p>
                    <p>If you need to create a new API Key, please visit <span>https://www.yelp.com/developers/v3/manage_app</span></p>
                    <p>You will need to add your API Key in the Yelp.js file in src/util</p>
                    <br />
                </div>
                <div className="ApiKeyErrorButton">
                    <a 
                        href="https://www.yelp.com/developers/v3/manage_app"
                        target="_blank"
                        rel="noreferrer">
                        Let's get that key!
                    </a>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default ApiKeyError;