import React from 'react';
import './ProjectSection.css';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';

const ProjectSection = () => {
    return (
        <section className="my-project-section">
            <h1 style={{ textAlign: "center", paddingTop:"50px"}} >PROJECTS</h1>
            <hr style={{width:'120px', margin:'auto', height:"2px", backgroundColor:"#000"}} />
            <ProjectContainer />
        </section>
    );
}

export default ProjectSection;
