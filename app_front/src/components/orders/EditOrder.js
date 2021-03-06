import React, { Component, Fragment } from 'react';

import http from '../../services/http';
import { endpoints } from '../../config/restApi.json';

import SiteHeader from '../utils/SiteHeader';
import Alert from '../utils/Alert';
import Columns from '../utils/Columns';
import Column from '../utils/Column';

class EditOrder extends Component {
  state = { clientId: '', amount: '', error: '' };

  handleInputChange = e => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;

    this.setState({ [inputName]: inputValue });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const { clientId, amount } = this.state;

    try {
      const response = await http.post(endpoints.orders, { clientId, amount });
      const newOrder = response.data;
      this.props.history.push(`/orders/${newOrder._id}`);
    } catch (error) {
      const message = error.response.data;
      if (!message) {
        console.log(error);
      }
      this.setState({ error: message });
    }
  };

  handleclearInput = e => {
    e.preventDefault();
    this.setState({ clientId: '', amount: '', error: '' });
  };

  handleErrorClose = () => {
    this.setState({ error: '' });
  };

  render() {
    const { clientId, amount, error } = this.state;

    return (
      <Fragment>
        <SiteHeader title={'Add order'} />
        <Columns classes="is-centered">
          <Column part={8}>
            <form onSubmit={this.handleFormSubmit}>
              {error && (
                <Alert message={error} onClose={this.handleErrorClose} classes="is-danger" />
              )}
              <div className="field">
                <label className="label">Client Id</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="clientId"
                    onChange={this.handleInputChange}
                    placeholder="Client id"
                    value={clientId}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <input
                    className="input"
                    name="amount"
                    type="number"
                    step="0.01"
                    placeholder="Order total amount"
                    value={amount}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="field has-text-right">
                <button className="button is-text " onClick={this.handleclearInput}>
                  Clear fields
                </button>
                <button className="button is-dark " type="submit">
                  Add order
                </button>
              </div>
            </form>
          </Column>
        </Columns>
      </Fragment>
    );
  }
}

export default EditOrder;
