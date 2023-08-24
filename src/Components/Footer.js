import "./FooterStyle.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "1.2rem" }}
              />
            </div>
            <div>
              <p>Athrwa Colony, Sawarkar Nagar</p>
              <p>Gangapur Road, Nashik</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "1.2rem" }}
              />
              8600486989
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "1.2rem" }}
              />
              Akshaybauskar47@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>You Can Follow Me On</h4>
          <p>
            This is me Akshay Basukar. Hope so my portfolio help you to have an
            idea about my work done till moment. stay tune, Many more to
            Come...!!{" "}
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/akshay.bauskar.1240">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <Link to="https://www.linkedin.com/in/akshay-bauskar-189428197/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
