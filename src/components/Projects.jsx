import React from "react";
import ProjectCard from "./ProjectCard";
import WakabuImgURL from "../images/Wakabu_landingPage.png";
// import placeholderImgURL from "../images/placeholder.png";
import dancematImgURL from "../images/danceMat.JPG";
import teleaphasiaImgURL from "../images/aphasia_VN.png";

let projectsList = [
    {
        id: 1,
        cardImage: WakabuImgURL,
        cardTitle: "Wakabu project",
        cardText: "A solution for encouraging mental health help-seeking behaviours in youths.",
        siteLink: "https://wakabuteam.wixsite.com/wakabu",
        codeLink: "noLink"
    },
    {
        id: 2,
        cardImage: teleaphasiaImgURL,
        cardTitle: "Teleaphasia project",
        cardText: "Tele-rehab solution for speech therapists to assign & assess at-home exercises for their patients.",
        siteLink: "https://cait222.github.io/Personal-Site/#/teleaphasia",
        codeLink: "noLink"
    },
    {
        id: 3,
        cardImage: dancematImgURL,
        cardTitle: "Elderly dance mat project",
        cardText: "A dance mat catered to the elderly to promote physical activity in a safe & fun way.",
        siteLink: "https://cait222.github.io/Personal-Site/#/dancemat",
        codeLink: "noLink"
    }
];

function Projects() {
    return (
        <div id="projectSection" className="projects album py-3">
            <div className="d-flex p-3 justify-content-center">
                <h1 id="projSectionHeader">My Projects</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    <ProjectCard projects={projectsList} />
                </div>
            </div>
        </div>

    );
};

export default Projects;