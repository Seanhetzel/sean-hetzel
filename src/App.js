import React, { Component } from "react";
import { configureAnchors } from "react-scrollable-anchor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjects";
import HardwareProjects from "./components/HardwareProjects";
import Connect from "./components/Connect";

class App extends Component {
  render() {
    configureAnchors({ scrollDuration: 1000 });
    return (
      <>
        <NavBar />
        <LandingPage />
        <SoftwareProjects />
        <HardwareProjects />
        <Connect />
      </>
    );
  }
}

export default App;
