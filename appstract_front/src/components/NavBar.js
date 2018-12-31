import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-light.png';

const NavBar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="" className="navbar-item">
          <img src={logo} alt="app logo" className="navbar-logo" />
        </Link>

        <span
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start" />

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="login" className="button is-primary">
                <strong>Log In</strong>
              </Link>
              <Link to="signup" className="button is-light">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
