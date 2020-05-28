import React from 'react';
import WelcomeSection from '../Welcome/WelcomeSection';
import ProfileSection from '../Profile/ProfileSection';
import ProjectSection from '../Projects/ProjectSection';
import ContactSection from '../Contact/ContactSection';
import './Sections.css';

const Sections = () => {
    return (
        <div className="sections">
            <WelcomeSection />
            <ProfileSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}

export default Sections;
