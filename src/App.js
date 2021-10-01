import Home from "./pages/home/Home";
import TopbarLarge from "./components/topbarLarge/TopbarLarge";
import "./app.css"
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import {Helmet} from "react-helmet";
import Skills from "./components/skills/Skills";
import Menu from "./components/menu/Menu";
import {useEffect, useState} from "react";
import TopbarSmall from "./components/topbarSmall/TopbarSmall";


function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
<>
    <Helmet>
        <html lang="en" />
        <title>Chris' Portfolio</title>
        <meta name="description" content="Happy Dog" />
        <meta name="theme-color" content="#E6E6FA" />

    </Helmet>

<div className="css-selector">
    {width < breakpoint ? <TopbarSmall/>  : <TopbarLarge/>}

   <div className="container">
       <Home/>
   </div>
        <div className="aboutContainer" >
           <About/>
        </div>
        <div className="skillsContainer">
            <Skills/>
        </div>
        <div className="portfolioContainer" >
            <Portfolio/>
        </div>
        <div className="contactContainer">
            <Contact/>

        </div>
        <div className="footerContainer">
            <Footer/>
        </div>



</div>
</>
  );
}

export default App;
