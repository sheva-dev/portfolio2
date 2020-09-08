import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img className="card-img" src={props.imgUrl} alt="card-img" />
            <div className="overlay">
                <div className="card-disc">
                    <p className="title">{props.title}</p>
                    <p className="disc">{props.disc}</p>
                    <a href={props.link} className="card-button">View on Github</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
