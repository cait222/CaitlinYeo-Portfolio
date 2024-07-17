import React from "react";
import ProjectSkillBubble from "./ProjectSkillBubble"

function ProjectIntro(props) {
    let projectInfo = props.projectInfo;

    let problemParas = projectInfo.problemParas;
    let problemBody = problemParas.map((para) => (
        <p key={para.id}>{para.paraText}</p>
    ));

    return (
        <div className="flex-container colorContainer">

            <div className="flex-container2 projectHead">

                <div className="flex-container1 projectIntro">
                    <div className="flex-item projectTitle">
                        <h1>{projectInfo.projectTitle}</h1>
                    </div>
                    <div className="flex-item projectSkills">
                        <h3>Skills: </h3>
                        <ProjectSkillBubble skills={projectInfo.skills} />
                    </div>
                </div>

                <div className="flex-item projectVid">
                    <video width="480" height="270" controls>
                        <source src={projectInfo.vidURL} type="video/mp4" />
                    </video>
                </div>

            </div>

            <div className="flex-container1 projectProblem">
                <div className="flex-item sectionTitle">
                    <h2 className="sectionTitle">{projectInfo.problemStatement}</h2>
                </div>
                <div className="flex-item sectionBody">
                    <p className="sectionBody">{problemBody}</p>
                </div>
            </div>
        </div>

    );
}

export default ProjectIntro;