import React from 'react';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ProfileSection from '../ProfileSection/ProfileSection';

const Sections = () => {
    return (
        <div className="section">
            <WelcomeSection />
            <ProfileSection />
        </div>
    );
}

export default Sections;
