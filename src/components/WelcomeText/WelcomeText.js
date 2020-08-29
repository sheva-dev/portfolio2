import React from 'react';
import './WelcomeText.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from "@fortawesome/pro-solid-svg-icons";

const WelcomeText = () => {
    return (
        <div className="welcome-text">
            <p>
                Hi, <span className="text-span">It's Amin. </span>
                I'm a full-stack web and mobile app developer
            </p>
            {/* <FontAwesomeIcon icon={faCode} color="white"/> */}
        </div>
    );
}

export default WelcomeText;
