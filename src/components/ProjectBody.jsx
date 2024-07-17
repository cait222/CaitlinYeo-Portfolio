import React from "react";

function ProjectBody(props) {
  let projectInfo = props.projectInfo;

  let solutionParas = projectInfo.solutionParas;
  let solutionBody = solutionParas.map((para) => (
    <p key={para.id}>{para.paraText}</p>
  ));

  return (
    <div className="flex-container colorContainer">
      <div className="flex-container1 projectBody">
        <div className="flex-item sectionTitle">
          <h2>{projectInfo.solutionStatement}</h2>
        </div>
        <div className="flex-item sectionBody">
          <p className="sectionBody">{solutionBody}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBody;