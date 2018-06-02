import React from "react";

const Jumbotron = props => (
  <div className="jumbotron">
    <div className="col-sm-8 mx-auto">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  </div>
);
export default Jumbotron;
