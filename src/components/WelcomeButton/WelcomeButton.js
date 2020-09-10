import React from 'react';
import './WelcomeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/pro-regular-svg-icons'

const WelcomeButton = () => {
    return (
        <div className="welocme-button">
            <a href="#profile" className="button">
                <span style={{
                    paddingRight: '15px'
                }}
                >View my work</span>
                <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
            </a>
        </div>
    );
}

export default WelcomeButton;
