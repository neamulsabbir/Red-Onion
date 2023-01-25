import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <img src={logo} alt="" />
          <div className="footer-details">
            <div>
              <Link to="/">About online Food</Link>
              <Link to="/">Read our blog</Link>
              <Link to="/">Sign up to deliver</Link>
            </div>
            <div>
              <Link to="/">Get help</Link>
              <Link to="/">Read faq's</Link>
              <Link to="/">View all cities</Link>
            </div>
          </div>
        </div>

        <div className="copyright-container">
          <p>Copyright &copy; 2023 online food</p>
          <div className="copyright-details">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Pricing</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
