import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css';

const Button = (props) => {
    return (
        <div className="welocme-button" style={props.divStyle}>
            <a href={props.url} className={props.className} style={props.style}>
                <span className="button-span">{props.text}</span>
                <FontAwesomeIcon className="icon" icon={props.icon} />
            </a>
        </div>
    );
}

export default Button;
