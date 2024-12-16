import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
import Section from './Section';
import InfoSection from './InfoSection';
import Feature from './Feature';
import Info from './Info';
import Contact from './Contact';
import Footer from './Footer';

function HomeRoute() {
    const [activeSection, setActiveSection] = useState('Section'); // Default section
    const [toggleSidebar, setToggleSidebar] = useState(true); // Sidebar visibility toggle

    const handleSectionChange = (section) => {
        setActiveSection(section); // Update the active section for Main
    };

    const toggleSidebarVisibility = () => {
        setToggleSidebar(!toggleSidebar); // Toggle sidebar visibility
    };

    return (
            <div className="App">
                <div>
                <Navbar />
                {/* <Sidebar toggleSidebar={toggleSidebar} handleSectionChange={handleSectionChange} /> */}
                </div>
                <div>
                <MainSection activeSection={activeSection} handleSectionChange={handleSectionChange} />
                </div>
                <div>
                <Section />
                </div>
                <div>
                <InfoSection />
                </div>
                <div>
                <Feature />
                </div>
                <div>
                <Info />
                </div>
                <div>
                <Contact />
                </div>
                <div>
                <Footer />
                </div>
            </div>
    );
}

export default HomeRoute;
