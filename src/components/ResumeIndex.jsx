
import Navbar from "./Navbar";
import About from "./About";

import Skills from "./Skills";
import "./ResumeIndex.css";
import Project from "./Projects";
import Contact from "./Contact";

function ResumeIndex(){
    return (
        <div >
            <div id="navbarDiv" >
              <Navbar />

            </div>
            
            <div class="aboutDiv" id="about">
               <About />

            </div>
            <div class="skillsDiv" id="skills">
                <Skills />
            </div>

            <div id="projectDiv">
                <Project />
            </div>

            <div id="contactDiv">
                <Contact />

            </div>
            
                

            
            

           
        </div>
        
    )
}

export default ResumeIndex;