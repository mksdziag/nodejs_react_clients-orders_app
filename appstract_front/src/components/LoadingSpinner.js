import React from 'react';

const LoadingSpinner = ({ isBig }) => {
  return (
    <div className={isBig ? 'has-text-centered is-big' : 'has-text-centered'}>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;
