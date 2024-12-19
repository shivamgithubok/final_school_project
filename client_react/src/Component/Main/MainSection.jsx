import React from 'react';
import { Link } from 'react-router-dom';
import './Main_1.css';
import backgroundImage from './kids2.jpg'; // Correct background image path

const MainSection = () => {
  return (
    <main>
      <div className="content">
        <h1>Connecting every part of the campus.</h1>
        <h2> </h2>

        {/* Centered Button */}
        <Link to="/Home" className="learn-more-btn">
          <i className="fa-solid fa-arrow-right"></i> Get Started
        </Link>
      </div>
    </main>
  );
};

export default MainSection;
