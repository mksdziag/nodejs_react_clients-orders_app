import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../utils/SiteHeader';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';
import Columns from '../utils/Columns';
import Column from '../utils/Column';
import { endpoints } from '../../config/restApi.json';

class OrderView extends React.Component {
  state = {
    order: {},
    isLoading: true,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await http.get(`${endpoints.orders}/${id}`);
    const order = response.data;

    this.setState({ order, isLoading: false });
  }

  render() {
    const { id } = this.props.match.params;
    const { order, isLoading } = this.state;

    const orderDetails = (
      <div>
        <p>Order id: {id}</p>
        <p>Order amount: {order.amount && order.amount} $</p>
      </div>
    );
    const buyerDetails = (
      <Columns>
        <Column>
          <p className="mb-1">Name: {order.clientId && order.clientId.name}</p>
          <br />
          <p className="mb-1">Surname: {order.clientId && order.clientId.surname}</p>
        </Column>
        <Column>
          <Link
            to={`/clients/${order.clientId && order.clientId._id}`}
            className="button is-warning"
          >
            View full user profile
          </Link>
        </Column>
      </Columns>
    );

    return (
      <Fragment>
        <SiteHeader title={'Order Details'} subtitle={`order id: ${id}`} />
        <div className="columns">
          <div className="column">
            <header className="order-details__header">
              <h2 className="title">Order details</h2>
            </header>
            {isLoading ? <LoadingSpinner /> : orderDetails}
          </div>
          <div className="column">
            <header className="order-details__header">
              <h2 className="title">Buyer details</h2>
            </header>
            {isLoading ? <LoadingSpinner /> : buyerDetails}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OrderView;
