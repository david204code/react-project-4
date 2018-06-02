import React, { Component } from "react";
import ReactDOM from "react-dom";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import Card from "../components/Card";

class MyWork extends Component {
  render() {
    const portfolio = [
      {
        id: 1,
        title: "Project 1",
        summary: "Description for project 1",
        image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 2,
        title: "Project 2",
        summary: "Description for project 2",
        image: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 3,
        title: "Project 3",
        summary: "Description for project 3",
        image: "https://images.pexels.com/photos/34140/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 4,
        title: "Project 4",
        summary: "Description for project 4",
        image: "https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
    return (
      <main role="main">
        <div className="container">
          <Jumbotron title="My Work">
            <p>
              Hello from My Work, Welcome to my portfolio. I would like to use
              this opportunity to showcase my skills and work. Choosen the
              learning path <a href="#">Full Stack Development</a>. I am soon to
              be an<a href="#"> OpenClassRoom</a> graduate in web developement.
            </p>

            <p>
              <Button path="/" style="btn btn-primary mr-3">
                Click me <i className="fas fa-arrow-right" />
              </Button>
              <Button path="/contact" style="btn btn-outline-primary">
                Contact
              </Button>
            </p>
          </Jumbotron>

          <div className="row">
            {portfolio.map( project => (
            <div key={project.id} className="col-md-4">
              <Card title={project.title} summary={project.summary} image={project.image} />
            </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default MyWork;
