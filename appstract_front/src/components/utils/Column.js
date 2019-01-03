import React from 'react';

const Column = ({ children, classes = '', part = 0 }) => {
  const additionalClasses = part ? 'is-' + part : '';

  return <div className={`column ${additionalClasses} ${classes}`}>{children}</div>;
};

export default Column;
