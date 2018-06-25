import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Aux from './auxi';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navbar isAuth={this.props.isAuthenticated} isDirector={this.props.isDirector} />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.login.token !== null,
        isDirector: state.login.department !== null
    };
};

export default connect(mapStateToProps, null)(Layout);