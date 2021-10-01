import "./menu.css"

const Menu = ({isActive, setIsActive}) => {
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div className={"menu " +(isActive && "active")}>
        <ul className="menuList" onClick={handleClick}>
            <li><a href="#about" >About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    );
};

export default Menu;
