import React, { Component, Fragment } from 'react';
import SiteHeader from '../SiteHeader';

class EditOrder extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <SiteHeader title={'Edit order'} />
        <div className="columns is-centered">
          <form className="column is-10" action="">
            <div className="field">
              <label className="label">Order Id</label>
              <div className="control">
                <input className="input" type="text" placeholder="Order id" />
              </div>
            </div>

            <div className="field">
              <label className="label">Amount</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  step="0.01"
                  placeholder="Order total amount"
                />
              </div>
            </div>

            <div className="field has-text-right">
              <button className="button is-text " onClick={this.clearInput}>
                clear fields
              </button>
              <button className="button is-dark " type="submit">
                Log me in
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default EditOrder;
