import React, { Component } from 'react';
import { connect } from 'react-redux';

import Register from '../components/Register'
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';
import Aux from '../hoc/auxi';
import Alert from '../components/UI/Alert';
import Success from '../components/UI/Success';

class RegisterPage extends Component {
    state = {
        emailValue: '',
        passwordValue: '',
        confirmPasswordValue: '',
        validEmail: false,
        validPassword: false,
        validEmailClass: null,
        validPassClass: null,
        equalPasswords: false,
        equalPasswordsClass: null,
        checked: false
    };

    componentWillUnmount() {
        this.props.removeMessage()
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onRegister(this.state.emailValue, this.state.passwordValue);
        this.setState({ validPassClass: null, validEmailClass: null, equalPasswordsClass: null, checked: false });
    };

    onEmailChangeHandler = (event) => {
        this.setState({ emailValue: event.target.value });
        const re = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(ua)\.pt$/
        if (re.test(event.target.value)) {
            this.setState({ validEmail: true, validEmailClass: 'is-valid' });
        } else {
            this.setState({ validEmail: false, validEmailClass: 'is-invalid' });
        }
    };

    onPassChangeHandler = (event) => {
        const pwValue = event.target.value
        this.setState({ passwordValue: pwValue });
        if (pwValue.length < 6) {
            this.setState({ validPassword: false, validPassClass: 'is-invalid' });
        } else {
            this.setState({ validPassword: true, validPassClass: 'is-valid' });
        }
        if (this.state.confirmPasswordValue !== pwValue) {
            this.setState({ equalPasswords: false, equalPasswordsClass: 'is-invalid' });
        } else {
            this.setState({ equalPasswords: true, equalPasswordsClass: 'is-valid' });
        }
    };

    onPassConfirmChangeHandler = (event) => {
        this.setState({ confirmPasswordValue: event.target.value });
        if (this.state.passwordValue !== event.target.value) {
            this.setState({ equalPasswords: false, equalPasswordsClass: 'is-invalid' });
        } else {
            this.setState({ equalPasswords: true, equalPasswordsClass: 'is-valid' });
        }
    };

    onTermsChangeHandler = (event) => {
        this.setState({ checked: !this.state.checked });
    };

    render() {
        let isDisabled = true;
        if (this.state.validEmail && this.state.validPassword && this.state.equalPasswords && this.state.checked) {
            isDisabled = false
        };

        let register = (
            <Register
                submit={this.submitHandler}
                emailChange={this.onEmailChangeHandler}
                passChange={this.onPassChangeHandler}
                passConfirmChange={this.onPassConfirmChangeHandler}
                isChecked={this.onTermsChangeHandler}
                validPassClass={this.state.validPassClass}
                validEmailClass={this.state.validEmailClass}
                validConfirmClass={this.state.equalPasswordsClass}
                disabled={isDisabled}
            />
        )

        if (this.props.loading) {
            register = <Spinner />
        };

        let message = null;
        if (this.props.status === 0) {
            message = <Alert text={this.props.message} />
        };
        if (this.props.status === 1) {
            message = <Success text={this.props.message} />
        };

        return (
            <Aux>
                <div className="text-center">
                    {message}
                </div>
                {register}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.register.loading,
        message: state.register.message,
        status: state.register.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegister: (email, password) => dispatch(actions.register(email, password)),
        removeMessage: () => dispatch(actions.registerRemoveMsg())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);