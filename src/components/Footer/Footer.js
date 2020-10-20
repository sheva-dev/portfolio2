import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollTop = () => {
        window.scroll({
            top: 0,
            left: 0,
        });
    };

    return (
        <div className="footer">
            <div className="up">
                <Link to="" onClick={scrollTop}>
                    <FontAwesomeIcon className="up-icon" icon={faAngleDoubleUp} size="xs" />
                </Link>
            </div>
            <div className="links">
                <a href="https://github.com/ShevaDev">
                    <FontAwesomeIcon className="icon" icon={faGithub} color="white" size="3x" />
                </a>
                <a href="https://www.linkedin.com/in/amin-m-28b0aa193">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} color="white" size="3x" />
                </a>
                {/* <a href="https://www.linkedin.com/in/amin-m-28b0aa193">
                    <FontAwesomeIcon className="icon" icon={faInstagram} color="white" size="3x" />
                </a> */}
                <a href="https://twitter.com/aminsaid_77">
                    <FontAwesomeIcon className="icon" icon={faTwitter} color="white" size="3x" />
                </a>
            </div>
            <div className="copyright">
                <p>
                    Amin Said <span>&#169;</span>
                    <span style={{ fontSize: "14px", color: "#e31b6d" }}>2020</span>
                </p>
            </div>
        </div>
    );
}

export default Footer;
