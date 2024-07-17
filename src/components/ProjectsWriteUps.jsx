import React from "react";
import ProjectIntro from "./ProjectIntro";
import ProjectBody from "./ProjectBody";
import ProjectImages from "./ProjectImages";

import PythonImg from "../images/Python_logo.png";
import PHPImg from "../images/PHP_logo.png";
import SwiftImg from "../images/Swift_logo.png";
import RaspberryPiImg from "../images/RaspberryPi_logo.png";

import TeleaphasiaMCQ from "../images/aphasia_mcq.JPG";
import TeleaphasiaVN from "../images/aphasia_VN.png";
import TeleaphasiaMenu from "../images/aphasia_menu.png";

import DanceMatPoster from "../images/danceMat_poster.JPG";
import DanceMatPrototype from "../images/danceMat_prototype.JPG";
import DanceMatTesting from "../images/danceMat_testing.JPG";

import TeleaphasiaVidURL from "../videos/teleaphasia_demo.mp4";
import DanceMatVidURL from "../videos/danceMat_testSession.MP4";


let projectsWriteUps = [
    {
        id: 1,
        projectTitle: "Aphasia Telerehab",
        skills: [
            { id: 1, imageURL: PythonImg, name: "Python" },
            { id: 2, imageURL: PHPImg, name: "PHP" },
            { id: 3, imageURL: SwiftImg, name: "Swift" }
        ],
        vidURL: TeleaphasiaVidURL,
        problemStatement: "The Problem",
        problemParas: [
            { id: 1, paraText: "For my capstone project of the 2nd major in Innovation & Design, I decided to work on a telerehab solution for Aphasia patients & speech therapists. Aphasia is a language disorder that impairs a patient's ability to communicate as they may struggle with comprehension, reading, writing and/or speaking. Thus, patients would seek treatment with a speech therapist." },
            { id: 2, paraText: "Speech therapists gather & prepare learning materials relevant to each patient that they will go over with the patient during face-to-face sessions. In addition, they may prescribe homework for the patient to practice at home. Unfortunately, the therapist is unable to monitor whether the patient is practicing consistently at home & unable to track their progress until they meet at the next session. This often results in slower learning progress & the therapist is required to spend more time going over previous lessons, in turn leading to burnout & frustration for both parties." }
        ],
        solutionStatement: "The Solution",
        solutionParas: [
            { id: 1, paraText: "My teammate & I, under the guidance of our professor, aimed to build an app through which speech therapists can prescribe their patients various language exercises as well as track when they are completed & how well they scored. Additionally, the speech therapist can log into a server which could help them create some practice materials automatically, reducing the time & effort needed for manual creation of such materials." },
            { id: 2, paraText: "I built a Python code to parse a list of verb-noun pairings. To generate a multiple choice question, the code may pick a verb & its appropriately matching noun, along with 3 other non-matching nouns. The patient's task would then be to answer such multiple choice questions to the best of their abilities." },
            { id: 3, paraText: "I learnt to code with PHP to build a functioning server that would take in several inputs such as how many multiple choice questions the speech therapist wishes to generate. The Python code would then be called & generate the list of questions for the therapist." },
            { id: 4, paraText: "Swift was also used to create the app interface which the patient would interact with to complete their assigned exercises." }
        ],
        imageGallery: [
            { id: 1, imageURL: TeleaphasiaMCQ, caption: "App interface for multiple choice question" },
            { id: 2, imageURL: TeleaphasiaVN, caption: "Example of randomised verb-noun matching question" },
            { id: 3, imageURL: TeleaphasiaMenu, caption: "Menu of proposed features for app" }
        ]
    },
    {
        id: 2,
        projectTitle: "Elderly Dance Mat",
        skills: [
            { id: 1, imageURL: PythonImg, name: "Python" },
            { id: 2, imageURL: RaspberryPiImg, name: "Raspberry Pi" }
        ],
        vidURL: DanceMatVidURL,
        problemStatement: "The Problem",
        problemParas: [
            {id: 1, paraText: "I took a module on gerontechnology in university & our each of our teams were assigned to a senior care centre. My team worked with SASCO@Compassvale to discover what the needs & wants of the elderly were & what product we could create for them."},
            {id: 2, paraText: "After several rounds of interviews, it was clear that the elderly did not require our help to perform functional day-to-day tasks, but many expressed that they would like some activity which would stimulate them mentally & help them build up some physical strength, specifically in their legs for better mobility."}
        ],
        solutionStatement: "The Solution",
        solutionParas: [
            {id: 1, paraText: "My team soon became inspired by the game Dance Dance Revolution. This game displayed a random series of arrows (pointing up, down, left or right) on a screen in time to some music. Players will have to step on buttons on the floor with the corresponding arrow in order to score points. Not only would this game require the elderly to move their lower bodies, it would help sharpen their eye-foot coordination while the music can reduce their stress & anxiety & make the game more enjoyable."},
            {id: 2, paraText: "We created a mat with a non-slip surface & capacitive sensor under the arrows. Whenever a button was pressed, the capacitive sensors sent the input to a Raspberry Pi which contains a Python code that played the music, generated the series of arrows & scored the player's performance."},
            {id: 3, paraText: "Unity allowed us to generate a more sophisticated game display with arrows falling from the top of the screen & to create a leaderboard."}
        ],
        imageGallery: [
            { id: 1, imageURL: DanceMatPoster, caption: "Poster of problem, solution & features of dance mat" },
            { id: 2, imageURL: DanceMatPrototype, caption: "Prototyping the mat with Raspberry Pi, sensors & foam boards" },
            { id: 3, imageURL: DanceMatTesting, caption: "Testing the prototype with the elderly at SASCO" }
        ]
    },
];

function ProjectsWriteUps(props) {
    let projNumber = props.projNumber;
    return (
        <div id="mainProjectPage" className="pt-5">
            <ProjectIntro projectInfo={projectsWriteUps[projNumber]} />
            <ProjectBody projectInfo={projectsWriteUps[projNumber]} />
            <ProjectImages projectInfo={projectsWriteUps[projNumber]} />
        </div>
    );
}

export default ProjectsWriteUps;