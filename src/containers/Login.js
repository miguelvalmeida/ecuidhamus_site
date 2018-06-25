import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../components/Login';
import Aux from '../hoc/auxi';
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';
import Alert from '../components/UI/Alert';

class LoginPage extends Component {
    state = {
        emailValue: '',
        passwordValue: ''
    };

    componentWillUnmount() {
        this.props.removeMessage()
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onLogin(this.state.emailValue, this.state.passwordValue);
    };

    onEmailChangeHandler = (event) => {
        this.setState({ emailValue: event.target.value });
    };

    onPassChangeHandler = (event) => {
        this.setState({ passwordValue: event.target.value });
    };

    render() {
        let form = (
            <Login
                submit={this.submitHandler}
                emailChange={this.onEmailChangeHandler}
                passChange={this.onPassChangeHandler}
            />
        )

        if (this.props.loading) {
            form = <Spinner />
        };

        let message = null;
        if (this.props.message) {
            message = <Alert text={this.props.message} />
        }

        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to="/" />
        }

        return (
            <Aux>
                {authRedirect}
                <div className="text-center">
                    {message}
                </div>
                {form}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        message: state.login.message,
        isAuth: state.login.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, password) => dispatch(actions.login(email, password)),
        removeMessage: () => dispatch(actions.loginRemoveMsg())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);