import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
import Profileimage from "./components/Profileimage";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const computerLogo = "/computerlogo.png";
const profileImage = "/profileImage.jpg";
const stickers = "/stickers.png";
import "./global.css";

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
      <Footer icon="{FaGithub, faLinkedin}" img={stickers} />
    </div>
  );
}

export default App;
