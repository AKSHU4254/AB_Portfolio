import { Link } from "react-router-dom";
import "./AboutContentStyle.css";

import React from "react";
import React1 from "../assets/React1.webp";
import React2 from "../assets/React2.jpg"; 
import Resume from "../assets/Resumeimg.jpg"

const AboutContent = () => {

   return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
          I am react front-end developer. i create responsive secure website for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    <div className="center">
          <h1>Resume</h1>
          <a href=""><img src={Resume} alt="" className="img"></img>
            
          </a>
          <Link to="">
            <button className="btn">Download</button>
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
