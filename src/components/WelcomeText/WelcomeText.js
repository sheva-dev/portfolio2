import React from 'react';
import './WelcomeText.css';

const WelcomeText = () => {
    return (
        <div className="welcome-text">
            <h2>
                Hi, <span className="text-span">It's Amin.</span>
                I'm a full-stack web
                <br />
                and mobile app developer
            </h2>
        </div>
    );
}

export default WelcomeText;
