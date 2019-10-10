import React from "react";
import Header from "./components/Header";
import SoftwareProjects from "./components/SoftwareProjects";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends React.Component {
    render() {
        return (
            <>
              <Header/>
              <SoftwareProjects/>
            </>
        );
    }
}

export default App;
