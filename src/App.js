import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      description: '', 
      imgUrl: '', 
      jobPosition: '',
      companyName: '',
      companyStartDate: '',
      companyEndDate: '',
      university: '',
      city: '',
      degree: '',
      universityStartDate: '',
      universityEndDate: '', 
      index: 1, 
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); 
  }

  handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        imgUrl: URL.createObjectURL(e.target.files[0])
      });
    }
  }

  prevForm = () => {
    if (this.state.index <= 3 && this.state.index > 1) {
      this.setState({index: this.state.index - 1}); 
    }
  }

  nextForm = () => {
    if (this.state.index < 3) {
      this.setState({index: this.state.index + 1});
    }
  }

  render() {
    return (
      <>
        <Header/>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleImage={this.handleImage} prevForm={this.prevForm} nextForm={this.nextForm} state={this.state} />
        <Footer />
      </>
    )
  }
}

export default App;
