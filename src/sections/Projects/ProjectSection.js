import React from 'react';
import './ProjectSection.css';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const ProjectSection = () => {
    return (
        <section className="my-project-section">
            <SectionTitle sectionTitle="projects" lineColor="#000" />
            <ProjectContainer />
            <a href="https://github.com/Amin-Mohamed?tab=repositories" className="github">
                View all my projects on Github
            </a>
        </section>
    );
}

export default ProjectSection;
