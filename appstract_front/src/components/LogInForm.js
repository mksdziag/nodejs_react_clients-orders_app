import React from 'react';

class LogInForm extends React.Component {
  state = {};
  render() {
    return (
      <div className="columns is-centered">
        <form className="column is-6" action="">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Your email" />
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="Your password" />
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
    );
  }
}

export default LogInForm;
