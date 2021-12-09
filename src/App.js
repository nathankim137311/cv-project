import React from "react";
import Profile from "./components/Profile"
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="cv-container">
    <header id="header"><Profile /></header>
    <div className="cv-main-container">
      <Experience />
      <Education />
    </div>
    </div>
  );
}

