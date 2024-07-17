import React from "react";

import personalImageURL from "../images/personalIMG2.jpeg";

function About() {
    return (
        <div className="about container col-xxl-8 px-4 py-3">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={personalImageURL} className="personalImage d-block mx-lg-auto img-fluid" alt="Personal Image" loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                    <h1 className="myName display-5 fw-bold lh-1 mb-3">Hi! I'm Caitlin.</h1>
                    <p className="lead">I found my love for coding in university & discovered an interest in UIUX design along the way.
                        <br/ >
                        Excited by the idea of combining these two skill sets, I have ventured into web development & wish to create beautiful(ly) efficient products for you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;