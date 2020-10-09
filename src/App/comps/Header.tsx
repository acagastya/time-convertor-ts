import React from "react";
import { Link } from "react-router-dom";

import { basePath } from "../../utils";

function Header<never>(): JSX.Element {
  return (
    <nav className="bg-danger mb-5 navbar navbar-dark navbar-expand-lg">
      <Link className="navbar-brand" to={`${basePath}/`}>
        <span aria-label="time-convertor" role="img">
          ⏳
        </span>{" "}
        time convertor
      </Link>
      <button
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-target="#collapsibleNavbar"
        data-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={`${basePath}/create`}>
              Create-events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${basePath}/help`}>
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${basePath}/future`}>
              Future
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${basePath}/from-to`}>
              From-to
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
