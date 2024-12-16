import React from "react";
import "./Main.css"; // Import corresponding CSS for styling
import line from '../../assets/line-city.svg';
const Contact = () => {
  return (
    <section className="Contact">
      <div className="sub_contact">
        {/* Contact Form */}
        <div className="sub_contact_element">
          <form action="">
            <div className="form_element">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form_element">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea name="area" id="area" placeholder="Enter Message"></textarea>
            <button>Submit</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="sub_contact_element">
          <div className="some_extra_contact">
            <div className="sub_contact_email">Email</div>
            <div className="sub_contact_location">Location</div>
            <div className="sub_contact_phone">Phone</div>
          </div>
          <div className="some_extra_contact">
            <p className="Email hide"></p>
            <p className="Location hide"></p>
            <p className="Phone hide"></p>
          </div>

          <img src={line} alt="City" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
