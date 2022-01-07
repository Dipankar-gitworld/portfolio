import "./Project.css";


function Project(){
    return(
        <div>
            <h1>Projects</h1>
            <div id="project">

               <div>
                   <div className="websiteInfo">
                     <h2>Clone of thebodyshop.com</h2>
                     <p>
                         An online lifestyle-commerce website. <br/>
                            
                         Tech Stack Used: HTML, CSS, javascript
                          
                     </p>
                     <button onClick={()=>{
                         window.open("https://mysterious-depths-64439.herokuapp.com/","_blank");
                     }}>DEMO</button>
                     <button onClick={()=>{
                         window.open("https://github.com/nkil123/Myntra.git","_blank");
                     }}>SOURCE</button>
                     
                     
                   </div>
               </div>

               <div>
                  <img src="/images/The-Body-Shop-Homepage.webp" alt="" />
   
               </div>

               <div>
                   <div className="websiteInfo">
                     <h2>Clone of myntra.com</h2>
                     <p>
                        An online lifestyle-commerce website. 
                        <br/>
                        Tech Stack Used: HTML, CSS, javascript
                          
                     </p>
                     <button onClick={()=>{
                         window.open("https://gurdeep7.github.io/mybodyshop/html/home","_blank");
                     }}>
                         DEMO
                     </button>
                     <button onClick={()=>{
                         window.open("https://drive.google.com/file/d/1zqohjT8Czsw4ss7LHk0CjXqjLth-sHUz/view?usp=sharing","_blank");
                     }}>
                         SOURCE</button>
                     
                     
                   </div>
               </div>

               <div>
                  <img src="/images/The-Body-Shop-Homepage.webp" alt="" />
   
               </div>

            </div>

        </div>
        
    )
}

export default Project;