import React, { Fragment } from 'react';
import SiteHeader from '../SiteHeader';
import Table from '../utils/Table';

const ClientssView = () => {
  return (
    <Fragment>
      <SiteHeader title={'Clients-Orders Aggregate Table'} />
      <Table />
    </Fragment>
  );
};

export default ClientssView;
