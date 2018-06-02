import React from "react";
import { Link } from "react-router-dom";

const Button = props => (
  <Link className={props.style} to={props.path} role="button">
    {props.children}
  </Link>
);

export default Button;
