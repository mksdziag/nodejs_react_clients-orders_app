import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import LoadingSpinner from '../LoadingSpinner';
import http from '../../services/http';
import { Link } from 'react-router-dom';
import Table from '../utils/Table';
import Alert from '../utils/Alert';

class OrdersView extends React.Component {
  state = { orders: [], isLoading: true, error: '' };

  async componentDidMount() {
    try {
      const response = await http.get('/orders');
      const orders = response.data;
      this.setState({ orders, isLoading: false });
    } catch (error) {
      const { message } = error.response.data;
      this.setState({ error: message, isLoading: false });
    }
  }
  render() {
    const { isLoading, orders, error } = this.state;
    const columns = [
      {
        path: '_id',
        label: 'Order ID',
      },
      { content: order => order.amount + ' $', label: 'Order Amount' },
      { path: 'clientId.name', label: 'Name' },
      { path: 'clientId.surname', label: 'Surname' },
      {
        label: 'Order link',
        content: order => (
          <Link className="button is-warning" to={`orders/${order.clientId && order._id}`}>
            view order
          </Link>
        ),
      },
    ];

    const ordersTable = orders.length ? <Table columns={columns} data={orders} /> : null;

    return (
      <Fragment>
        <SiteHeader title={'Orders from our store'} />
        {error ? <Alert message={error} classes="is-danger" /> : null}
        {isLoading ? <LoadingSpinner isBig={true} /> : ordersTable}
        <div className="has-text-right">
          <Link to="/orders/add-new" className="button is-primary mb-3 ">
            Add new order
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default OrdersView;
