import React from 'react';
import './Main.css';
import logo1 from '../../assets/public_school.png'; // Replace with actual logos
import logo2 from '../../assets/public_school.png';
import logo3 from '../../assets/public_school.png';
import logo4 from '../../assets/public_school.png';


const schoolData = [
  {
    id: 1,
    logo: logo1,
    name: 'Greenwood High School',
    comment: 'Excellent management system for students and staff!',
  },
  {
    id: 2,
    logo: logo2,
    name: 'Bright Future Academy',
    comment: 'Streamlined attendance and fee management.',
  },
  {
    id: 3,
    logo: logo3,
    name: 'Skyline International School',
    comment: 'A powerful tool to organize daily operations.',
  },
  {
    id: 4,
    logo: logo4,
    name: 'Star Valley Public School',
    comment: 'Simplified communication and reporting.',
  },
];

const FeatureSection = () => {
  return (
    <section className="feature" id="feature_1">
      {/* Title and Subtitle */}
      <div className="feature_title">
        <div className="feature_title_first">Trusted by Leading Schools</div>
      </div>

      {/* Cards Section */}
      <div className="main_feature_grid">
        {schoolData.map((school) => (
          <div className="school_card" key={school.id}>
            <img src={school.logo} alt={`${school.name} Logo`} className="school_logo" />
            <h2 className="school_name">{school.name}</h2>
            <p className="school_comment">"{school.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection
