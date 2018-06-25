import React from 'react';
import { FormattedMessage } from 'react-intl';

const profile = (props) => {
    const pwStyle = 'form-control ' + props.validPassClass;
    const confirmPwStyle = 'form-control ' + props.validConfirmClass + ' mt-3';

    let button = <button type="submit" className="btn btn-primary text-white"><FormattedMessage id="change-password" /></button>
    if (props.disabled) {
        button = <button type="submit" className="btn btn-primary text-white" disabled><FormattedMessage id="change-password" /></button>
    };

    let modalButton = <button type="button" className="btn btn-danger text-white" onClick={props.deleteAccount} data-dismiss="modal"><FormattedMessage id="delete-account" /></button>
    if (props.deleteDisabled) {
        modalButton = <button type="button" className="btn btn-danger text-white" disabled onClick={props.deleteAccount}><FormattedMessage id="delete-account" /></button>
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-1-list" data-toggle="list" href="#list-1" role="tab" aria-controls="1"><FormattedMessage id="profile" /></a>
                        <a className="list-group-item list-group-item-action" id="list-2-list" data-toggle="list" href="#list-2" role="tab" aria-controls="2"><FormattedMessage id="account" /></a>
                    </div>
                </div>
                <div className="col-lg-9" style={{ margin: "auto" }}>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-1" role="tabpanel" aria-labelledby="list-1-list">
                            <h4 className="text-secondary mt-3"><FormattedMessage id="profile" /></h4>
                            <hr></hr>
                            <form className="mt-2" onSubmit={props.profileSubmit}>
                                <div className="form-group">
                                    <label htmlFor="first_name"><b><FormattedMessage id="first-name" /></b></label>
                                    <input type="text" className="form-control" id="first_name" value={props.first_name ? props.first_name : ""} onChange={props.firstNameChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name"><b><FormattedMessage id="last-name" /></b></label>
                                    <input type="text" className="form-control" id="last_name" value={props.last_name ? props.last_name : ""} onChange={props.lastNameChange} />
                                </div>
                                <button type="submit" className="btn btn-primary text-white"><FormattedMessage id="update-profile" /></button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="list-2" role="tabpanel" aria-labelledby="list-2-list">
                            <h4 className="text-secondary mt-3"><FormattedMessage id="change-password" /></h4>
                            <hr></hr>
                            <form className="mt-2" onSubmit={props.passwordSubmit}>
                                <div className="form-group">
                                    <label htmlFor="oldpassword"><b><FormattedMessage id="current-password" /></b></label>
                                    <input type="password" className="form-control" id="oldpassword" onChange={props.oldPasswordChange} value={props.oldPwValue} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newpassword"><b><FormattedMessage id="new-password" /></b></label>
                                    <input type="password" className={pwStyle} id="newpassword" onChange={props.newPasswordChange} value={props.pwValue} />
                                    <div className="invalid-feedback"><FormattedMessage id="pw-error" /></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmnewpw"><b><FormattedMessage id="confirm-new-password" /></b></label>
                                    <input type="password" className={confirmPwStyle} id="confirmnewpw" onChange={props.confirmNewPasswordChange} value={props.confirmPwValue} />
                                    <div className="invalid-feedback"><FormattedMessage id="confirm-pw-error" /></div>
                                </div>
                                {button}
                            </form>
                            <h4 className="text-danger mt-5"><FormattedMessage id="delete-account" /></h4>
                            <hr></hr>
                            <p><FormattedMessage id="delete-account-warning" /></p>
                            <button type="submit" className="btn btn-danger text-white" data-toggle="modal" data-target="#exampleModalCenter"><FormattedMessage id="delete-account" /></button>
                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle"><FormattedMessage id="delete-account" /></h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p><FormattedMessage id="delete-account-1" /></p>
                                            <p><FormattedMessage id="delete-account-2" /></p>
                                            <p><FormattedMessage id="delete-account-3" /></p>
                                            <div className="form-group">
                                                <label htmlFor="password"><b>Password</b></label>
                                                <input type="password" className="form-control" id="password" onChange={props.deletePasswordChange} />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn" data-dismiss="modal"><FormattedMessage id="cancel" /></button>
                                            {modalButton}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profile;