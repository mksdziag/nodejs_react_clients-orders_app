import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';

const Home = () => {
  return (
    <Fragment>
      <SiteHeader title="Appstract Recruitment App" />
      <div className="tile is-ancestor home-tiles">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <Link to="/orders" className="tile is-child notification is-primary">
                <p className="title">Orders</p>
                <p className="subtitle">Check out and manage all orders</p>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link to="orders/add-new" className="tile is-child notification is-danger">
                <p className="title">Add New Order</p>
                <p className="subtitle">manage new orders</p>
                <div className="content" />
              </Link>
            </div>
          </div>
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <Link to="clients" className="tile is-child notification is-dark">
                <p className="title">Clients</p>
                <p className="subtitle">Check out and manage all clients</p>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link to="clients/add-new" className="tile is-child notification is-warning">
                <p className="title">Add New Client</p>
                <p className="subtitle">manage new clients</p>
                <div className="content" />
              </Link>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <Link to="clients-orders" className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Grouped orders </p>
              <p className="subtitle">by the client</p>
              <div className="content" />
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
