import React from "react";

function Projects({ theme1, theme2, theme3, tipcalc }) {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects Page</h1>
      <div className="images">
        <div>
          <p>Theme1</p>
          <img className="themes" src={theme1} alt="theme1" />
        </div>
        <div>
            <p>Theme2</p>
        <img className="themes" src={theme2} alt="theme2" />
        </div>
        <div>
            <p>Theme3</p>
        <img className="themes" src={theme3} alt="theme3" />
        </div>
      </div>
      <div>
        <img className="tip" src={tipcalc} alt="tipcalc" />
      </div>
    </div>
  );
}

export default Projects;
