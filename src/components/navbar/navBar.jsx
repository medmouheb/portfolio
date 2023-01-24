import "./navBar.css"
import GithubLogo from "../../assets/github.svg"
import LinkedinLogo from "../../assets/linkedIn.svg"

function NavBar() {
    return (
        <div className="navbar">
            <div className="myLogo colorRanbow">
                <div className="bigLogoText">
                    M0uh38
                </div>
                <div className="smallLogoText">
                    software
                </div>
            </div>
            <div className="navbarBody">
                <div className="navbarIcons">
                    <a target="_blank" href="https://github.com/medmouheb"><img className="navbarIcon" src={GithubLogo} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mohamed-mouheb-ben-othman/"><img className="navbarIcon" src={LinkedinLogo} /></a>
                </div>
                <div className="navbarItems">
                    <a href="#home">
                        <div className="navbarItem">
                            Home
                        </div>
                    </a>
                    <a href="#aboutMe">
                        <div className="navbarItem">
                            About
                        </div>
                    </a>
                    <a href="#stuck">
                        <div className="navbarItem">
                            Tech Stack
                        </div>
                    </a>
                    <a href="#projects">
                        <div className="navbarItem">
                            Projects
                        </div>
                    </a>
                    <a href="#contact">
                        <div className="navbarItem">
                            Contact
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
