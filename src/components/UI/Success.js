import React from 'react';

const success = (props) => {
    return (
        <div className="alert alert-success text-center" role="alert">
            {props.text}
        </div>
    )
}

export default success;