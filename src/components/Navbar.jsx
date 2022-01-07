import "./Navbar.css";
//import {Link} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"



function Navber(){
    return (
       <div id="mainContainer">
           <div >
              <h3><Link smooth to="#about" className="link">Home</Link></h3>
              <h3><Link smooth to="#about" className="link">About</Link></h3>
              
              <h3><Link smooth to="#skills" className="link">Projects</Link></h3>
              <h3><Link smooth to="#about" className="link">Resume</Link></h3>
              <h3><Link smooth to="#about" className="link">Contact</Link></h3>

            </div>
       </div>
    );
}

export default Navber;