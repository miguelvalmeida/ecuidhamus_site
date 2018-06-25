import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as actions from '../../store/actions/index';
import CodeList from '../../components/CodeList';
import NoCode from '../../components/NoCode';
import Aux from '../../hoc/auxi';
import Success from '../../components/UI/Success';
import Spinner from '../../components/UI/Spinner';

class ViewCodes extends Component {
    
    componentWillUnmount() {
        this.props.removeDeleteMessage();
        this.props.removeInsertMessage()
    };

    componentDidMount() {
        this.props.fetchCodes();
    };

    render() {
        let page = null;
        let msg = null;
        if (this.props.status === 0) {
            page = <NoCode />;
            msg = <h3 className="text-center text-secondary mb-3"><FormattedMessage id="nocode-title" /></h3>;
        };
        
        if (this.props.status === 1) {
            page = this.props.codes.map(code => {
                return (
                    <CodeList code={code.code} date={code.consultation_date} codeUrl={code.code} key={code.code} completed={code.completed} />
                )
            });
            msg = <h3 className="text-center text-secondary mb-5"><FormattedMessage id="consult-code-title" /></h3>;
        };

        let deleteMessage = null;
        if (this.props.deleteStatus === 1) {
            deleteMessage = <Success text={this.props.deleteMessage} />
        };

        if (this.props.loading) {
            page = <Spinner />
        };

        let insertMessage = null;
        if (this.props.insertStatus === 1) {
            insertMessage = <Success text={this.props.insertMessage} />
        };

        return (
            <Aux>
                <div className="text-center">
                    {deleteMessage}
                    {insertMessage}
                </div>
                <div className="container mt-5">
                    {msg}
                </div>
                <div className="mt-5">
                    {page}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.fetchCodes.loading,
        message: state.fetchCodes.message,
        codes: state.fetchCodes.codes,
        status: state.fetchCodes.status,
        deleteStatus: state.deleteCode.status,
        deleteMessage: state.deleteCode.message,
        insertStatus: state.insertCode.status,
        insertMessage: state.insertCode.message,
        nullNumbers: state.fetchCodeData.nullNumbers,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCodes: () => dispatch(actions.fetchCodes()),
        fetchNullNumber: (code) => dispatch(actions.fetchNullNumbers(code)),
        removeDeleteMessage: () => dispatch(actions.deleteCodeMsgRemove()),
        removeInsertMessage: () => dispatch(actions.insertCodeRemoveMsg())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewCodes);