import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function SchoolManagement() {
    React.useEffect(() => {
        const sections = document.querySelectorAll('.section_content');
        const menuItems = document.querySelectorAll('.sub_representative_icon a');

        menuItems.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                sections.forEach(section => section.classList.add('hide'));
                document.getElementById(`${item.id}_section`).classList.remove('hide');
            });
        });

        const barSection = document.querySelector('.bar_section');
        const subContainer = document.querySelector('.sub_representative');
        barSection.addEventListener('click', () => {
            if (subContainer.style.display === 'block') {
                subContainer.style.display = 'none';
            } else {
                subContainer.style.display = 'block';
            }
        });
    }, []);

    return (
        <div>
            <nav>
                <ul className="nav_links">
                    <li className="bar_section">
                        <i className="fa-solid fa-bars"></i>
                    </li>
                    <li className="logo_section">
                        <img src="logo.png" alt="logo" />
                    </li>
                    <li className="empty"></li>
                    <li className="features_section">
                        <div className="features_section_element">
                            Features
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <ul className="features_section_list">
                            <li><a href="#">Feature 1</a></li>
                            <li><a href="#">Feature 2</a></li>
                            <li><a href="#">Feature 3</a></li>
                            <li><a href="#">Feature 4</a></li>
                        </ul>
                    </li>
                    <li className="help_section">
                        <Link to={'/Help'} />
                    </li>
                    <li className="empty_1"></li>
                    <li className="empty_1"></li>
                    <li className="empty"></li>
                    <li><Link to={'/Signup'}><button className="btn">Sign up</button></Link></li>
                    <li><Link to={'/Login'}><button className="btn">Login</button></Link></li>
                    <li className="logo_2_section">
                        <img src="logo.png" alt="logo" />
                    </li>
                </ul>
            </nav>
            <main className='main_section'>
                <div className="sub_representative">
                    <div className="sub_representative_icon">
                        <a className="anchor_1" href="#" id="dashboard"><i className="fa-solid fa-building-columns"></i><span>Dashboard</span></a>
                        <a className="anchor_1" href="#" id="student"><i className="fa-solid fa-person-chalkboard"></i><span>Student Section</span></a>
                        <a className="anchor_1" href="#" id="books"><i className="fa-solid fa-book-open-reader"></i><span>Books</span></a>
                        <a className="anchor_1" href="#" id="fee"><i className="fa-solid fa-money-bill"></i><span>Fee</span></a>
                        <a className="anchor_1" href="#" id="attendance"><i className="fa-solid fa-hand"></i><span>Attendance</span></a>
                        <a className="anchor_1" href="#" id="library"><i className="fa-solid fa-book"></i><span>Library</span></a>
                        <a className="anchor_1" href="#" id="finance"><i className="fa-solid fa-wallet"></i><span>Finance</span></a>
                        <a className="anchor_1" href="#" id="staff"><i className="fa-solid fa-person-chalkboard"></i><span>Staff</span></a>
                        <a className="anchor_1" href="#" id="exams"><i className="fa-solid fa-pen"></i><span>Exams</span></a>
                    </div>
                </div>
                <div className="play_ground">
                    <div className="play_box">
                        <div className="box">
                            <h2 id="totalStudents">100</h2>
                            <p>Total Students</p>
                        </div>
                        <div className="box">
                            <h2 id="totalFaculty">20</h2>
                            <p>Total Faculty</p>
                        </div>
                        <div className="box">
                            <h2 id="totalStaff">15</h2>
                            <p>Total Staff</p>
                        </div>
                    </div>
                </div>
                <div className="sub_representative_second">
                    <div className="outliner">
                        <div id="dashboard_section" className="hide"></div>
                        <div id="student_section" className="section_content hide">
                            <div className="student_sub_container student_deco">
                                <div className="student_element">All Student</div>
                                <div className="student_element">Add New</div>
                                <div className="student_element">Manage Families</div>
                                <div className="student_element">Active/Inactive</div>
                                <div className="student_element">Admission Letter</div>
                                <div className="student_element">Student ID Card</div>
                                <div className="student_element">Print Basic List</div>
                                <div className="student_element">Promote Student</div>
                            </div>
                        </div>
                        <div id="attendance_section" className="section_content hide">
                            <div className="student_sub_container student_deco">
                                <div className="student_element"><a href="attendence.html">Mark Student Attendance</a></div>
                                <div className="student_element">Mark Employee Attendance</div>
                                <div className="student_element">Class wise Report</div>
                                <div className="student_element">Students Attendance Report</div>
                                <div className="student_element">Employees Attendance Report</div>
                            </div>
                        </div>
                        <div id="fee_section" className="section_content hide">
                            <div className="student_sub_container student_deco">
                                <div className="student_element">Generate Bank Challan</div>
                                <div className="student_element">Collect Fee</div>
                                <div className="student_element">Fee Slip</div>
                                <div className="student_element">Fee Structure</div>
                                <div className="student_element">Fee Report</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SchoolManagement;
