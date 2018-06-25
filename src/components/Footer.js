import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as actions from '../store/actions/index';
import Footer from '../assets/footer.png';
import Aux from '../hoc/auxi';

class footer extends Component {
    render() {
        let activeClassPt = "text-primary"
        if (this.props.language === "pt") {
            activeClassPt = "text-secondary"
        } else {
            activeClassPt = "text-primary"
        };
        
        let activeClassEn = "text-primary"
        if (this.props.language === "en") {
            activeClassEn = "text-secondary"
        } else {
            activeClassEn = "text-primary"
        };

        return (
            <Aux>
                <footer className="footer mt-5" style={{position: "relative"}}>
                    <div style={{position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <div className="container fluid">
                        <span className="text-muted"><FormattedMessage id="copyright-text" /></span>
                    </div>
                    <div className="container fluid mt-3">
                        <b><a href="/#" className={activeClassPt} role="button" onClick={() => this.props.setLanguage('pt')}>PT</a></b> | <b><a href="/#"  className={activeClassEn} onClick={() => this.props.setLanguage('en')}>EN</a></b>
                    </div>
                    </div>
                    <img src={Footer} style={{ width: "100%"}} alt="footer" />
                </footer>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
      language: state.language.lang
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        setLanguage: (lang) => dispatch(actions.language(lang))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(footer);