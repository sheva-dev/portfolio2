import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/pro-regular-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="up">
                <a href="#top">
                    <FontAwesomeIcon className="up-icon" icon={faAngleDoubleUp} size="xs" />
                </a>
            </div>
            <div className="links">
                <a href="https://github.com/Amin-Mohamed">
                    <FontAwesomeIcon className="icon" icon={faGithub} color="white" size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/amin-m-28b0aa193">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} color="white" size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/amin-m-28b0aa193">
                    <FontAwesomeIcon className="icon" icon={faInstagram} color="white" size="2x" />
                </a>
            </div>
            <div>
                <p className="copyright">
                    Amin Moahmed <span style={{ ontWeight: "bold" }}>&#169;</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
