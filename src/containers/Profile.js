import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Profile from '../components/Profile';
import axios from '../axios';
import Aux from '../hoc/auxi';
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';
import Alert from '../components/UI/Alert';
import Success from '../components/UI/Success';

class ProfilePage extends Component {
    state = {
        firstNameValue: '',
        lastNameValue: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        validPassClass: null,
        equalPasswords: false,
        equalPasswordsClass: null,
        validPassword: false,
        deletePassword: ''
    };

    componentWillUnmount() {
        this.props.updateProfileRemoveMessage();
        this.props.updatePasswordRemoveMessage();
        this.props.deleteAccountRemoveMessage();
    };

    componentDidMount() {
        const token = 'Bearer ' + localStorage.getItem('token');
        axios.get('user/profile/', { headers: { "Authorization": token } })
            .then(response => {
                this.setState({ firstNameValue: response.data.user.first_name })
                this.setState({ lastNameValue: response.data.user.last_name })
            })
            .catch(err => {
                console.log(err);
            })
    };

    onFirstNameChangeHandler = (event) => {
        this.setState({ firstNameValue: event.target.value });
    };

    onLastNameChangeHandler = (event) => {
        this.setState({ lastNameValue: event.target.value });
    };

    updateProfileSubmitHandler = (event) => {
        event.preventDefault();
        this.props.updateProfile(this.state.firstNameValue, this.state.lastNameValue)
    };

    oldPasswordChangeHandler = (event) => {
        this.setState({ oldPassword: event.target.value });
    };

    newPasswordChangeHandler = (event) => {
        const pwValue = event.target.value
        this.setState({ newPassword: pwValue });
        if (pwValue.length < 6) {
            this.setState({ validPassword: false, validPassClass: 'is-invalid' });
        } else {
            this.setState({ validPassword: true, validPassClass: 'is-valid' });
        }
        if (this.state.confirmPassword !== pwValue) {
            this.setState({ equalPasswords: false, equalPasswordsClass: 'is-invalid' });
        } else {
            this.setState({ equalPasswords: true, equalPasswordsClass: 'is-valid' });
        }
    };

    confirmNewPasswordChangeHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
        if (this.state.newPassword !== event.target.value) {
            this.setState({ equalPasswords: false, equalPasswordsClass: 'is-invalid' });
        } else {
            this.setState({ equalPasswords: true, equalPasswordsClass: 'is-valid' });
        }
    };

    passwordSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ validPassClass: null, equalPasswordsClass: null, oldPassword: '', newPassword: '', confirmPassword: '' });
        this.props.updatePassword(this.state.oldPassword, this.state.newPassword);
    };

    deletePasswordChangeHandler = (event) => {
        this.setState({ deletePassword: event.target.value });
    };

    deleteAccountHandler = (event) => {
        this.props.deleteAccount(this.state.deletePassword);
    };

    render() {
        let isDisabled = true;
        if (this.state.validPassword && this.state.equalPasswords && this.state.oldPassword !== '') {
            isDisabled = false
        };

        let deleteDisable = true;
        if (this.state.deletePassword !== '') {
            deleteDisable = false
        };

        let profile = (
            <Profile
                first_name={this.state.firstNameValue}
                firstNameChange={this.onFirstNameChangeHandler}
                last_name={this.state.lastNameValue}
                lastNameChange={this.onLastNameChangeHandler}
                profileSubmit={this.updateProfileSubmitHandler}
                oldPasswordChange={this.oldPasswordChangeHandler}
                newPasswordChange={this.newPasswordChangeHandler}
                confirmNewPasswordChange={this.confirmNewPasswordChangeHandler}
                passwordSubmit={this.passwordSubmitHandler}
                validPassClass={this.state.validPassClass}
                validConfirmClass={this.state.equalPasswordsClass}
                disabled={isDisabled}
                pwValue={this.state.newPassword}
                oldPwValue={this.state.oldPassword}
                confirmPwValue={this.state.confirmPassword}
                deletePasswordChange={this.deletePasswordChangeHandler}
                deleteAccount={this.deleteAccountHandler}
                deleteDisabled={deleteDisable}
            />
        )

        if (this.props.loadingProfile) {
            profile = <Spinner />
        };

        if (this.props.loadingPassword) {
            profile = <Spinner />
        };

        let messageProfile = null;
        if (this.props.statusProfile === 0) {
            messageProfile = <Alert text={this.props.messageProfile} />
        };
        if (this.props.statusProfile === 1) {
            messageProfile = <Success text={this.props.messageProfile} />
        };

        if (this.props.statusPassword === 0) {
            messageProfile = <Alert text={this.props.messagePassword} />
        };
        if (this.props.statusPassword === 1) {
            messageProfile = <Success text={this.props.messagePassword} />
        };

        if (this.props.statusDelete === 0) {
            messageProfile = <Alert text={this.props.messageDelete} />
        };

        let redirect = null;
        if (this.props.statusDelete === 1) {
            redirect = <Redirect to="/logout" />
        };

        return (
            <Aux>
                <div className="text-center">
                    {messageProfile}
                </div>
                {profile}
                {redirect}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        loadingProfile: state.profile.loadingProfile,
        statusProfile: state.profile.statusProfile,
        messageProfile: state.profile.messageProfile,
        loadingPassword: state.profile.loadingPassword,
        statusPassword: state.profile.statusPassword,
        messagePassword: state.profile.messagePassword,
        loadingDelete: state.profile.loadingDelete,
        statusDelete: state.profile.statusDelete,
        messageDelete: state.profile.messageDelete
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (firstname, lastname) => dispatch(actions.updateProfile(firstname, lastname)),
        updateProfileRemoveMessage: () => dispatch(actions.updateProfileRemoveMessage()),
        updatePassword: (oldpassword, newpassword) => dispatch(actions.updatePassword(oldpassword, newpassword)),
        updatePasswordRemoveMessage: () => dispatch(actions.updatePasswordRemoveMessage()),
        deleteAccount: (password) => dispatch(actions.deleteAccount(password)),
        deleteAccountRemoveMessage: () => dispatch(actions.deleteAccountRemoveMessage()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);