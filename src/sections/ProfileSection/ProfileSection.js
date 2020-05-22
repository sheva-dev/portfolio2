import React from 'react';
import './ProfileSection.css'
import BarChart from '../../components/BarChart/BarChart'
import Competence from '../../components/Competence/Competence';

const ProfileSection = () => {
    return (
        <div className="profile-section">

            <div className="competence">
                <Competence />
            </div>

            <div className="chart-div">
                <BarChart />
            </div>

        </div>
    );
}

export default ProfileSection;
