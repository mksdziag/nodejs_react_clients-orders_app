import React from 'react';

const SiteHeader = ({ title, subtitle }) => {
  return (
    <header className="site-header">
      <h1 className="title is-size-2	has-text-centered	">{title}</h1>
      {subtitle && <p className="title is-size-4	has-text-centered	">{subtitle}</p>}
    </header>
  );
};

export default SiteHeader;
