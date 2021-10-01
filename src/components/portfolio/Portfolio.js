import "./portfolio.css"
import {GitHub} from "@material-ui/icons";

const Portfolio = () => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="portfolio" id="portfolio">

                <h1 className="portfolioTopTitle">
                    Portfolio
                </h1>
            <div className="portfolioBottom">
                <span className="portfolioInstruction_Large">Hover over image for more.</span>
                <span className="portfolioInstruction_Small">Touch image for more.</span>
                   <div className="portfolioItem">
                       <img src="/assets/portfolio/Social_home.png" alt="" className="portfolioImg"/>
                       <div className="portfolioItemDesc">
                       <span className="portfolioItemTitle">Social Media App</span>
                           <span className="portfolioText">React JS/Node.js</span>
                           <span className="portfolioText">Express/Mongodb/Mongoose</span>
                           <span className="portfolioLinkButton"><a href="https://github.com/chris-mcnabb/Social"><GitHub className="gitIcon"/>GitHub</a></span>
                       </div>
                   </div>
                    <div className="portfolioItem">
                        <img src="/assets/portfolio/Social_Messenger.png" alt="" className="portfolioImg"/>
                        <div className="portfolioItemDesc">
                            <span className="portfolioItemTitle">Messaging App</span>
                            <span className="portfolioText">React JS/Node.js</span>
                            <span className="portfolioText">Express/Mongodb/Mongoose</span>
                            <span className="portfolioText">Socket.io</span>
                            <span className="portfolioLinkButton"><a href="https://github.com/chris-mcnabb/Social/tree/main/src/pages/messenger"><GitHub className="gitIcon"/>GitHub</a></span>



                        </div>
                    </div>
                    <div className="portfolioItem">
                        <img src="/assets/portfolio/admin.png" alt="" className="portfolioImg"/>
                        <div className="portfolioItemDesc">
                            <span className="portfolioItemTitle">Administration App</span>
                            <span className="portfolioText">React JS/Node.js</span>
                            <span className="portfolioText">Express/Mongodb/Mongoose</span>
                            <span className="portfolioLinkButton"><a href="https://github.com/chris-mcnabb/admin_app"><GitHub className="gitIcon"/>GitHub</a></span>


                        </div>
                    </div>
                    <div className="portfolioItem">
                        <img src="/assets/portfolio/pizza_home.png" alt="" className="portfolioImg"/>
                        <div className="portfolioItemDesc">
                            <span className="portfolioItemTitle">Restaurant App</span>
                            <span className="portfolioText">React JS/Node.js</span>
                            <span className="portfolioText">Express/Mongodb/Mongoose</span>
                            <span className="portfolioText">Stripe Payment Integration</span>
                            <span className="portfolioLinkButton"><a href="https://github.com/chris-mcnabb/pizza_shop"><GitHub className="gitIcon"/>GitHub</a></span>


                        </div>
                    </div>
                    <div className="portfolioItem">
                        <img src="/assets/portfolio/weather_sunny.png" alt="" className="portfolioImg"/>
                        <div className="portfolioItemDesc">
                            <span className="portfolioItemTitle">Weather App</span>
                            <span className="portfolioText">React Native</span>
                            <span className="portfolioText">Express/Mongodb/Mongoose</span>
                            <span className="portfolioLinkButton"><a href="https://github.com/chris-mcnabb/Weather"><GitHub className="gitIcon"/>GitHub</a></span>
                        </div>
                    </div>
                    <div className="portfolioItem">
                        <img src="/assets/portfolio/weather_rainy.png" alt="" className="portfolioImg"/>
                        <div className="portfolioItemDesc">
                            <span className="portfolioItemTitle">Weather App</span>
                            <span className="portfolioText">React Native</span>
                            <span className="portfolioText">Express/Mongodb/Mongoose</span>
                            <span className="portfolioLinkButton"><a href="https://github.com/chris-mcnabb/Weather"><GitHub className="gitIcon"/>GitHub</a></span>



                        </div>
                    </div>
                </div>



        </div>
    );
};

export default Portfolio;
