import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import placeholderImgURL from "../images/placeholder.png";
import dancematImgURL from "../images/danceMat_poster.JPG";
import ProjectsWriteUps from "./ProjectsWriteUps";

function DanceMatProject() {
    return (
        <div id="teleaphasia">
            <Header />

            <ProjectsWriteUps projNumber="1" />

            <Footer />
        </div>
    );
};

export default DanceMatProject;
