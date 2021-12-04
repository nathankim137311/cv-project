import React, { Component } from "react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      description: '', 
    }
  }

  handleCallback(parent, e) {
    parent.setState({ [e.target.name]: e.target.value }, () => {
      if (parent.props.onChange) {
          parent.props.onChange(parent.state);
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render() {
    const {data} = this.state;
    return (
      <form id="form" onSubmit={this.handleSubmit}>
        <h1>Create CV</h1>
        <Profile parentCallback = {this.handleCallback} />
        {data}
        <Experience />
        <Education />
        <button type="submit">Create CV</button>
      </form>
    )
  }
}

export default App;
