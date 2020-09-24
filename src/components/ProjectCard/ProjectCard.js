import React from 'react';
import Button from '../Button/Button';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img className="card-img" src={props.imgUrl} alt="card-img" />
            <div className="overlay">
                <div className="card-disc">
                    <p className="title">{props.title}</p>
                    <p className="disc">{props.disc}</p>
                    <div style={{
                        paddingTop: "20px"
                    }}>
                        <Button url={props.link} text="View on Github" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
