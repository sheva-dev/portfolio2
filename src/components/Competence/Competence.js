import React from 'react';
import './Competence.css';
import competenceData from '../../data/competenceData.js'
import CompetenceItem from '../CompetenceItem/CompetenceItem';

const Competence = () => {
    return (
        <div className="competence-div">
            {competenceData.map(item => (
                <div className="circle" key={item.id * 2}>
                    <CompetenceItem
                        key={item.id}
                        icon={item.icon}
                        color={item.color}
                        size={item.size}
                        des={item.des}
                    />
                </div>
            ))}
        </div>
    );
}

export default Competence;
