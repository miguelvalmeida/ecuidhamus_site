import React from 'react';

const alert = (props) => {
    return (
        <div className="alert alert-danger text-center" role="alert">
            {props.text}
        </div>
    )
}

export default alert;