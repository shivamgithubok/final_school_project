import React from 'react';
import { Link } from 'react-router-dom';

import './Main.css';
const MainSection = () => {
  const falling = () => {
    // Your falling function logic here
    console.log('Falling effect triggered');
  };

  return (
    <main onClick={falling}>
      <div className="container">
        <h1>POWERFUL SCHOOL</h1>
        <h2>MANAGEMENT</h2>
        <p className="main_para">
          Now you can manage your school, college, institute, student record with this application
        </p>
        <button className="main_btn">
          <i className="fa-regular fa-user"></i>Signup for free
        </button>
        <button className="main_btnn">
          <i className="fa-solid fa-arrow-right"></i><Link to="/Home">Learn more</Link>
        </button>
      </div>
    </main>
  );
};

export default MainSection;
