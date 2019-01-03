import React, { Fragment } from 'react';
import SiteHeader from '../utils/SiteHeader';
import { Link } from 'react-router-dom';

import userPic from '../../assets/circled-user-male-skin-type-1-2.png';
import Table from '../utils/Table';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';
import Columns from '../utils/Columns';
import Column from '../utils/Column';

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
    const {
      orders,
      isLoading,
      client: { name, surname },
    } = this.state;

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
        <SiteHeader title={`${name} ${surname}`} subtitle="View all details of client" />
        <Columns>
          <Column part={3}>
            <h3 className="title is-size-4">Client details</h3>
            <span className="mb-1">{name}</span> <span className="mb-1">{surname}</span>
            <img className="client-picture" src={userPic} alt="" />
          </Column>
          <Column part={9}>
            <h3 className="title is-size-4">Client's orders</h3>
            {orders.length ? (
              <Table columns={columns} data={orders} />
            ) : (
              <p>This client does not have any orders yet...</p>
            )}
          </Column>
        </Columns>
      </Fragment>
    );

    return isLoading ? <LoadingSpinner isBig={true} /> : siteContent;
  }
}

export default ClientView;
