import React, { Component } from 'react'
import Profile from "./Profile.js";
import Experience from "./Experience.js";
import Education from "./Education.js";
import ArrowBack from "@material-ui/icons/ArrowBackIos"
import ArrowForward from "@material-ui/icons/ArrowForwardIos"

class Form extends Component {
    render() {
      switch(this.props.state.index) {
        case 1: 
          return (
            <div className="form-container">
              <Profile 
              handleChange={this.props.handleChange} 
              nextForm={this.props.nextForm} 
              prevForm={this.props.prevForm} 
              state={this.props.state} 
              handleImage={this.props.handleImage}/>
              <button className="arrow back" onClick={this.props.prevForm}><ArrowBack /></button>
              <button className="arrow forward" onClick={this.props.nextForm}><ArrowForward /></button>
            </div>
          );
        case 2: 
          return (
            <div className="form-container">
              <Experience 
              handleChange={this.props.handleChange} 
              nextForm={this.props.nextForm} 
              prevForm={this.props.prevForm} />
              <button className="arrow back" onClick={this.props.prevForm}><ArrowBack /></button>
              <button className="arrow forward" onClick={this.props.nextForm}><ArrowForward /></button>
            </div>
          );
        case 3: 
          return (
            <div className="form-container">
              <Education 
              handleChange={this.props.handleChange} 
              handleSubmit={this.props.handleSubmit} 
              nextForm={this.props.nextForm} 
              prevForm={this.props.prevForm}/>
              <button className="arrow back" onClick={this.props.prevForm}><ArrowBack /></button>
              <button className="arrow forward" onClick={this.props.nextForm}><ArrowForward /></button>
            </div>
          );
        default: 
          return (
            <div className="form-container">
              <button className="arrow back" onClick={this.props.prevForm}><ArrowBack /></button>
              <button className="arrow forward" onClick={this.props.nextForm}><ArrowForward /></button>
            </div>
          );
      }
    }
  }
  
  export default Form;
  