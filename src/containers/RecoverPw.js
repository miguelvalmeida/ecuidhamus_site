import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';
import RecoverPage from '../components/RecoverPassword';
import Spinner from '../components/UI/Spinner';
import Alert from '../components/UI/Alert';
import Success from '../components/UI/Success';
import Aux from '../hoc/auxi';

class RecoverPassword extends Component {
    state = {
        emailValue: ''
    };

    componentWillUnmount() {
        this.props.removeMessage()
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.recoverPw(this.state.emailValue)
    };

    onEmailChangeHandler = (event) => {
        this.setState({ emailValue: event.target.value });
    };

    render() {
        let recover = (
            <RecoverPage
                submit={this.submitHandler}
                emailChange={this.onEmailChangeHandler}
            />
        )

        if (this.props.loading) {
            recover = <Spinner />
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
                {recover}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.recover.loading,
        message: state.recover.message,
        codes: state.recover.codes,
        status: state.recover.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        recoverPw: (email) => dispatch(actions.recoverPassword(email)),
        removeMessage: () => dispatch(actions.recoverPwMessage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);