import React from "react";
import "./Main.css"; // Import corresponding CSS for styling
import onlineClass from "../../assets/online-class.png";
import water from "../../assets/water.png";
const Info = () => {
  return (
    <section className="info">
      {/* First Info Content */}
      <div className="info_content_main">
        <div className="info_img_1">
          <img src={onlineClass} alt="Online Class" />
        </div>
        <div className="info_content">
          <h1>Live Class</h1>
          <p>
            Designed to create an interactive and engaging virtual classroom environment, it allows teachers to
            conduct lessons in real-time, ensuring a seamless learning experience for students. With
            high-quality video and audio, screen sharing, and interactive whiteboards, educators can deliver
            content effectively while students participate actively through live chat and Q&A sessions. Our
            platform also supports recording sessions, enabling students to revisit lessons anytime. By
            integrating advanced scheduling, attendance tracking, and performance analytics, our live class
            feature enhances the overall educational experience, making remote learning more efficient and
            impactful.
          </p>
          <div className="main_button_container">
            <button className="info_btn">
              <i className="fa-solid fa-arrow-right"></i> get started for free
            </button>
            <div>right now</div>
          </div>
        </div>
        <div className="info_img_1">
        <img src={onlineClass} alt="Online Class" />
        </div>
      </div>

      {/* Second Info Content */}
      <div className="info_content_main some_gap">
        <div className="info_content">
          <h1>Available IN Language</h1>
          <p>
            Welcome to our School Management Website, exclusively available in English. Our platform simplifies
            administrative tasks, streamlines communication, and enhances the overall educational
            experience. With features like student and staff management, attendance tracking, grade book management, and
            fee
            collection, we provide a comprehensive solution for schools. Our user-friendly interface ensures
            easy navigation for administrators, teachers, and parents. Real-time updates and notifications keep
            everyone informed and connected. We help schools operate more efficiently, saving time and
            resources, allowing educators to focus on what matters most: providing quality education to
            students. Experience the future of school management with us!
          </p>
          <div className="main_button_container">
            <button className="info_btn">
              <i className="fa-solid fa-arrow-right"></i> get started for free
            </button>
            <div>right now</div>
          </div>
        </div>
        <div className="info_img_1">
          <img src={water} alt="Water" />
        </div>
      </div>
    </section>
  );
};

export default Info;
