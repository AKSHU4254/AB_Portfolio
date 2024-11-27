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
        Working as full stack developer with 2.6 yr of experience of web domain, where i worked on E commerce website and web application.
        Tech skack usd on this journey is HTML, CSS, Javascript, React, Node, Express, MongoDB. where i working continues improvement in my knowleadge. 
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
