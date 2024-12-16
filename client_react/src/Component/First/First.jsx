import React, { useState, useEffect } from 'react';
import './First.css'; // Import the CSS file
import { Link } from 'react-router-dom';
// import Buffer from '../Main/Buffer';
const First = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Loading state:", isLoading);
    setTimeout(() => {
      setIsLoading(false); // After 2 seconds, hide the loading screen
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
            <div className="sub_container_1">
              <div className="sub_container_1_element">
                {/* <img src="" alt="image" /> */}
                <h3>Login if you are already Registered</h3>
                <div className="type_user">
                  <div className="left">
                    <div className="type" onClick={() => handleTypeClick('administrative')}>
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <p>Administrative</p>
                  </div>
                  <div className="left">
                    <div className="type" onClick={() => handleTypeClick('faculty')}>
                      <i className="fa-solid fa-users-gear"></i>
                    </div>
                    <p>Faculty</p>
                  </div>
                  <div className="left">
                    <div className="type" onClick={() => handleTypeClick('block')}>
                      <i className="fa-solid fa-user-group"></i>
                    </div>
                    <p>Block</p>
                  </div>
                </div>
                <div className="login_section">
                  <form action="your_php_file.php" method="post">
                    <input type="text" name="email" placeholder="Registered Email" required />
                    <input type="password" name="password" placeholder="PASSWORD" required />
                    <button type="submit" className="btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="sub_container_2">
              <div className="sub_containe_2_element">
                <h1>Start Managing Now</h1>
                <p>
                  Join us to explore our intuitive school management website, designed to simplify your experience.
                  Discover efficient tools and seamless navigation to manage school operations effortlessly. Say goodbye
                  to struggles.
                </p>
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
