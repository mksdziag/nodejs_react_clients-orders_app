import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import { Link } from 'react-router-dom';

import userPic from '../../assets/circled-user-male-skin-type-1-2.png';
import Table from '../utils/Table';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';

class ClientView extends React.Component {
  state = { client: { _id: '', name: '', surname: '' }, orders: [], isLoading: true };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await http.get(`/clients-orders/${id}`);

    const orders = response.data;
    if (!orders.length) {
      const response = await http.get(`/clients/${id}`);
      const client = response.data;
      this.setState({ client, isLoading: false });
    } else {
      const client = orders[0].clientDetails;
      this.setState({ client, orders, isLoading: false });
    }
  }
  render() {
    const { name, surname } = this.state.client;
    const { orders, isLoading } = this.state;
    const columns = [
      {
        path: '_id',
        label: 'Order ID',
      },
      { content: order => order.amount + ' $', label: 'Order Amount' },

      {
        label: 'Order link',
        content: order => (
          <Link className="button is-warning" to={`/orders/${order.clientId && order._id}`}>
            view order
          </Link>
        ),
      },
    ];

    const siteContent = (
      <Fragment>
        <SiteHeader title={name + ' ' + surname} subtitle="View all details of client" />
        <div className="columns">
          <div className="column is-9 ">
            <h3 className="title is-size-4">Client's orders</h3>
            {orders.length ? (
              <Table columns={columns} data={orders} />
            ) : (
              <p>This client does not have any orders yet...</p>
            )}
          </div>
          <div className="column is-3">
            <h3 className="title is-size-4">Client details</h3>
            <span className="mb-1">{name}</span>
            <br />
            <span className="mb-1">{surname}</span>
            <img className="client-picture" src={userPic} alt="" />
          </div>
        </div>
      </Fragment>
    );

    return <Fragment>{isLoading ? <LoadingSpinner isBig={true} /> : siteContent}</Fragment>;
  }
}

export default ClientView;
