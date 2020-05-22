import React from 'react';
import './WelcomeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const WelcomeButton = () => {
    return (
        <div className="welocme-button">
            <button className="button">
                <span style={{
                    paddingRight: '15px'
                }}
                >View my work</span>
                <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} />
            </button>
        </div>
    );
}

export default WelcomeButton;
