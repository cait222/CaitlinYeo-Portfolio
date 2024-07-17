import React from "react";

function SkillBubble(props) {
    let skills = props.skills;
    let skillsList = skills.map(skill =>
        <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6">
            {/* <svg className="bd-placeholder-img rounded-circle" width="100" height="100" xmlns={skill.imageURL} role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg> */}
            <img className="skillPicture" src={skill.imageURL} />
            <h3 className="fw-normal">{skill.name}</h3>
        </div>
    );
    return(skillsList);
};

export default SkillBubble;