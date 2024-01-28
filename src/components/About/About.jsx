import "./about.scss"
const About = () => {
    return(
        <div className="about">
            <h2>About Me</h2>
            <div className="button">
    <div className="box">A</div>
    <div className="box">B</div>
    <div className="box">0</div>
    <div className="box">U</div>
    <div className="box">T</div>
</div>
            <br /><hr />
            <br /><hr />
            <br /><hr />
            <br /> 
            <p>Hi all I'm <span>GUNDLA ESHWAR</span> and I'm from Rajanna Sircilla,Telangana. I am currently pursuing my B.Tech in Sreenidhi Institute of Science and Technology in the stream of Electronics and Communication Engineering,Hyderabad. I'm intrested in <span>Full Stack Web Development and Python Development.</span>
            <br />
            <br/>
            <span>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454633-2918522.png" alt="img" />
                <img src="https://www.aalpha.net/wp-content/uploads/2020/12/full-stack-development.gif" alt="img" />
            </span>
            </p>
            <>
            <br />
            <p>Click here to download my Resume:-
            <span>
            <button>
            <a href="superset resume.pdf" style={{color:"white" }} target="_blank">resume<i className="fa-sharp fa-solid fa-download"></i></a>
            </button> 
            </span>
            </p>
            <br /><hr />
            <br /><hr />
            <br /><hr />
            <br />
            
            </>
        </div>
    );
}
export default About;