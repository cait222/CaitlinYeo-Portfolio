import React from "react";

function ProjectImages(props) {
  let projectInfo = props.projectInfo;
  let projectImageURLs = projectInfo.imageGallery;

  let images = projectImageURLs.map((img) => (
    <div key={img.id} className="projectImage">
      <img className="projectImage" src={img.imageURL} />

      <span className="enlargedProjectImage">
        <img className="enlargedProjectImage" src={img.imageURL} />
        <p className="imgCaption">{img.caption}</p>
      </span>
    </div>
  ));

  return <div className="flex-container projectImageGallery">{images}</div>;
}

export default ProjectImages;