import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/logo.png';

const login = (props) => {
    return (
        <div className="container">
            <form className="form-signin spacer" onSubmit={props.submit}>
                <img className="mx-auto d-block mb-4" src={Logo} alt="logo" width="300" />
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control mb-3" style={{ padding: "10px" }} placeholder="Email" onChange={props.emailChange} required />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" style={{ padding: "10px" }} placeholder="Password" onChange={props.passChange} required />
                <small id="passwordRecover" className="form-text text-muted"><Link to="/recover" className="no-decoration"><span><FormattedMessage id="forgot-password" /></span></Link></small>
                <button className="btn btn-lg btn-primary btn-block mt-4 text-white" type="submit"><FormattedMessage id="login-button" /></button>
                <p className="mt-3 text-center"><FormattedMessage id="login-register-message" /> <Link to="/register" className="no-decoration"><span><FormattedMessage id="login-register-message-link" /></span></Link></p>
            </form>
        </div>
    )
}

export default login;