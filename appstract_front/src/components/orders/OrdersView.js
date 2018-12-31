import React, { Fragment } from 'react';
import TableOrders from '../utils/TableOrders';
import SiteHeader from '../SiteHeader';

const OrdersView = () => {
  return (
    <Fragment>
      <SiteHeader title={'Orders from our store'} />
      <TableOrders />
    </Fragment>
  );
};

export default OrdersView;
