import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../SiteHeader';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';

class OrderView extends React.Component {
  state = {
    order: {},
    isLoading: true,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await http.get(`/orders/${id}`);
    const order = response.data;

    this.setState({ order, isLoading: false });
  }

  render() {
    const { id } = this.props.match.params;
    const { order, isLoading } = this.state;

    const orderDetails = (
      <div>
        Order id: {id}
        <br />
        Order amount: {order.amount && order.amount} $
      </div>
    );
    const buyerDetails = (
      <div>
        <span className="mb-1">Name: {order.clientId && order.clientId.name}</span>
        <br />
        <span className="mb-1">Surname: {order.clientId && order.clientId.surname}</span>
        <br />
        <Link to={`/clients/${order.clientId && order.clientId._id}`} className="button is-warning">
          View full user profile
        </Link>
      </div>
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
              {isLoading ? <LoadingSpinner /> : buyerDetails}
            </header>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OrderView;
