import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from '../utils/Table';
import SiteHeader from '../SiteHeader';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';

class ClientsView extends React.Component {
  state = { clients: [], isLoading: true };

  async componentDidMount() {
    const response = await http.get('/clients');
    const clients = response.data;

    this.setState({ clients, isLoading: false });
  }

  render() {
    const { isLoading, clients } = this.state;

    const columns = [
      {
        path: '_id',
        label: 'Client ID',
      },
      { path: 'name', label: 'Name' },
      { path: 'surname', label: 'Surname' },
      {
        label: 'Profile link',
        content: client => (
          <Link className="button is-warning" to={`clients/${client._id}`}>
            full profile
          </Link>
        ),
      },
    ];

    return (
      <Fragment>
        <SiteHeader title={'Clients from our store'} />
        {isLoading ? <LoadingSpinner isBig={true} /> : <Table columns={columns} data={clients} />}
      </Fragment>
    );
  }
}

export default ClientsView;
