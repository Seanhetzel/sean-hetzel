import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";
import Connect from "./components/Connect";

class App extends React.Component {
    render() {
        let options = {
            activeClass: "active", // the class that is appended to the sections links
            anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"], // the anchors for each sections
            arrowNavigation: true, // use arrow keys
            className: "SectionContainer", // the class name for the section container
            delay: 700, // the scroll animation speed
            navigation: true, // use dots navigatio
            scrollBar: false, // use the browser default scrollbar
            sectionClassName: "Section", // the section class name
            sectionPaddingTop: "0", // the section top padding
            sectionPaddingBottom: "0", // the section bottom padding
            // fitToSection: true,
            verticalAlign: true // align the content of each section vertical
        };
        return (
            <>
                <ScrollToTopOnMount />
                <SectionsContainer {...options}>
                    <Section>
                        <Header />
                        <LandingPage />
                    </Section>
                    <Section>
                        <SoftwareProjects />
                    </Section>
                    <Section>
                        <SoftwareProjects />
                    </Section>
                    <Section>
                        <Connect />
                    </Section>
                </SectionsContainer>
            </>
        );
    }
}

export default App;
