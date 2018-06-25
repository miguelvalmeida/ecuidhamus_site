import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/logo.png';

const register = (props) => {
    const pwStyle = 'form-control ' + props.validPassClass;
    const confirmPwStyle = 'form-control ' + props.validConfirmClass + ' mt-3';
    const emailStyle = 'form-control ' + props.validEmailClass;

    let button = <button className="btn btn-lg btn-primary btn-block mt-4 text-white" type="submit"><FormattedMessage id="register-button" /></button>
    if (props.disabled) {
        button = <button className="btn btn-lg btn-primary btn-block mt-4 text-white" type="submit" disabled><FormattedMessage id="register-button" /></button>
    }

    return (
        <div className="container">
            <form className="form-signin spacer" onSubmit={props.submit}>
                <img className="mx-auto d-block mb-4" src={Logo} alt="logo" width="300" />
                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" className={emailStyle} style={{ padding: "10px" }} placeholder="Email*" onChange={props.emailChange} aria-describedby="emailHelpBlock" required />
                    <small id="emailHelpBlock" className="form-text text-muted mb-3"><FormattedMessage id="ua-email-only" /></small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className={pwStyle} style={{ padding: "10px" }} placeholder="Password" onChange={props.passChange} required />
                    <div className="invalid-feedback"><FormattedMessage id="pw-error" /></div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputConfirmPassword" className="sr-only">Confirmar Password</label>
                    <input type="password" id="inputConfirmPassword" className={confirmPwStyle} style={{ padding: "10px" }} placeholder="Confirmar Password" onChange={props.passConfirmChange} required />
                    <div className="invalid-feedback"><FormattedMessage id="confirm-pw-error" /></div>
                </div>
                <label className="float-left mb-3">
                    <input type="checkbox" value="accept-terms" onChange={props.isChecked} /> <FormattedMessage id="accept-terms" /> <Link to="/terms" className="no-decoration" target="_blank"><span><FormattedMessage id="accept-terms-link" /></span></Link>
                </label>
                {button}
            </form>
        </div>
    )
}

export default register;