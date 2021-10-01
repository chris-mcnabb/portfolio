import "./home.css"
import TopbarLarge from "../../components/topbarLarge/TopbarLarge";
import Portfolio from "../../components/portfolio/Portfolio";
import {ArrowForward} from "@material-ui/icons";
import {useState} from "react";



const Home = () => {



    return (

           <div className="home" id="home">

               <div className="homeTop">
                   <div className="homeTopCover">
                       <span className="homeTopCoverIntro">
                           Hello, my name is <span className="homeTopCoverName">Chris</span>, and I'm a
                       </span>
                       <span className="homeTopCoverIntro">full-stack web developer in Breda, NL.</span>
                        <a className="homeTopButton" href="#portfolio">My Portfolio<ArrowForward className={"homeTopIcon"}/></a>
                   </div>
               </div>
           </div>

    );
};

export default Home;
