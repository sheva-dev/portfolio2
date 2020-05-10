import React from 'react';
import './WelcomeText.css';

const WelcomeText = () => {
    return (
        <div className="welcome-text">
            <p>
                Hi, <span style={{ color: "#fa292a" }}>It's Amin.</span>
                <br />
                <br />
                I'm a full-stack web developer
            </p>
        </div>
    );
}

export default WelcomeText;
