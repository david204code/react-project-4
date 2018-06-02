import React, { Component } from "react";
import Slider from "../components/Slider";

class Home extends Component {
  render() {
    const slides = [
      {
        id: 1,
        image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }

    ]
    return (
      <main role="main">
        <div className="container">
          <Slider slides={slides} />
        </div>
      </main>
    );
  }
}

export default Home;
