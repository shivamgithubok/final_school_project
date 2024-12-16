import React from "react";
import './Main.css';
const Footer = () => {
  return (
    <footer>
      <div className="icon_section">
        <a href="#">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>

      <div className="signup_sub_level">
        <h2>Signup for your newsletter</h2>
        <input type="email" placeholder="Enter email" />
        <input type="text" placeholder="Enter name" />
        <button>Subscribe</button>
      </div>

      <div className="link_section">
        <ul className="sub_link">
          <li className="sub_parent_link">LINK_1</li>
          <li className="sub_child_link">
            <a href="#">link0</a>
          </li>
          <li className="sub_child_link">
            <a href="#">link1</a>
          </li>
          <li className="sub_child_link">
            <a href="#">link2</a>
          </li>
        </ul>
        <ul className="sub_link">
          <li className="sub_parent_link">LINK_2</li>
          <li className="sub_child_link">
            <a href="#">link0</a>
          </li>
          <li className="sub_child_link">
            <a href="#">link1</a>
          </li>
          <li className="sub_child_link">
            <a href="#">link2</a>
          </li>
        </ul>
        <ul className="sub_link">
          <li className="sub_parent_link">LINK_3</li>
          <li className="sub_child_link">
            <a href="#">link0</a>
          </li>
          <li className="sub_child_link">
            <a href="#">link1</a>
          </li>
          <li className="sub_child_link">
            <a href="#">link2</a>
          </li>
        </ul>
      </div>

      <div id="Copy"></div>
    </footer>
  );
};

export default Footer;
