import React from "react";
import "./Footer.css"; // make sure this path matches your structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Google Play</h3>
          <ul>
            <li>Play Pass</li>
            <li>Play Points</li>
            <li>Gift cards</li>
            <li>Redeem</li>
            <li>Refund policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Kids & family</h3>
          <ul>
            <li>Parent Guide</li>
            <li>Family sharing</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
          <a href="#">About Google Play</a>
          <a href="#">Developers</a>
          <a href="#">Google Store</a>
        </div>
        <div className="footer-language">Bhutan (English)</div>
      </div>
    </footer>
  );
};

export default Footer;