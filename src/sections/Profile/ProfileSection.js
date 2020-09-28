import React from 'react';
import './ProfileSection.css'
import BarChart from '../../components/BarChart/BarChart'
import Competence from '../../components/Competence/Competence';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProfileSection = () => {
    return (
        <section id="profile" className="profile-section">
            <SectionTitle sectionTitle="about" lineColor="#000" />
            <Competence />
            <BarChart />
        </section>
    );
}

export default ProfileSection;
