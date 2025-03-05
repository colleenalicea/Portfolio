import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
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
            <p>Frontend</p>
            <h3>RESUME</h3>
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="container-2">
          <div claasName="name">
            <h2>COLLEEN </h2>
            <h2>ALICEA</h2>
          </div>
          <div className="button-container">
            <ProjectsBtn />
          </div>
        </div>
      </div>

      <div className="container-3">
        <div className="icon-container">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} className="icon-bg" />
          </div>
          <p className="icons-me">904-438-9277</p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon-bg" />
          <p className="icons-me">aliceacolleen3@gmail.com</p>
        </div>
        <div className="icon-container">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-bg" />
          <p className="icons-me">1024 Hood Ave.Jacksonville,Fl,32254</p>
        </div>
      </div>
      <hr class="divider">
        </hr>

    </div>
  );
}
