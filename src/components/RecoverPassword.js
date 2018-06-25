import React from 'react';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/logo.png';

const recoverPassword = (props) => {
    return (
        <div className="container">
            <form className="form-signin spacer" onSubmit={props.submit}>
                <img className="mx-auto d-block mb-4" src={Logo} alt="logo" width="300" />
                <h3 className="text-center text-secondary mb-3 font-weight-normal"><FormattedMessage id="recover-password" /></h3>
                <p className="text-center"><FormattedMessage id="recover-password-help" /></p>
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control mb-3" style={{ padding: "10px" }} placeholder="Email" onChange={props.emailChange} required />
                <button className="btn btn-lg btn-primary btn-block mt-4 text-white" type="submit"><FormattedMessage id="recover-button" /></button>
            </form>
        </div>
    )
}

export default recoverPassword;