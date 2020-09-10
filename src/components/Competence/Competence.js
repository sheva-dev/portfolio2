import React from 'react';
import './Competence.css';
import competenceData from '../../data/competenceData.js'
import CompetenceItem from '../CompetenceItem/CompetenceItem';

const Competence = () => {
    return (
        <div className="competence-div">
            {competenceData.map(item => (
                <div className="icon-div" key={item.id * 2}>
                    <div className="circle" key={item.id * 2}>
                        <CompetenceItem
                            key={item.id}
                            icon={item.icon}
                            color={item.color}
                            size={item.size}
                        />
                    </div>
                    <div className="des-div" key={item.id} >
                        <h3 key={item.id} style={{
                            margin: "10px 0 10px 0",
                        }}>{item.title}</h3>
                        <p className="des-p" key={item.id * 2}>{item.des}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Competence;
