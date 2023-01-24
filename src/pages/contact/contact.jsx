import "./contact.css"
import GithubLogo from "../../assets/github.svg"
import LinkedinLogo from "../../assets/linkedIn.svg"
const Contact = () => {
    return (
        <div id="contact" className="contactPage">
            <h1>For any questions please mail us:</h1>
            <h1 className="colorRanbow">mohamedmouheb@gmail.com</h1>
            <div className="contactPageBody">
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
                        <div className="navbarItem">
                            (+216) 41 779 455
                        </div>
                        <a href="mailto:mohamedmouheb@gmail.com">
                            <div className="navbarItem">
                                mohamedmouheb@gmail.com
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact