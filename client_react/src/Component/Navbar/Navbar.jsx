import React, { useState } from 'react';
import './Main.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <div className="parent_container">
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav-items ${isMenuOpen ? 'open' : ''}`} id="nav-items">
          <div className="nav-item">
            <a href="#" className="anchor">Features</a>
            <div className="dropdown-content">
              <div className="transparent"></div>
              <div className="column">
                <h3>Section 1</h3>
                <p>Content for section 1.</p>
              </div>
              <div className="column">
                <h3>Section 2</h3>
                <p>Content for section 2.</p>
              </div>
              <div className="column">
                <h3>Section 3</h3>
                <p>Content for section 3.</p>
              </div>
            </div>
          </div>
          <div className="nav-item">
          <Link to={'/help'} className="anchor">Help</Link>
          </div>
        </div>
        <div className="auth-buttons">
        <Link to={'/signup'}><button>Signup</button></Link>
        <Link to={'/login'}><button>Login</button></Link>
        </div>
      </div>
    // </div>
  );
};

export default Navbar;
