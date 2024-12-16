import React from 'react';
import './Main.css';
const FeatureSection = () => {
  return (
    <section className="feature" id="feature_1">
      <div className="feature_content">
        <div className="feature_title">
          <div className="feature_title_first">SEE MORE FEATURES</div>
          <div className="feature_title_last"></div>
        </div>
        <div className="main_feature_">
          <div className="main_feature_1">
            {Array(4).fill().map((_, index) => (
              <div className="main_content" key={index}>
                <i className="fa-solid fa-house-chimney"></i>
                <h1>Institute info</h1>
                <p>You can set the institute, school logo name which will be shown on the dashboard</p>
              </div>
            ))}
          </div>
          <div className="main_feature_2">
            {Array(4).fill().map((_, index) => (
              <div className="main_content" key={index}>
                <i className="fa-solid fa-house-chimney"></i>
                <h1>Institute info</h1>
                <p>You can set the institute, school logo name which will be shown on the dashboard</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
