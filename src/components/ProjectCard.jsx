import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard(props) {
    const navigate = useNavigate();

    let projects = props.projects;
    let projectsList = projects.map(project =>
        <div key={project.id} className="projectCard">
            <div className="col">
                <div className="card shadow-sm">
                    <img className="projectPicture" src={project.cardImage} />
                    <div className="card-body">
                        <h3 className="card-title">{project.cardTitle}</h3>
                        <p className="card-text">{project.cardText}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button onClick={() => window.open(project.siteLink, "_self")} type="button" className="btn btn-sm btn-outline-secondary">View Project</button>
                                {/* <button onClick={() => navigate(project.codeLink)} type="button" className="btn btn-sm btn-outline-secondary">View Code</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (projectsList);
};

export default ProjectCard;