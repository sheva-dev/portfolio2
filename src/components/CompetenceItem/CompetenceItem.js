import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CompetenceItem = (props) => {
    return (
        <div>
            <FontAwesomeIcon icon={props.icon} color={props.color} size={props.size} />
            <p className="competence-p">{props.des}</p>
        </div>
    );
}

export default CompetenceItem;
