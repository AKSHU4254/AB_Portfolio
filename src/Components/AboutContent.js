import { Link } from "react-router-dom";
import "./AboutContentStyle.css";

import React from "react";
import React1 from "../assets/React1.webp";
import React2 from "../assets/React2.jpg"; 

const AboutContent = () => {

   return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
        I am a ReactJS front-end developer who creates creative, responsive, and secure websites for my clients. feel free to contact.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div> 
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
