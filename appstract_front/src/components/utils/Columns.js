import React from 'react';

const Columns = ({ children, classes }) => {
  return <div className={`columns ${classes}`}>{children}</div>;
};

export default Columns;
