import React, { Component } from "react";
import Form from "./components/form/Form";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cv from "./components/Cv";

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
      phone: '',
      email: '',
      website: '',
      index: 1, 
      showCv: false,
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      index: this.state.index + 1,
      showCv: true
    });
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
    if (this.state.index <= 4 && this.state.index > 1) {
      this.setState({index: this.state.index - 1}); 
    }
  }

  nextForm = () => {
    if (this.state.index < 4) {
      this.setState({index: this.state.index + 1});
    }
  }

  editForm = () => {
    this.setState({
      showCv: false, 
      index: 1,
    });
  }

  render() {
    if (this.state.showCv === true) {
      return (
      <>
      <Header/>
      <Cv 
      state={this.state} 
      editForm={this.editForm}
      />
      <Footer />
      </>
      )
    } else {
      return (
        <>
        <Header/>
        <Form 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        handleImage={this.handleImage} 
        prevForm={this.prevForm} 
        nextForm={this.nextForm}
        state={this.state} 
        />
        <Footer />
        </>
      )
    } 
  }
}

export default App;
