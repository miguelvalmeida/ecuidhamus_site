import React from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/logo.png';

const registerCode = (props) => {
    return (
        <div className="container">
            <form className="form-signin spacer" onSubmit={props.submit}>
                <img className="mx-auto d-block mb-4" src={Logo} alt="logo" width="300" />
                <h3 className="text-center text-secondary mb-3"><FormattedMessage id="insert-code-title" /></h3>
                <label htmlFor="inputCode" className="sr-only">e.código</label>
                <input type="text" id="inputCode" className="form-control mb-3 mt-4" style={{ padding: "10px" }} placeholder="e.código" onChange={props.codeChange} required />
                <button className="btn btn-lg btn-primary btn-block mt-4 text-white" type="submit"><FormattedMessage id="insert-code-btn" /></button>
            </form>
        </div>
    )
}

export default registerCode;