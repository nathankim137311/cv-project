import React, { Component } from "react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ArrowBack from "@material-ui/icons/ArrowBackIos"
import ArrowForward from "@material-ui/icons/ArrowForwardIos"

class App extends Component {

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
