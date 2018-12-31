import React, { Fragment } from 'react';
import TableClients from '../utils/TableClients';
import SiteHeader from '../SiteHeader';

const ClientssView = () => {
  return (
    <Fragment>
      <SiteHeader title={'Clients from our store'} />
      <TableClients />
    </Fragment>
  );
};

export default ClientssView;
