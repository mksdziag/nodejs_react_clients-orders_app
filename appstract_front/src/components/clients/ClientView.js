import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader';

import userPic from '../../circled-user-male-skin-type-1-2.png';
import TableOrders from '../utils/TableOrders';

const ClientView = () => {
  return (
    <Fragment>
      <SiteHeader title={'Client'} subtitle="View all details of client" />
      <div className="columns">
        <div className="column is-9 ">
          <div className="title is-size-4">Client's orders</div>
          <TableOrders />
        </div>
        <div className="column is-3">
          <div className=" title is-size-4	">
            <span className="mb-1">Kazimierz</span>
            <br />
            <span className="mb-1">Wielki</span>
          </div>
          <img src={userPic} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default ClientView;
