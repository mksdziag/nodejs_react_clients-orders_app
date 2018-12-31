import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import EditOrder from './components/orders/EditOrder';
import OrdersView from './components/orders/OrdersView';
import OrderView from './components/orders/OrderView';
import ClientsView from './components/clients/ClientsView';
import ClientView from './components/clients/ClientView';
import EditClient from './components/clients/EditClient';
import AggView from './components/aggregate/AggView';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container container--app">
          <Switch>
            <Route path="/orders/edit/:id" component={EditOrder} />
            <Route path="/orders/add-new" component={EditOrder} />
            <Route path="/orders/:id" component={OrderView} />
            <Route path="/orders" component={OrdersView} />
            <Route path="/clients-orders" component={AggView} />
            <Route path="/clients/add-new" component={EditClient} />
            <Route path="/clients/edit/:id" component={EditClient} />
            <Route path="/clients/:id" component={ClientView} />
            <Route path="/clients" component={ClientsView} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LogInForm} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
