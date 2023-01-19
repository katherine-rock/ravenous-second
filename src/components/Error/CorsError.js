import React from 'react';
import './CorsError.css'

function CorsError(props) {
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

}

export default CorsError;

//   <h1>Hello, {props.name}</h1>;