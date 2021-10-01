import "./topbarLarge.css"
import TopbarSmall from "../topbarSmall/TopbarSmall";
import {useEffect, useState} from "react";


const TopbarLarge = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;
   useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);




    return (
        <div className="topbar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <img src="/assets/logo.jpeg" alt="" className="logoImg"/>
                    <span className="logo"> <a className="linkLogo" href="#home">Chris McNabb Portfolio</a>

                    </span>
                </div>
                <div className="topRight">


                    {width < breakpoint ? <TopbarSmall/> : <> <div className="topBarIconContainer">

                        <span><a href="#about">About</a></span>
                    </div>
                        <div className="topBarIconContainer">

                        <span><a href="#skills">Skills</a></span>
                        </div>
                        <div className="topBarIconContainer">

                        <span ><a href="#portfolio">Portfolio</a></span>
                        </div>
                        <div className="topBarIconContainer">
                        <span><a href="#contact">Contact</a></span>
                        </div></> }
                </div>
            </div>
        </div>
    );
};

export default TopbarLarge;
