import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink to="/orders" className="navbar-item" activeClassName="is-active">
            Orders
          </NavLink>
          <NavLink to="/clients" className="navbar-item" activeClassName="is-active">
            Clients
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
