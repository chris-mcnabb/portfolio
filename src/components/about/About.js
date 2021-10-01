import "./about.css"
import {DynamicFeed, ImportantDevices, Speed, Telegram} from "@material-ui/icons";

const About = () => {
    return (
        <div className="about" id="about">
            <div className="aboutTop">
                <span className="aboutTopTitle">About Me</span>
                <span className="aboutTopIntro">I believe that all web applications should be...</span>
            </div>
            <div className="aboutBottom">
                <div className="aboutBottomContainer">
                    <div ><ImportantDevices className="aboutBottomIcon"/></div>
                    <span className="aboutBottomContainerTitle">Responsive</span>
                    <div className="aboutBottomText"> Applications that will work </div>
                    <div className="aboutBottomText"> on any device.</div>

                </div>
                <div className="aboutBottomContainer">
                    <div ><DynamicFeed className="aboutBottomIcon"/></div>
                    <span className="aboutBottomContainerTitle">Simple</span>
                    <span className="aboutBottomText">Simple to navigate, </span>
                    <span className="aboutBottomText"> easy to use.</span>
                </div>
                <div className="aboutBottomContainer">
                    <div ><Telegram className="aboutBottomIcon"/></div>
                    <span className="aboutBottomContainerTitle">Dynamic</span>
                    <div className="aboutBottomText">I want to create applications</div>
                    <div className="aboutBottomText">that engage the user.</div>

                </div>
            </div>


        </div>
    );
};

export default About;
