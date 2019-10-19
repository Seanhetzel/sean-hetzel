import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjects";
import HardwareProjects from "./components/HardwareProjects";
import Connect from "./components/Connect";

const App = () => (
    <ReactFullpage
        // pluginWrapper={pluginWrapper}
        licenseKey={"Oa02tbC^w3"}
        scrollingSpeed={500}
        navigation={true} // use dots navigatio
        navigationTooltips={["HOME", "SOFTWARE", "HARDWARE", "CONTACT"]}
        fitToSection={true}
        cards={true}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Header />
                        <LandingPage />
                    </div>
                    <div className="section">
                        <SoftwareProjects />
                    </div>
                    <div className="section">
                        <HardwareProjects />
                    </div>
                    <div className="section">
                        <Connect />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);

export default App;
