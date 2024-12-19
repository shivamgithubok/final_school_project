import React, { useState } from 'react';
import './InfoSection.css';
import school1 from '../../assets/login_picture.avif'; // Replace with your image paths
import school2 from '../../assets/sea-arch.png';
import school3 from '../../assets/school_logo_2.jpg';



const InfoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [school1, school2, school3];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="info_section">
      <div className="info_text_top">
        <h1>Explore Our Smart School Features</h1>
        <p>
          Discover cutting-edge tools that make school management effortless.  
          Stay organized, save time, and enhance productivity for your institute.
        </p>
      </div>
      <div className="info_slider_container">
        <button className="slider_btn left" onClick={prevImage}>
          &lt;
        </button>
        <img src={images[currentImage]} alt="Feature" className="full_image" />
        <button className="slider_btn right" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default InfoSection;
