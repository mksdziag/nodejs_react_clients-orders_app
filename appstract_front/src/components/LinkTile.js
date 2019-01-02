import React from 'react';
import { Link } from 'react-router-dom';

const ChildTile = ({ bgIcon, title, subtitle, linkPath, classes, backgroundSize = 'auto 50%' }) => {
  return (
    <Link
      to={linkPath}
      className={`tile is-child notification ${classes && classes}`}
      style={{
        backgroundImage: `url(${bgIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: backgroundSize,
        backgroundPosition: 'calc(100% - 1rem) calc(100% - 1rem)',
      }}
    >
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </Link>
  );
};

export default ChildTile;
