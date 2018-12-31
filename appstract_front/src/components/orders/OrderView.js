import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../SiteHeader';

const OrderView = () => {
  return (
    <Fragment>
      <SiteHeader title={'Order Details'} subtitle="order id: 111254455847" />
      <div className="columns">
        <div className="column">
          <header className="order-details__header">
            <h2 className="title">Order details</h2>
          </header>
          order id: {'111254455847'}
          <br />
          client id: {'111254455847'}
          <br />
          total amount: {199}PLN
        </div>
        <div className="column">
          <header className="order-details__header">
            <h2 className="title">Buyer details</h2>
            <span className="mb-1">Name: {'Marcin'}</span>
            <br />
            <span className="mb-1">Surname: {'Marciniszyn'}</span>
            <br />
            <Link to="/clients/:id" className="button is-warning">
              View full user profile
            </Link>
          </header>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderView;
