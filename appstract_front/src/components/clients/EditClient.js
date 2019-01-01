import React, { Component, Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import http from '../../services/http';

class EditClient extends Component {
  state = { name: '', surname: '' };

  handleInputChange = e => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;

    this.setState({ [inputName]: inputValue });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const newClientData = { ...this.state };
    const response = await http.post(`/clients`, newClientData);
    const newClient = response.data;
    this.props.history.push(`/clients/${newClient._id}`);
  };

  clearInput = e => {
    e.preventDefault();
    this.setState({ name: '', surname: '' });
  };

  render() {
    const { name, surname } = this.state;
    return (
      <Fragment>
        <SiteHeader title={'Add client'} />
        <div className="columns is-centered">
          <form className="column is-10" onSubmit={this.handleFormSubmit}>
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
              <button className="button is-text " onClick={this.clearInput}>
                Clear fields
              </button>
              <button className="button is-dark " type="submit">
                Add Client
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default EditClient;
