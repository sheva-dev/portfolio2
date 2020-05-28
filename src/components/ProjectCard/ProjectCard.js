import React from 'react';
import './ProjectCard.css';
import { BrowserRouter as Link } from "react-router-dom"
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ProjectCard = (props) => {
    return (
        <div className="project-cards">
            <Flippy
                flipOnHover={true}
                flipOnClick={false}
                flipDirection="horizontal"
                style={{  }}>
                <FrontSide style={{ backgroundColor:"red" }}>
                    <img className="card-img" src={props.imgUrl} alt="" />
                </FrontSide>
                <BackSide style={{ backgroundColor:"blue" }}>>
                    <div>
                        <p className="card-title">{props.title}</p>
                        <Link to={props.projectLink}>
                            <button className="card-link">
                                {props.buttonName}
                            </button>
                        </Link>
                    </div>
                </BackSide>
            </Flippy>
        </div>
    );
}

export default ProjectCard;
