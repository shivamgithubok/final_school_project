import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Student() { 
    return (
        <div className="new_div">
            <div className="new_div_box">
                {[
                    { label: "Total Students" },
                    { label: "Total Faculty" },
                    { label: "Total Staff" },
                ].map((item, index) => (
                    <div key={index} className="">
                        {/* <h2>{item.value}</h2> */}
                        <p>{item.label}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Books() { 
    return (
        <div className="new_div">
            <div className="new_div_box">
                {[
                    { label: "Avaliable Books" },
                    { label: "For Faculty" },
                    { label: "For Student" },
                ].map((item, index) => (
                    <div key={index} className="">
                        {/* <h2>{item.value}</h2> */}
                        <p>{item.label}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Attendance() { 
    return (
        <div className="new_div">
            <div className="new_div_box">
                {[
                    { label: "Mark Attendance" },
                    { label: "Attendance Report" },
                    { label: "For Student" },
                ].map((item, index) => (
                    <div key={index} className="">
                        {/* <h2>{item.value}</h2> */}
                        <p>{item.label}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Fee() { 
    return (
        <div className="new_div">
            <div className="new_div_box">
                {[
                    { label: "Collect Fee" },
                    { label: "Report Fee" },
                    { label: "Total Student" },
                ].map((item, index) => (
                    <div key={index} className="">
                        {/* <h2>{item.value}</h2> */}
                        <p>{item.label}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

function SchoolManagement() {
    const [openDropdown, setOpenDropdown] = useState(null);
    useEffect(() => {
        const sections = document.querySelectorAll(".section_content");
        const subContainer = document.querySelector(".sub_representative");
        const dashboard = document.querySelector(".dashboard"); // Ensure this exists
        const barSection = document.querySelector(".bar_section"); // Ensure this exists
        const sub = document.querySelector(".sub_representative");
        const dashboardElements = document.querySelectorAll(".icon-class");
        // Check for missing DOM elements before adding listeners
        if (!subContainer || !barSection || !dashboard) {
            console.error("One or more DOM elements not found.");
            return;
        }

        // Menu Item Handler using Delegation
        const menuClickHandler = (event) => {
            const target = event.target.closest(".dashboard");
            if (target) {
                const sectionId = `${target.dataset.section}_section`;
                sections.forEach((section) => section.classList.add("hide"));
                document.getElementById(sectionId)?.classList.remove("hide");
            }
        };
        document.addEventListener("click", menuClickHandler);

        // Sub-representative Handler
        // Multiple .dashboard elements

        // Check if elements exist
        if (!sub || dashboardElements.length === 0) {
            console.error("Required DOM elements not found.");
            return;
        }

        // Click Handler for Dashboard Elements
        const dashboardClickHandler = () => {
            sub.classList.toggle("big_dash"); // Toggle the class
        };

        // Add Event Listeners to All Dashboard Elements
        dashboardElements.forEach((dashboard) => {
            dashboard.addEventListener("click", dashboardClickHandler);
        });

        // Sidebar Toggle Handler
        const barClickHandler = () => {
            subContainer.classList.toggle("sub_representative");
        };
        barSection.addEventListener("click", barClickHandler);

        // Cleanup on unmount
        return () => {
            document.removeEventListener("click", menuClickHandler);
            dashboardElements.forEach((dashboard) => {
                dashboard.removeEventListener("click", dashboardClickHandler);
            });
            barSection.removeEventListener("click", barClickHandler);
        };
    }, []);
    const toggleDropdown = (index) => {
        setOpenDropdown((prev) => (prev === index ? null : index));
    };
    return (
        <div>
            {/* Navigation */}
            <nav>
                <ul className="nav_links">
                    <li className="bar_section">
                        <i className="fa-solid fa-bars"></i>
                    </li>
                    <li className="logo_section">
                        <img src="logo.png" alt="logo" />
                    </li>
                    <li className="features_section">
                        <div className="features_section_element">
                            Features
                            <i className="fa-solid fa-caret-down down"></i>
                        </div>
                        <ul className="features_section_list">
                            <li><a href="#">Feature 1</a></li>
                            <li><a href="#">Feature 2</a></li>
                            <li><a href="#">Feature 3</a></li>
                            <li><a href="#">Feature 4</a></li>
                        </ul>
                    </li>
                    <li><Link to="/Help">Help</Link></li>
                    <li><Link to="/Signup"><button className="btn">Sign up</button></Link></li>
                    <li><Link to="/Login"><button className="btn">Login</button></Link></li>
                    <li className="logo_2_section">
                        <img src="logo.png" alt="logo" />
                    </li>
                </ul>
            </nav>

            {/* Main Section */}
            <main className="main_section">
                {/* Sidebar */}
                <div className="sub_representative">
                    <div className="babu">
                    {[
                        { icon: "fa-building-columns", label: "Dashboard", section: "dashboard" },
                        { icon: "fa-person-chalkboard", label: "Student", section: "student" },
                        { icon: "fa-book-open-reader", label: "Books", section: "books" },
                        { icon: "fa-money-bill", label: "Fee", section: "fee" },
                        { icon: "fa-hand", label: "Attendance", section: "attendance" },
                        { icon: "fa-book", label: "Library", section: "library" },
                        { icon: "fa-wallet", label: "Finance", section: "finance" },
                        { icon: "fa-pen", label: "Exams", section: "exams" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="dashboard"
                            data-section={item.section}
                        >   <div className="bap">
                            <i className={`fa-solid ${item.icon}  icon-class`}></i>
                            <div>{item.label}</div>
                            <i className="fa-solid fa-plus" onClick={() => toggleDropdown(index)}></i>
                        </div>
                        {openDropdown === index && item.label === "Student Section" &&(
                                    <Student />
                        )}
                        {openDropdown === index && item.label === "Books" &&(
                                    <Books />
                        )}
                        {openDropdown === index && item.label === "Attendance" &&(
                                    <Attendance />
                        )}
                        {openDropdown === index && item.label === "Fee" &&(
                                    <Fee />
                        )}
                        </div>
                    ))}
                    </div>
                    </div>

                {/* Playground */}
                <div className="play_ground">
                    <div className="play_box">
                        {[
                            { value: 100, label: "Total Students" },
                            { value: 20, label: "Total Faculty" },
                            { value: 15, label: "Total Staff" },
                        ].map((item, index) => (
                            <div key={index} className="box">
                                <h2>{item.value}</h2>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default SchoolManagement;
