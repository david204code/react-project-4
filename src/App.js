import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Common/Header";
import {Home, MyWork, About, Contact, } from "./containers";
import Footer from "./components/Common/Footer";

const App = () => (
  <div className="App">
    <Header brand="Portfolio" />
    <Route exact path="/" component={Home} />
    <Route path="/myWork" component={MyWork} />
    <Route path="/contact" component={Contact} />
    <Footer />
  </div>
);

export default App;
