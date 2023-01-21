import React from 'react';
import './CorsError.css'

// If the API response is bad because the user has not enabled access to the CORS Anywhere demo server, user will be prompted to visit the link 

const CorsError = (props) => {
    if (props.corsError) {
        return (
            <div className="CorsErrorSection">
                <div className="CorsErrorText">
                    <h2>Oops!</h2>
                    <p>It looks like you have an issue with CORS restrictions.</p>
                    <p>Please click the button to visit <span>https://cors-anywhere.herokuapp.com/corsdemo</span></p>
                    <br />
                </div>
                <div className="CorsErrorButton">
                    <a 
                        href="https://cors-anywhere.herokuapp.com/corsdemo"
                        target="_blank"
                        rel="noreferrer">
                        Help me Heroku!
                    </a>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default CorsError;