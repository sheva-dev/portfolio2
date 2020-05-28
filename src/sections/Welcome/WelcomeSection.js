import React from 'react';
import './WelcomeSection.css';
import WelcomeText from '../../components/WelcomeText/WelcomeText';
import WelcomeButton from '../../components/WelcomeButton/WelcomeButton';

const WelcomeSection = () => {
    return (
        <section className="section-1">
            <WelcomeText />
            <WelcomeButton />
        </section>
    );
}

export default WelcomeSection;
