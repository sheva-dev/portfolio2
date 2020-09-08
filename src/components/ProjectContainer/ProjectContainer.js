import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projectCardsData from '../../data/projectCardsData';
import './ProjectContainer.css';

const ProjectContainer = () => {
    return (
        <div className="project-container">
            {projectCardsData.map(card => (
                <ProjectCard
                    key={card.id}
                    imgUrl={card.imgUrl}
                    title={card.title}
                    projectLink={card.projectLink}
                    disc={card.disc}
                />
            ))}
        </div>
    );
}

export default ProjectContainer;
