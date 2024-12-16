import React, { useState, useEffect } from 'react';
// import './Buffer.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import './Main.css';
import HomeRoute from './HomeRoute';
const Buffer = () => {
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
        <HomeRoute />
      )}
    </div>
  );
};

export default Buffer;
