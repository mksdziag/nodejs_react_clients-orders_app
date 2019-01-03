import React, { Component, Fragment } from 'react';
import SiteHeader from '../utils/SiteHeader';
import http from '../../services/http';
import Alert from '../utils/Alert';
import Columns from '../utils/Columns';
import Column from '../utils/Column';

class EditClient extends Component {
  state = { name: '', surname: '', error: '' };

  handleInputChange = e => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;

    this.setState({ [inputName]: inputValue });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const { name, surname } = this.state;
    const newClientData = { name, surname };

    try {
      const response = await http.post(`/clients`, newClientData);
      const newClient = response.data;
      this.props.history.push(`/clients/${newClient._id}`);
    } catch (error) {
      const message = error.response.data;
      this.setState({ error: message });
    }
  };

  handleclearInput = e => {
    e.preventDefault();
    this.setState({ name: '', surname: '', error: '' });
  };

  handleErrorClose = e => {
    e.preventDefault();
    this.setState({ error: '' });
  };

  render() {
    const { name, surname, error } = this.state;

    return (
      <Fragment>
        <SiteHeader title={'Add client'} />
        <Columns classes="is-centered">
          <Column part={8}>
            <form onSubmit={this.handleFormSubmit}>
              {error && (
                <Alert message={error} onClose={this.handleErrorClose} classes="is-danger" />
              )}
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    value={name}
                    placeholder="Client's name"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Surname</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="surname"
                    value={surname}
                    placeholder="Client's second name"
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="field has-text-right">
                <button className="button is-text " onClick={this.handleclearInput}>
                  Clear fields
                </button>
                <button className="button is-dark " type="submit">
                  Add Client
                </button>
              </div>
            </form>
          </Column>
        </Columns>
      </Fragment>
    );
  }
}

export default EditClient;
