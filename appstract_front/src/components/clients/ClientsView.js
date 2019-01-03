import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from '../utils/Table';
import SiteHeader from '../utils/SiteHeader';
import http from '../../services/http';
import LoadingSpinner from '../LoadingSpinner';
import Alert from '../utils/Alert';

class ClientsView extends React.Component {
  state = { clients: [], isLoading: true, error: '' };

  async componentDidMount() {
    try {
      const response = await http.get('/clients');
      const clients = response.data;
      this.setState({ clients, isLoading: false });
    } catch (error) {
      const { message } = error.response.data;
      this.setState({ error: message, isLoading: false });
    }
  }

  render() {
    const { isLoading, clients, error } = this.state;

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

    const clientsTable = clients.length ? <Table columns={columns} data={clients} /> : null;

    return (
      <Fragment>
        <SiteHeader title={'Clients from our store'} />
        {error ? <Alert message={error} classes="is-danger" /> : null}
        {isLoading ? <LoadingSpinner isBig={true} /> : clientsTable}
        <div className="has-text-right">
          <Link to="/clients/add-new" className="button is-primary mb-3">
            Add new client
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default ClientsView;
