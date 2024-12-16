import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Sidebar({ toggle, handleSectionChange }) {
    return (
        <div className="sub_representative" style={{ display: toggle ? 'block' : 'none' }}>
            <div className="sub_representative_icon">
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('dashboard')}>
                    <i className="fa-solid fa-building-columns"></i><span>Dashboard</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('student')}>
                    <i className="fa-solid fa-person-chalkboard"></i><span>Student Section</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('books')}>
                    <i className="fa-solid fa-book-open-reader"></i><span>Books</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('fee')}>
                    <i className="fa-solid fa-money-bill"></i><span>Fee</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('attendance')}>
                    <i className="fa-solid fa-hand"></i><span>Attendance</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('library')}>
                    <i className="fa-solid fa-book"></i><span>Library</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('finance')}>
                    <i className="fa-solid fa-wallet"></i><span>Finance</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('staff')}>
                    <i className="fa-solid fa-person-chalkboard"></i><span>Staff</span>
                </Link>
                <Link className="anchor_1" to="#" onClick={() => handleSectionChange('exams')}>
                    <i className="fa-solid fa-pen"></i><span>Exams</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
