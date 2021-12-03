import React, { Component } from "react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import './index.css';

class App extends Component {
  
  // Click to create CV
  onClick = (e) => {
    e.preventDefault();
    console.log('clicked!');
  }

  render() {
    return (
      <form id="form">
        <h1>Create CV</h1>
        <Profile />
        <Experience />
        <Education />
        <button type="submit" onClick={this.onClick}>Create CV</button>
      </form>
    )
  }
}

export default App;
