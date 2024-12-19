import React from "react";
import "./Query.css";
import cityImage from "../../assets/line-city.svg"; // Correct path to your image

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="contact_container">
        {/* Left - Query Form */}
        <div className="query_form_container">
          <h2>Have a Query?</h2>
          <p>Send us your questions and we’ll get back to you as soon as possible.</p>
          <form className="query_form">
            <div className="form_group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form_group">
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
            </div>
            <textarea placeholder="Enter Your Query Here..."></textarea>
            <button type="submit" className="submit_btn">Submit</button>
          </form>
        </div>

        {/* Right - Contact Information */}
        <div className="contact_info_container">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@campuslink.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Location:</strong> 123 School Road, Cityville, USA</p>
          <img src={cityImage} alt="City Skyline" className="contact_image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
