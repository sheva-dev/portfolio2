import React from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
    return (
        <div className="section-title">
            <p>{props.sectionTitle}</p>
            <hr style={{background:props.lineColor}} className="section-title-line"/>
        </div>
    );
}

export default SectionTitle;
