import React from 'react';
import './WelcomeSection.css';
import Button from '../../components/Button/Button';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const WelcomeSection = () => {
    return (
        <section className="section-1">
            <div className="welcome-text">
                <p>
                    Hi, <span className="text-span">It's Amin. </span>
                    I'm a full-stack web and mobile app developer
                </p>
            </div>
            <Button url="#profile" icon={faAngleDoubleRight}
                divStyle={{
                    paddingTop: "40px"
                }}
                className="button"
                text="View my work"
            />
        </section>
    );
}

export default WelcomeSection;
