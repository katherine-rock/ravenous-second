import React from 'react';

// Test of creating a new components

const ErrorsAll = (props) => {
    if (props.errorIdentified) {
        console.log(props.errorIdentified)
        return (
            <div>
                <p>Your error code is {props.errorIdentified}</p>
            </div>
        )
    } else {
        return null
    }

}

export default ErrorsAll;