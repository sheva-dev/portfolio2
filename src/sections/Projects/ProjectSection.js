import React from 'react';
import './ProjectSection.css';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';

const ProjectSection = () => {
    return (
        <section className="my-project-section" style={{ height: '100%' }}>
            <h1 style={{ textAlign: "center", paddingTop: "50px" }} >PROJECTS</h1>
            <hr style={{ width: '120px', margin: 'auto', height: "2px", backgroundColor: "#000", marginBottom: "75px" }} />
            <ProjectContainer />
            <a href="https://github.com/Amin-Mohamed?tab=repositories" className="card-button" style={{
                width: "30%",
                margin: "50px"
            }}>View all my projects on Github</a>
        </section>
    );
}

export default ProjectSection;
