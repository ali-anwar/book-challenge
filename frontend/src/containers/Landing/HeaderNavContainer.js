import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNavContainer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            exact
            activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="active"
            to="/about"
          >
            About
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavContainer;
