import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">My Work</a>
            </li>
          </ul>
          <li>
            <a href="#">Contact</a>
          </li>
          <ul />
        </nav>
      </span>
    </div>

    <div className="social-media">
      More Information
      <ul className="">
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Youtube</a>
        </li>
        <li>
          <a href="#">LinkenIn</a>
        </li>
      </ul>
    </div>

    <div>
      <span className="text-muted">
        <p>Copyright David Wu 2018. All rights reserved</p>
      </span>
    </div>
  </footer>
);

export default Footer;
