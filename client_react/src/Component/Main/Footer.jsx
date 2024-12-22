import React from "react";
import './Main.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Icons */}
      <div className="footer_social">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-github"></i></a>
      </div>

      {/* Newsletter Section */}
      <div className="footer_newsletter">
        <h2>Sign up for our Newsletter</h2>
        <div className="newsletter_form">
          <input type="email" placeholder="Enter your email" className="input_box" />
        
          <button className="subscribe_btn">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
