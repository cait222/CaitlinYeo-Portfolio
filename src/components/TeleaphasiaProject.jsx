import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import placeholderImgURL from "../images/placeholder.png";
import teleaphasiaImgURL from "../images/aphasia_mcq.JPG";
import ProjectsWriteUps from "./ProjectsWriteUps";

function TeleaphasiaProject() {
    return (
        <div id="teleaphasia">
            <Header />
            
            <ProjectsWriteUps projNumber="0" />

            <Footer />
        </div>
    );
};

export default TeleaphasiaProject;
