import React from "react";
// import Projects from './components/Projects';
// import ProjectsBtn from './components/projectsbtn';
import "./App.css";
import Header from "./components/Header";
// import Page from './components/pageprojects/Page';
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
import Profileimage from "./components/Profileimage";
import Experience from "./components/Experience";
const computerLogo = "/computerlogo.png";
const profileImage = "/profileImage.jpg";



function App() {
  return (
    <div className="App">
      <Header icon="{faPhone, faEnvelope, faMapMarkerAlt}" img={computerLogo} />
      <div className="flex">
        
        <div>
            <AboutMe />
        <Skills />
        </div>
        
        <Profileimage img={profileImage} />
      </div>
        <Experience />
         {/* <Projects />  */}
    </div>
  );
}

export default App;
