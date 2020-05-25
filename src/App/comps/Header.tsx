import React from 'react';
import { Link } from 'react-router-dom';

function Header<never>(): JSX.Element {
  return (
    <nav className="bg-danger mb-5 navbar navbar-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <span aria-label="time convertor" role="img">
          {new Date().getMinutes() % 2 ? '⏳' : '⌛️'}
        </span>{' '}
        time convertor
      </Link>
      <button
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/help">
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/future">
              Future
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/from-to">
              From-to
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
