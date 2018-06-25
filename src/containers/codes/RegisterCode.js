import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import CodeForm from '../../components/RegisterCode';
import Aux from '../../hoc/auxi';
import Spinner from '../../components/UI/Spinner';
import Alert from '../../components/UI/Alert';

class RegisterCode extends Component {
    state = {
        codeValue: ''
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onInsertCode(this.state.codeValue);
    };

    onCodeChangeHandler = (event) => {
        this.setState({ codeValue: event.target.value });
    };

    render() {
        let formCode = (
            <CodeForm
                submit={this.onSubmitHandler}
                codeChange={this.onCodeChangeHandler}
            />
        );

        if (this.props.loading) {
            formCode = <Spinner />
        }

        let message = null;
        if (this.props.status === 0) {
            message = <Alert text={this.props.message} />
        };

        let redirect = null;
        if (this.props.status === 1) {
            redirect = <Redirect to="/codes" />
        };

        return (
            <Aux>
                <div className="text-center">
                    {message}
                </div>
                {formCode}
                {redirect}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.insertCode.loading,
        status: state.insertCode.status,
        message: state.insertCode.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInsertCode: (code) => dispatch(actions.insertCode(code)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCode);