import React, { Component } from "react";
import Profile from "./components/Profile";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
import ArrowBack from "@material-ui/icons/ArrowBackIos"
import ArrowForward from "@material-ui/icons/ArrowForwardIos"

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
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); 
  }

  render() {
    return (
      <div className="form-container">
        <Profile />
        {/* <Experience /> */}
        {/* <Education /> */}
        <button className="arrow back"><ArrowBack /></button>
        <button className="arrow forward"><ArrowForward /></button>
      </div>
    )
  }
}

export default App;
