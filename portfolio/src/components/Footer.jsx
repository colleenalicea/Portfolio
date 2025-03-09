import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({img}) => {
  return (
    <footer style={footerStyle}>
      <div className="icon-containers">
        <a
          href="https://github.com/colleenalicea/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/colleenalicea"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} style={iconStyle} />
        </a>
      </div>
      <img src={img} alt="stickers" />
    </footer>
  );
};

const footerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "20px",
};

const iconStyle = {
  margin: "0 15px",
  color: "",
  transition: "color 0.3s",
};


export default Footer;
