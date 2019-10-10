import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SoftwareProjects from "./components/SoftwareProjects";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ScrollToTopOnMount, SectionsContainer, Section } from "react-fullpage";

class App extends React.Component {
    render() {
        let options = {
            activeClass:          'active', // the class that is appended to the sections links
            anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'], // the anchors for each sections
            arrowNavigation:      true, // use arrow keys
            className:            'SectionContainer', // the class name for the section container
            delay:                500, // the scroll animation speed
            navigation:           true, // use dots navigatio
            scrollBar:            false, // use the browser default scrollbar
            sectionClassName:     'Section', // the section class name
            sectionPaddingTop:    '0', // the section top padding
            sectionPaddingBottom: '0', // the section bottom padding
            verticalAlign:        false // align the content of each section vertical
          };
        return (
            <>
                <Header />

                <ScrollToTopOnMount />
                <SectionsContainer {...options}>
                    <Section>
                        <LandingPage />
                    </Section>
                    <Section>
                        <SoftwareProjects />
                    </Section>
                    <Section>
                        <SoftwareProjects />
                    </Section>
                </SectionsContainer>
            </>
        );
    }
}

export default App;
