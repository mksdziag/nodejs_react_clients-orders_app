import React, { Fragment } from 'react';

import LinkTile from './LinkTile';
import SiteHeader from './SiteHeader';
import ordersIcon from '../assets/iconmonstr-shopping-cart.svg';
import addOrderIcon from '../assets/iconmonstr-cart-add.svg';
import clientsIcon from '../assets/iconmonstr-users.svg';
import addClientIcon from '../assets/iconmonstr-user-add.svg';
import aggrIcon from '../assets/iconmonstr-cube.svg';

const Home = () => {
  return (
    <Fragment>
      <SiteHeader title="Appstract Recruitment App" />
      <div className="tile is-ancestor home-tiles">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <LinkTile
                classes="is-warning"
                bgIcon={ordersIcon}
                linkPath="/orders"
                title="Orders"
                subtitle="Manage all orders"
              />
            </div>
            <div className="tile is-parent">
              <LinkTile
                classes="is-warning"
                bgIcon={addOrderIcon}
                linkPath="/orders/add-new"
                title="Add New Order"
                subtitle="Manage new orders"
              />
            </div>
          </div>
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <LinkTile
                classes="is-dark"
                bgIcon={clientsIcon}
                linkPath="/clients"
                title="Clients"
                subtitle="Manage all clients"
              />
            </div>
            <div className="tile is-parent">
              <LinkTile
                classes="is-dark"
                bgIcon={addClientIcon}
                linkPath="/clients/add-new"
                title="Add New Client"
                subtitle="Manage new clients"
              />
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <LinkTile
            classes="is-primary"
            bgIcon={aggrIcon}
            linkPath="/clients-orders"
            title="Grouped orders"
            subtitle="Aggregate orders data"
            backgroundSize="auto 30%"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
