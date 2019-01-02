import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import Table from '../utils/Table';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';
import { Link } from 'react-router-dom';

class AggregateOrders extends React.Component {
  state = {
    aggOrders: [],
    isLoading: true,
  };

  async componentDidMount() {
    const response = await http.get(`/clients-orders`);
    const aggOrders = response.data;

    this.setState({ aggOrders, isLoading: false });
  }
  render() {
    const { isLoading, aggOrders } = this.state;

    const columns = [
      {
        path: '_id',
        label: 'Client ID',
      },
      { path: 'clientDetails.name', label: 'Name' },
      { path: 'clientDetails.surname', label: 'Surname' },
      {
        path: 'ordersCount',
        label: 'Orders',
      },
      { content: order => order.total + ' $', label: 'Total Amount' },
      {
        label: 'Profile link',
        content: order => (
          <Link className="button is-warning" to={`clients/${order._id}`}>
            full profile
          </Link>
        ),
      },
    ];

    return (
      <Fragment>
        <SiteHeader title={'Clients-Orders Aggregate Table'} />
        {isLoading ? (
          <LoadingSpinner isBig={true} />
        ) : (
          aggOrders.length && <Table columns={columns} data={aggOrders} />
        )}
      </Fragment>
    );
  }
}

export default AggregateOrders;
