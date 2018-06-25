import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const noCode = () => {
    return (
        <div className="container" style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}>
            <Link to="/registercode" className="no-decoration">
                <button className="btn btn-lg btn-primary btn-block text-white text-center"><FormattedMessage id="nocode-btn" /></button>
            </Link>
        </div>
    )
}

export default noCode;