import React, { Component } from "react";
import ContactForm from "../components/Forms/Contact";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <main role="main">
          <ContactForm />
        </main>
      </div>
    );
  }
}

export default Contact;
