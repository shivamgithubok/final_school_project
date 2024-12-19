import React, { useState, useEffect } from 'react';
import './First.css';
import { Link } from 'react-router-dom';
import doodleImage from './doodle.png'; // Ensure this is the correct path to your image

const First = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading state:", isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  const handleTypeClick = (type) => {
    console.log(type);
  };

  return (
    <div>
      {isLoading ? (
        <div className="buffer_section">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="parent_container">
          <div className="container_home">
            {/* Left Section */}
            <div className="sub_container_1">
              <div className="sub_container_1_element">
                <h3>Login</h3>
                <div className="type_user">
                  <div className="left" onClick={() => handleTypeClick('administrative')}>
                    <div className="type">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <p>Administrative</p>
                  </div>
                  <div className="left" onClick={() => handleTypeClick('faculty')}>
                    <div className="type">
                      <i className="fa-solid fa-users-gear"></i>
                    </div>
                    <p>Faculty</p>
                  </div>
                  <div className="left" onClick={() => handleTypeClick('block')}>
                    <div className="type">
                      <i className="fa-solid fa-user-group"></i>
                    </div>
                    <p>Block</p>
                  </div>
                </div>
                <div className="login_section">
                  <form>
                    <input type="text" name="email" placeholder="Registered Email" required />
                    <input type="password" name="password" placeholder="PASSWORD" required />
                    <button type="submit" className="btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="sub_container_2">
              <div className="sub_containe_2_element">
                <h1>Start Managing Now</h1>
                
                <button className="btn_2">
                  <Link to="/Buffer">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default First;
