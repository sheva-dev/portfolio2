import React from 'react';
import './Competence.css';
import competenceData from '../../data/competenceData.js'
import CompetenceItem from '../CompetenceItem/CompetenceItem';

const Competence = () => {
    return (
        <div className="competence-div">
            {competenceData.map(item => (
                <div className="competence-item" key={item.id * 2}>
                    <div className="icon-div" key={item.id * 2}>
                        <CompetenceItem
                            key={item.id}
                            icon={item.icon}
                            color={item.color}
                            size={item.size}
                        />
                    </div>
                    <div className="des-div" key={item.id} >
                        <p key={item.id} style={{
                            margin: "15px 0 10px 0",
                            fontSize: "22px",
                            fontWeight: 600
                        }}>{item.title}</p>
                        <p className="des-p" key={item.id * 2}>{item.des}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Competence;
