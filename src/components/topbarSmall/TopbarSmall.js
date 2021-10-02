import "./topbarSmall.css"
import {useState} from "react";
import Menu from "../menu/Menu";

const TopbarSmall = () => {
    const [isActive, setIsActive] = useState(false);
    const [menuOpen, setMenuOpen] =useState(false)
    return (
        <div className="topbarSmall">
            <Menu isActive={isActive} setIsActive={setIsActive}/>
            <div className="topbarSmallWrapper">
            <div className="topLeftSmall">
                <span className="logoSmall"><a className="linkLogo" href="#home">Chris McNabb Portfolio</a></span>
            </div>
            <div className="topRightSmall">
                <div className={"hamburger "+ (isActive && "active")}onClick={()=> setIsActive(!isActive)}>
                    <span className={"line-1 "}></span>
                    <span className="line-2"> </span>
                    <span className="line-3"> </span>
                </div>
            </div>
            </div>
        </div>


    );
};

export default TopbarSmall;


