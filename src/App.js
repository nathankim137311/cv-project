import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}

export default App;
