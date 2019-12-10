import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjects";
import HardwareProjects from "./components/HardwareProjects";
import Connect from "./components/Connect";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavBar />
        {/* <Switch> */}
        <LandingPage />
        {/* <Route path="/home" component={LandingPage}/> */}
        {/* <Route path="/" render={<LandingPage/>}/> */}
        <SoftwareProjects />
        <HardwareProjects />
        <Connect />
        {/* <Route path="/" render={props => <LandingPage {...props} />} />
          <Route path="/software" render={props => <SoftwareProjects {...props} />} />
          <Route path="/hardware" render={props => <HardwareProjects {...props} />} />
          <Route path="/contact" render={props => <Connect {...props} />} /> */}

        {/* </Switch> */}
      </>
    );
  }
}

export default App;
