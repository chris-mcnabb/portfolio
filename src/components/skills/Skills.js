import "./skills.css"

const Skills = () => {
    return (
        <div className="skills" id="skills">
           <div className="skillsTop">
               <h1 className="skillsTitle">Skills</h1>
           </div>
            <div className="skillsContainer">

                <span className="skillsList">
                    <ul className="list_1">
                        <li>React JS</li>
                        <li>React Native</li>
                        <li>Next JS</li>
                        <li>Express</li>

                    </ul>

                </span>
                <span className="skillsList">
                    <ul className="list_1">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>

                    </ul>
                </span>
                <span className="skillsList">
                    <ul className="list_1">
                        <li>Node.js</li>
                        <li>Javascript</li>
                        <li>Axios</li>
                        <li>Git</li>
                    </ul>
                     </span>
                    <span className="skillsList">
                        <ul className="list_1">
                            <li>Framer Motion</li>
                            <li>Material UI</li>
                            <li>Semantic UI</li>
                            <li>Re-Charts</li>

                        </ul>
                </span>
            </div>
        </div>
    );
};

export default Skills;
