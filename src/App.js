import React, { Component } from "react";
import { configureAnchors } from "react-scrollable-anchor";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjects";
import HardwareProjects from "./components/HardwareProjects";
import About from "./components/About";

class App extends Component {
  render() {
    configureAnchors({ scrollDuration: 1000 });
    console.log("%c Sean Hetzel's Portfolio Site 🚀", "color: cyan");

    return (
      <>
        <NavBar />
        <LandingPage />
        <SoftwareProjects />
        <HardwareProjects />
        <About />
      </>
    );
  }
}

export default App;
