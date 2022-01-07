import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Contact.css";
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact(){
    return (
        <div>
            <h1>Contact Me</h1>
            <div className='contactIcons'>
              <LinkedInIcon style={{backgroundColor:"black"}}/>
              <GitHubIcon style={{backgroundColor:"black"}}/>
              <button style={{backgroundColor:"black",width:"100px"}}>download resume</button>

            </div>
            

        </div>
    )
}

export default Contact;