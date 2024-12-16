import React from 'react';
import './Main.css';
import school from '../../assets/school.png'
const InfoSection = () => {
  return (
    <section className="info">
      <div className="feature_title">
        <div className="feature_title_first"></div>
        <div className="feature_title_last"></div>
      </div>
      <div className="info_content_main">
        <div className="info_content">
          <h1>INSTITUTE INFO</h1>
          <p>
            Managing any educational institute is not a piece of cake. Managing students, staff, timetable, exams,
            class test, attendance, fees collection, accounts, etc. It does not end here. Parents are always worried
            about their child's performance and they need satisfaction. They care about their child's academic
            statistics. Moreover, we have seen schools using huge registers to mark the attendance of their students
            and staff. And we have also seen that schools manage their admission, exams data, class tests data, etc,
            manually. We know it takes a lot of time and is very difficult to manage.
            Well! it's time to put a check on these worries. _____ presents you a free online school management
            software to make conventional tasks easier. This is the one-stop solution to manage, track, and record
            everything within your school or organization. Our free online school management software includes
            admin, staff and students panel, exams module, attendance module, fees collection module, salary and
            expense management, class tests management, inventory management, students and staff data record
            system, and many more. It is very easy to use and manage because Eskooly is a free online school
            management software for end-users. If you can send an email, you can use _____.
          </p>
          <div className="main_button_container">
            <button className="info_btn">
              <i className="fa-solid fa-arrow-right"></i> Get started for free
            </button>
            <div>right now</div>
          </div>
        </div>
        <div className="info_img">
          <img src={school} alt="School Logo" />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
