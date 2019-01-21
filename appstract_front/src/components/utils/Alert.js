import React from 'react';

const Alert = ({ message, onClose, classes }) => {
  return (
    <div className={`notification ${classes && classes}`}>
      <button className="delete" onClick={onClose} />
      {message}
    </div>
  );
};

export default Alert;
