import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Layout from './hoc/Layout';
import Homepage from './components/Homepage';
import Login from './containers/Login';
import Register from './containers/Register';
import Terms from './components/Terms';
import Logout from './containers/Logout';
import RegisterCode from './containers/codes/RegisterCode';
import ViewCodes from './containers/codes/Codes';
import CodeInfo from './containers/codes/CodeInfo';
import CodeEdit from './containers/codes/CodeEdit';
import RecoverPassword from './containers/RecoverPw';
import Indicators from './components/Indicators';
import PersonalIndicators from './components/Pers_Indicators';
import DirectorIndicators from './components/Director_Indicators';
import Profile from './containers/Profile';
import * as actions from './store/actions/index';
import language_pt from './languages/language_pt';
import language_en from './languages/language_en';

function Fragment(props) {
  return props.children || <span {...props} /> || null;
}

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  };

  render() {
    let routes = null;
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/codes/:code" component={CodeInfo} />
          <Route path="/terms" component={Terms} />
          <Route path="/registercode" component={RegisterCode} />
          <Route path="/codes" component={ViewCodes} />
          <Route path="/edit/:code" component={CodeEdit} />
          <Route path="/indicators" component={Indicators} />
          <Route path="/personal_indicators" component={PersonalIndicators} />
          {this.props.isDirector ? <Route path="/director_indicators" component={DirectorIndicators} /> : null}
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
      )
    } else {
      routes = (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/indicators" component={Indicators} />
          <Route path="/register" component={Register} />
          <Route path="/terms" component={Terms} />
          <Route path="/recover" component={RecoverPassword} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
      );
    };

    let dir = null;
    if (this.props.language === 'en') {
      dir = language_en['en']
    };
    if (this.props.language === 'pt') {
      dir = language_pt['pt']
    };

    return (
      <IntlProvider locale={this.props.language} messages={dir} textComponent={Fragment}>
        <div className="App">
          <Layout>
            {routes}
          </Layout>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.login.token !== null,
    isDirector: state.login.department !== null,
    language: state.language.lang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.loginCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
