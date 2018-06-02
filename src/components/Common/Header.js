import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = props => (
  <div className="container">
    <div className="logo">
      <h1 className="text-center mt-4">David Sitz Wu</h1>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample09">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/MyWork">
              My Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            type="text"
          />
        </form>
      </div>
    </nav>
  </div>
);

export default Header;
