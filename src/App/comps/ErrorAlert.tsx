import React from 'react';

function ErrorAlert({ msg }: { msg: string }) {
  return (
    <div
      className="alert alert-dismissible alert-warning fade mt-5 show"
      role="alert"
    >
      {msg}
      <button
        aria-label="Close"
        className="close"
        data-dismiss="alert"
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ErrorAlert;
