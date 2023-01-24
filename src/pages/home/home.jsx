import Me from "../../assets/me.png"
import "./home.css"
function Home() {
    return (
        <div id="home" className="HomePage">
            <div className="IntroductionText">
                <h1>Hi 👋,</h1>
                <h1>My name is</h1>
                <h1 className="colorRanbow">Mohamed Mouheb Ben Othman</h1>
                <h1>I build really cool apps</h1>
            </div>
            <div className="MyPicture">
                <img src={Me} />
            </div>
        </div>
    );
}

export default Home;
