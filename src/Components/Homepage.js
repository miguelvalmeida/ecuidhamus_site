import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

import Auxiliar from '../assets/auxiliar.png';
import Apoiar from '../assets/apoiar.png';
import Contribuir from '../assets/contribuir.png';
import Aux from '../hoc/auxi';
import Footer from '../components/Footer';
import * as actions from '../store/actions/index';

class homepage extends Component {
    componentDidMount() {
        this.props.fetchFormsNumber();
        this.props.fetchRegisteredForms();
    };

    render() {
        let participate = (
            <div className="container text-center">
                <h1 className="text-center text-secondary mt-5 font-weight-bold"><FormattedMessage id="participate" /></h1>
                <div style={{ display: "inline" }}>
                    <Link to="/login">
                        <button className="btn btn-lg btn-primary mt-4 text-white ml-5 mr-5" style={{ width: "200px" }} type="submit"><FormattedMessage id="login" /></button>
                    </Link>
                </div>
                <div style={{ display: "inline" }}>
                    <Link to="/register">
                        <button className="btn btn-lg btn-primary mt-4 text-white ml-5 mr-5" style={{ width: "200px" }} type="submit"><FormattedMessage id="register-button" /></button>
                    </Link>
                </div>
            </div>
        );

        if (this.props.isAuth) {
            participate = null;
        };


        return (
            <Aux>
                {/* <img src={Header} style={{ width: "100%", position:"relative" }} alt="header" /> */}
                <div className="container mt-5">
                    <h1 className="text-primary font-weight-normal"><FormattedMessage id="welcome-title" /></h1>
                    <hr></hr>
                    <p className="mt-3" ><FormattedMessage id="welcome-first-paragraph" /></p>
                    <p><FormattedMessage id="welcome-second-paragraph" /></p>
                    <ul>
                        <li><FormattedMessage id="welcome-li-one" /></li>
                        <li><FormattedMessage id="welcome-li-two" /></li>
                        <li><FormattedMessage id="welcome-li-three" /></li>
                        <li><FormattedMessage id="welcome-li-four" /></li>
                    </ul>
                </div>
                {participate}
                <div className="container mt-5 text-center">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-secondary"><FormattedMessage id="completed-questionnaires" /></h4>
                            <CountUp start={0} end={this.props.forms_number} duration={3} className="lead font-italic" />
                        </div>
                        <div className="col-lg-6">
                            <h4 className="text-secondary"><FormattedMessage id="registered-questionnaires" /></h4>
                            <CountUp start={0} end={this.props.registered_forms} duration={3} className="lead font-italic" />
                        </div>
                    </div>
                </div>
                <div className="container mt-5 text-center">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={Apoiar} alt="apoiar" width="170" />
                            <h4 className="text-primary mt-3"><FormattedMessage id="support-title" /></h4>
                            <p><FormattedMessage id="support-text" /></p>
                        </div>
                        <div className="col-lg-4">
                            <img src={Contribuir} alt="contribuir" width="170" />
                            <h4 className="text-primary mt-3"><FormattedMessage id="contribute-title" /></h4>
                            <p><FormattedMessage id="contribute-text" /></p>
                        </div>
                        <div className="col-lg-4">
                            <img src={Auxiliar} alt="auxiliar" width="170" />
                            <h4 className="text-primary mt-3"><FormattedMessage id="assist-title" /></h4>
                            <p><FormattedMessage id="assist-text" /></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </Aux >
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.login.token !== null,
        forms_number: state.general_indicators.forms_number,
        registered_forms: state.general_indicators.registered_forms,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFormsNumber: () => dispatch(actions.fetchFormsNumber()),
        fetchRegisteredForms: () => dispatch(actions.fetchRegisteredFormsNumber()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(homepage);