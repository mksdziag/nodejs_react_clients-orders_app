import React, { Component, Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import http from '../../services/http';

class EditOrder extends Component {
  state = { clientId: '', amount: '' };

  handleInputChange = e => {
    const inputValue = e.currentTarget.value;
    const inputName = e.currentTarget.name;

    this.setState({ [inputName]: inputValue });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const orderDetails = { ...this.state };
    const response = await http.post(`/orders`, orderDetails);
    const newOrder = response.data;
    this.props.history.push(`/orders/${newOrder._id}`);
  };

  clearInput = e => {
    e.preventDefault();
    this.setState({ clientId: '', amount: '' });
  };

  render() {
    const { clientId, amount } = this.state;

    return (
      <Fragment>
        <SiteHeader title={'Add order'} />
        <div className="columns is-centered">
          <form className="column is-10" action="" onSubmit={this.handleFormSubmit}>
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
              <button className="button is-text " onClick={this.clearInput}>
                Clear fields
              </button>
              <button className="button is-dark " type="submit">
                Add order
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default EditOrder;
