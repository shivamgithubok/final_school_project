import React from 'react';
import './Main.css';
import featureImage from '../../assets/features.jpg';

const Section = () => {
  return (
    <section id="section_1">
      {/* Feature Cards - Left Side */}
      <div className="features_container">
        <div className="feature_card">
          <div className="feature_icon">✅</div>
          <div className="feature_text">
            <strong>Attendance Management</strong>
            <p>Track real-time attendance with accuracy.</p>
          </div>
        </div>

        <div className="feature_card">
          <div className="feature_icon">📚</div>
          <div className="feature_text">
            <strong>Student Records</strong>
            <p>Manage academic and personal details efficiently.</p>
          </div>
        </div>

        <div className="feature_card">
          <div className="feature_icon">🧑‍🏫</div>
          <div className="feature_text">
            <strong>Faculty Management</strong>
            <p>Handle teachers' schedules and performance.</p>
          </div>
        </div>

        <div className="feature_card">
          <div className="feature_icon">📨</div>
          <div className="feature_text">
            <strong>Parent Communication</strong>
            <p>Send timely updates and notifications to parents.</p>
          </div>
        </div>

        <div className="feature_card">
          <div className="feature_icon">📅</div>
          <div className="feature_text">
            <strong>Exam Scheduling</strong>
            <p>Effortlessly schedule and manage examinations.</p>
          </div>
        </div>

        <div className="feature_card">
          <div className="feature_icon">📖</div>
          <div className="feature_text">
            <strong>Library Management</strong>
            <p>Keep track of issued and returned books.</p>
          </div>
        </div>
      </div>

      {/* Feature Image - Right Side */}
      <div className="feature_image">
        <img src={featureImage} alt="Features Illustration" />
      </div>
    </section>
  );
};

export default Section;
