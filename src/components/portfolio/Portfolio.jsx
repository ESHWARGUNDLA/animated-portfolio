import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Tasky Application",
        img:"taskyapp.png",
        desc:"Tasky Application: An intermediate-level project built using HTML, CSS, Bootstrap, and JavaScript. In this application, users can add tasks and simultaneously remove them. Additionally, users have the ability to include images, titles, headings, and descriptions for each task.",
        link:"https://eshwargundla-tasky-app.netlify.app/"
    },
    {
        id:2,
        title:"Lagunitas page",
        img:"beer.png",
        desc:"These is a beer landing page of lagunitas website using HTML,CSS,JavaScript.There are special js libraries used in these those are Locomotive(This library adds smooth scrolling effects) and GSAP (GreenSock Animation Platform)",
        link:"https://eshwar-beer-landing-page.netlify.app/"
    },
    {
        id:3,
        title:"LandingPage",
        img:"LandingPage.png",
        desc:"Landing Page with ReactJS, Tailwind CSS, and React Router 🚀.Here we have different sections like About,Contact,Github and User. React Routers helps in navigation, ensuring a smooth user experience. This enables users to navigate between different sections of your landing page seamlessly.",
        link:"https://landing-page45.vercel.app/"
    },   
    {
        id:4,
        title:"Portfolio",
        img:"./portfolio.png",
        desc:"Modern Personal Portfolio Web Template: 🌟🚀 built using the popular React library, Sass and Framer Motion. It provides an easy way for developers, designers, and creatives to showcase their work and skills in a professional and visually appealing way.",
        link:"https://my-portfolio-sigma-ten-49.vercel.app/"
    },
    {
        id:5,
        title:"Book Management",
        img:"Book Management.png",
        desc:"These is Library Book Management project using Nodejs,Expressjs,Javascript.To check severs communication I have used postman-api.You can access users,books and these project allows user management. You can create, update, and delete user profiles."
        // link:""
    },
    {
        id:6,
        title:"Currency-Converter",
        img:"curr-conv.png",
        desc:"These is a currency-converter using reactjs.These implement the logic to fetch exchange rates from an API, such as ExchangeRate-API, and calculate the converted amount based on the user's input.Here I have used custom hooks.React state to manage the input amount, selected currencies, and conversion result.",
        link:"https://eshwar-netflix.netlify.app/"
    },
    
    
];


const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
    target:ref,
    // offset:["start start","end start"]
    });
    const y = useTransform(scrollYProgress,[0,1],[-300, 300]);
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref = {ref}>
                <img src={item.img} alt="img" />
                </div>
                <motion.div className="textContainer" style = {{y}}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank">
                        <button>See Demo</button>
                    </a>
                </motion.div>
                </div>
            </div>
        </section>
    )

}

const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
    });
const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
});

    return (
    <div className="portfolio" ref= {ref}>
        <div className="progress">
            <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item ={item} key={item.id}/>
        ))}
    </div>
    );
};



export default Portfolio;