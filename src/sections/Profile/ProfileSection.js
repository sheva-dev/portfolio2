import React from 'react';
import './ProfileSection.css'
import BarChart from '../../components/BarChart/BarChart'
import Competence from '../../components/Competence/Competence';

const ProfileSection = () => {
    return (
        <section className="profile-section">
            <h1 style={{ textAlign: "center", paddingTop:"50px"}} >ABOUT</h1>
            <hr style={{width:'110px', margin:"0px",height:"2px", backgroundColor:"#000"}} />
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
