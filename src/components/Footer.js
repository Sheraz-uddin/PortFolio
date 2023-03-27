import "./Footerstyle.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20}
             style={{ color: "#fff", marginRight: "2rem", marginLeft:"0.7rem" }} />
            <div >
            <p>123 Housing Society.</p>
            <p>Bangladesh.</p>
          </div>
          </div>
          
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-2323-343-23
            </h4>
          </div>
          <div className="gmail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iure
            beatae! Temporibus minus labore quas tempora obcaecati.
          </p>
          <div className="social">
          <FaFacebook
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          <FaLinkedin
            size={30}
            style={{ color: "#fff", marginRight: "1rem" }}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
