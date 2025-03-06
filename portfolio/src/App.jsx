import React from "react";
// import Projects from './components/Projects';
// import ProjectsBtn from './components/projectsbtn';
import "./App.css";
import Header from "./components/Header";
// import Page from './components/pageprojects/Page';
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
const computerLogo = "/computerlogo.png";

function App() {
  return (
    <div className="App">
      <Header icon="{faPhone, faEnvelope, faMapMarkerAlt}" img={computerLogo} />
      
        <AboutMe />
        <Skills />
      
    </div>
  );
}

export default App;
