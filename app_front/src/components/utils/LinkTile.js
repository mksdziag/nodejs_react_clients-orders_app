import React from 'react';
import { Link } from 'react-router-dom';

const ChildTile = ({ bgIcon, title, subtitle, linkPath, classes }) => {
  return (
    <Link to={linkPath} className={`tile is-child notification ${classes && classes}`}>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      <img
        src={bgIcon}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '.75rem',
          width: '100%',
          maxWidth: '8rem',
          maxHeight: '70%',
        }}
        alt=""
      />
    </Link>
  );
};

export default ChildTile;
