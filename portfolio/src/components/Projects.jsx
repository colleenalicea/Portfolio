import React from "react";

function Projects({ theme1, theme2, theme3, tipcalc }) {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects Page</h1>
      <div className="images">
        <div>
          <p>Theme1</p>
          <a href="https://github.com/colleenalicea/calculator" target="_blank" rel="noopener noreferrer">
          <img className="themes" src={theme1} alt="theme1" />
          </a>
        </div>
        <div>
          <p>Theme2</p>
            <a href="https://github.com/colleenalicea/calculator" target="_blank" rel="noopener noreferrer">
          <img className="themes" src={theme2} alt="theme2" />
          </a>
        </div>
        <div>
          <p>Theme3</p>
          <a href="https://github.com/colleenalicea/calculator" target="_blank" rel="noopener noreferrer">
          <img className="themes" src={theme3} alt="theme3" />
          </a>
        </div>
      </div>
      <div>
        
        <p className="tipcalc">TipCalc</p>
        <a href="https://github.com/colleenalicea/tipcalc" target="_blank" rel="noopener noreferrer">
        <img className="tip" src={tipcalc} alt="tipcalc" />
      </a>
      </div>
      
    </div>
  );
}

export default Projects;
