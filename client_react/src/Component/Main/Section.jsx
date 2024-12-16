import React from 'react';
import './Main.css';
import laptop from '../../assets/laptop.svg';
import { Link } from 'react-router-dom';
const Section = () => {
  return (
    <>
      <section className="wave_section">
        <div className="wave"></div>
      </section>

      <section id="section_1">
        <img src={laptop} alt="Laptop" />
        <div className="section_1_content">
          <div className="section_1_sub_content">
            <div className="content_element">
              <div className="circle disapear">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
              <a href="#">HOME PAGE</a>
            </div>
            <div className="content_element" id="Fit">
              <div className="circle disapear">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <Link to={'/Feature'}>FEATURES</Link>
            </div>
            <div className="content_element">
              <div className="circle disapear miss_match">
                <i className="fa-regular fa-address-book"></i>
              </div>
              <Link to={'/Contact'}>CONTACT_US</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
