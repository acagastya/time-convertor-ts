import React from 'react';

function ErrorAlert({ msg }: { msg: string }) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show mt-5"
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ErrorAlert;
