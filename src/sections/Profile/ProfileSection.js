import React from 'react';
import './ProfileSection.css'
import BarChart from '../../components/BarChart/BarChart'
import Competence from '../../components/Competence/Competence';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProfileSection = () => {
    return (
        <section id="profile" className="profile-section" style={{height: '100%'}}>
            <SectionTitle sectionTitle="about" lineColor="#000"/>
            <div className="competence">
                <Competence />
            </div>
            <div className="chart-div">
                <BarChart />
            </div>
        </section>
    );
}

export default ProfileSection;
