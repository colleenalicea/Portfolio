import React from 'react';
import './App.css';
import Header from './components/Header';
// import Page from './components/pageprojects/Page';
import AboutMe from './components/Aboutme';

const computerLogo = '/computerlogo.png';

function App() {
    return (
        <div className="App">
            <Header onClick='{viewProjects}' icon='{faPhone, faEnvelope, faMapMarkerAlt}' img={computerLogo}   />
            <AboutMe />
        {/* <Page /> */}
          
        </div>
    );
}

export default App;
