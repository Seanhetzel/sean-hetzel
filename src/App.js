import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjectsContainer";
import HardwareProjects from "./components/HardwareProjects";
import Connect from "./components/Connect";

class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        <LandingPage />
        <SoftwareProjects />
        <HardwareProjects />
        <Connect />
      </>
    );
  }
}

export default App;
