import React from 'react';

const Alert = ({ alert }) => {
  if (!alert) {
    return null; // Return null if the alert is not provided
  }

  const { type, msg } = alert;

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      <strong>{type.toUpperCase()}:</strong> {msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
