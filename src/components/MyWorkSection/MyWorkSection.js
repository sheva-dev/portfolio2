import React from 'react';
import BarChart from '../BarChart/BarChart'
import './MyWorkSection.css'

const MyWorkSection = () => {
    return (
        <div className="my-work-section">
            <div className="info">
                info here
            </div>
            <div className="chart-div">
                <BarChart />
            </div>
        </div>
    );
}

export default MyWorkSection;
