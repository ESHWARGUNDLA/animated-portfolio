import React from "react"
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"
// import DarkToLight from "../toggle/DarkToLight";
const Navbar = () => {
    return(
        <div className="navbar">
            {/* sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1 }}
                transition={{duration:0.5}}
                >
                {/* eshwar_45 */}
                
                    <img src="logo.png" alt="image" />
                </motion.span>
                    <div className="social">
                    <button>
                    <a href="superset resume.pdf" style={{color:"white" }} target="_blank">resume<i className="fa-sharp fa-solid fa-download"></i></a>
                    </button>
                    <a href="https://github.com/ESHWARGUNDLA" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/gundla-eshwar-8b202a229/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" /></a>
                    <a href="https://discord.com/channels/@me" target="_blank"><img src="https://cdn.icon-icons.com/icons2/1945/PNG/96/iconfinder-discord-4661587_122459.png" alt="" /></a>
                    <a href="https://twitter.com/eshwar_gundla" target="_blank"><img src="https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000" alt="" /></a>
                    {/* <DarkToLight/> */}
                    <a href="https://www.instagram.com/eshwar_9473/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" /></a>
                    

                </div>
            </div>
        </div>
    ); 
}
export default Navbar;