import "./aboutMe.css"
import Location from "../../assets/location.png"
import Position from "../../assets/position.png"
import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons';
import { Link } from "react-router-dom";
import ENGCV from "../../assets/resume of mohamed mouheb ben othman.pdf"
import FRCV from "../../assets/cv de mohamed mouheb ben othman.pdf"

function AboutMe() {
    return (
        <div id="aboutMe" className="AboutMePage">
            <h1 className="firstTitle">
                About Me
            </h1>
            <p className="generaltext">
                I am software engineer that is constantly sharpening his skills, learning and evolving.I enjoy programming in diverse languages to create, debug and implement a wide variety of software applications in javascript frameworks and others by actively seeking projects that require me to work outside my comfort zone .
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to={ENGCV} target="_blank" download>
                    <Button leftIcon={<IconDownload />} variant="light">
                        download resume
                    </Button>
                </Link>
                <Link to={FRCV} target="_blank" download>
                    <Button leftIcon={<IconDownload />} variant="light">
                        télécharger CV
                    </Button>
                </Link>
            </div>
            <h1 className="firstTitle">
                Work Experience
            </h1>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle">Software Engineer</h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} /> "palteform HackUp" almost the same concept as CodingGame</h3>
                </div>
                <div>
                    <div className="status">
                        Full Time
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle"> Full Stack Web Developer</h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} /> "E-Gest" is my graduation project it's a correction and analysis tool for accountants </h3>
                </div>
                <div>
                    <div className="status">
                        internship
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle"> Frontend Developer </h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} />E-commerce palteform for TechTunis</h3>
                </div>
                <div>
                    <div className="status">
                        Freelance
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle">Full Stack Web Developer </h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} />integrating a video call and messaging features to a an E-learning platform</h3>
                </div>
                <div>
                    <div className="status">
                        university project
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle"> Mobile Developer </h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} />"candy crush clone" with cans for a TechTunis client</h3>
                </div>
                <div>
                    <div className="status">
                        Freelance
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <h1 className="firstTitle">
                Education
            </h1>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle">Software Engineering Degree</h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} /> université libre de tunis ULT</h3>
                </div>
                <div>
                    <div className="status">
                        3 Years
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle">Bachelor Degree in IT and Management</h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} /> Ecole Supérieure des Sciences Economiques et Commerciales de Tunis ESSECT</h3>
                </div>
                <div>
                    <div className="status">
                        3 years
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h2 className="secondTitle">Full Stack javaScript certification</h2>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Position} />GoMyCode</h3>
                </div>
                <div>
                    <div className="status">
                        4 months
                    </div>
                    <h3 className="thirdTitle"><img height={"16px"} width={"12px"} src={Location} /> Tunis</h3>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
