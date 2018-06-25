import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Logo from '../assets/nav_logo.png';

const navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to={'/'} className="no-decoration">
          <span className="navbar-brand"><img src={Logo} className="d-inline-block align-top" alt="logo" width="110" /></span>
        </NavLink>
        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              {props.isAuth
                ? <NavLink to={'/registercode'} className="no-decoration"><span className="nav-link"><FormattedMessage id="register-code" /></span></NavLink>
                : null
              }
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              {props.isAuth
                ? <NavLink to={'/codes'} className="no-decoration"><span className="nav-link"><FormattedMessage id="see-code" /></span></NavLink>
                : null
              }
            </li>
            {props.isAuth
              ?
              <li className="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FormattedMessage id="indicators" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to={'/indicators'} className="no-decoration"><span className="dropdown-item"><FormattedMessage id="geral-indicators" /></span></NavLink>
                  <NavLink to={'/personal_indicators'} className="no-decoration"><span className="dropdown-item"><FormattedMessage id="personal_indicators" /></span></NavLink>
                  {props.isDirector ? <NavLink to={'/director_indicators'} className="no-decoration"><span className="dropdown-item"><FormattedMessage id="department-indicators" /></span></NavLink> : null}
                </div>
              </li>
              :
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/indicators'} className="no-decoration"><span className="nav-link"><FormattedMessage id="geral-indicators" /></span></NavLink>
              </li>
            }

            {!props.isAuth
              ?
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to={'/login'} className="no-decoration"><span className="nav-link"><FormattedMessage id="login" /></span></NavLink>
              </li>
              :
              <li className="nav-item dropdown" data-toggle="collapse" data-target=".navbar-collapse.show">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FormattedMessage id="personal-area" />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to={'/profile'} className="no-decoration"><span className="dropdown-item"><FormattedMessage id="profile" /></span></NavLink>
                  <NavLink to={'/logout'} className="no-decoration"><span className="dropdown-item">Logout</span></NavLink>
                </div>
              </li>
            }
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              {!props.isAuth
                ? <NavLink to={'/register'} className="no-decoration"><span className="nav-link"><FormattedMessage id="register" /></span></NavLink>
                : null
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar;