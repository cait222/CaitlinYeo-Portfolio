import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
// import Contact from "./Contact";

function Home() {
    return (
        <div id="home">
            <div id="main">
                <Header />
                <About />
                <Skills />
                <Projects />
                {/* <Contact /> */}
            </div>
            <Footer />
        </div>
    );
};

export default Home;