import React from 'react';
import './WelcomeSection.css';
import WelcomeText from '../../components/WelcomeText/WelcomeText';
import WelcomeButton from '../../components/WelcomeButton/WelcomeButton';

const WelcomeSection = () => {
    return (
        <div className="section-1">
            <WelcomeText />
            <WelcomeButton />
        </div>
    );
}

export default WelcomeSection;
