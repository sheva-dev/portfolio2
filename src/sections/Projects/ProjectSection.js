import React from 'react';
import './ProjectSection.css';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';

const ProjectSection = () => {
    return (
        <section className="my-project-section">
            <h1 style={{ textAlign: "center" }} >Projects</h1>
            <ProjectContainer />
        </section>
    );
}

export default ProjectSection;
