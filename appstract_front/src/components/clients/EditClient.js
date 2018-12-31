import React, { Component, Fragment } from 'react';
import SiteHeader from '../SiteHeader';

class EditOrder extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <SiteHeader title={'Edit client'} />
        <div className="columns is-centered">
          <form className="column is-10" action="">
            <div className="field">
              <label className="label">Clinet Id</label>
              <div className="control">
                <input className="input" type="text" placeholder="Client id" />
              </div>
            </div>

            <div className="field">
              <label className="label">Surname</label>
              <div className="control">
                <input className="input" type="text" placeholder="Client's second name" />
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
