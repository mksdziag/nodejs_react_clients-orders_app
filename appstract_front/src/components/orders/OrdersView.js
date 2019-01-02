import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import LoadingSpinner from '../LoadingSpinner';
import http from '../../services/http';
import { Link } from 'react-router-dom';
import Table from '../utils/Table';

class OrdersView extends React.Component {
  state = { orders: [], isLoading: true };

  async componentDidMount() {
    const response = await http.get('/orders');
    const orders = response.data;

    this.setState({ orders, isLoading: false });
  }
  render() {
    const { isLoading, orders } = this.state;
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

    return (
      <Fragment>
        <SiteHeader title={'Orders from our store'} />
        {isLoading ? <LoadingSpinner isBig={true} /> : <Table columns={columns} data={orders} />}
      </Fragment>
    );
  }
}

export default OrdersView;
