import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { endpoints } from '../../config/restApi.json';
import http from '../../services/http';

import LoadingSpinner from '../LoadingSpinner';
import SiteHeader from '../utils/SiteHeader';
import Table from '../utils/Table';
import Alert from '../utils/Alert';

class AggregateOrders extends React.Component {
  state = {
    aggOrders: [],
    isLoading: true,
    error: '',
  };

  async componentDidMount() {
    try {
      const response = await http.get(endpoints.clientsOrders);
      const aggOrders = response.data;
      this.setState({ aggOrders, isLoading: false });
    } catch (error) {
      const { message } = error.response.data;
      this.setState({ error: message, isLoading: false });
    }
  }
  render() {
    const { isLoading, aggOrders, error } = this.state;

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

    const aggOrderstable = aggOrders.length ? <Table columns={columns} data={aggOrders} /> : null;

    return (
      <Fragment>
        <SiteHeader title={'Clients-Orders Aggregate Table'} />
        {error ? <Alert message={error} classes="is-danger" /> : null}
        {isLoading ? <LoadingSpinner isBig={true} /> : aggOrderstable}
      </Fragment>
    );
  }
}

export default AggregateOrders;
