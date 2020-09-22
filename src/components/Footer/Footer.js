import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

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
            <div className="copyright">
                <p>
                    Amin Moahmed <span>&#169;</span>
                    <span style={{ fontSize: "14px", color: "#e31b6d" }}>2020</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
