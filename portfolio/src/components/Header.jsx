import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ProjectsBtn from "./projectsbtn"; 

export default function Header({ img }) {
  return (
    <div className="header">
      <div className="container-1">
        <div className="left">
          <img src={img} alt="logo" />
        </div>

        <div className="gradient-container">
          <div className="right">
            <p className="p">Frontend</p>
            <h3 className="h3">RESUME</h3>
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="container-2">
          <div className="name">
            <h2 className="h2">COLLEEN </h2>
            <h2 className="h2">ALICEA</h2>
          </div>
          <div className="button-container">
            <ProjectsBtn />
          </div>
        </div>
      </div>

      <div className="container-3">
        <div className="icon-container">
          <div className="phone">
            <a href="tel:9044389277">
            <FontAwesomeIcon icon={faPhone} className="icon-bg" />
            </a>
          </div>
          <p className="icons-me">904-438-9277</p>
        </div>
        <div className="icon-container">
          <a href="mailto:aliceacolleen3@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon-bg" />
          </a>
          <p className="icons-me">aliceacolleen3@gmail.com</p>
        </div>
        <div className="icon-container">
         
        </div>
      </div>
      <hr className="divider"></hr>
    </div>
  );
}
