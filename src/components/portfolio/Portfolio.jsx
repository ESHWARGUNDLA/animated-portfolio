import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Tasky Application",
        img:"taskyapp.png",
        desc:"These is a Tasky Application.These a intermediate level project and builded using HTML,CSS,Bootstrap,Javascript.Here you can add tasks and simultaneously remove the tasks.You can add images,titles,heading and description of the tasks.",
        link:"https://eshwargundla-tasky-app.netlify.app/"
    },
    {
        id:2,
        title:"Lagunitas page",
        img:"beer.png",
        desc:"These is a beer landing page of lagunitas website using HTML,CSS,JavaScript.There are special js libraries used in these those are locomotive and gsap",
        link:"https://eshwar-beer-landing-page.netlify.app/"
    },
    {
        id:3,
        title:"Zomato Clone",
        img:"zomatoapp.png",
        desc:"These is a Zomato home page clone website using HTML and CSS. Flexbox and Grid is used to structure the page. Not every content is added, some similar content I have skipped and focused on the stucture of the home page for practise.",
        link:"https://eshwargundla-zomato-clone.netlify.app/"
    },   
    {
        id:4,
        title:"Portfolio",
        img:"./portfolio.png",
        desc:" These is a modern and customizable personal portfolio web template built using the popular React library, Sass and Framer Motion. It provides an easy way for developers, designers, and creatives to showcase their work and skills in a professiona and visually appealing way."
        // link:""
    },
    {
        id:5,
        title:"Book Management",
        img:"Book Management.png",
        desc:"These is Library Book Management project using Nodejs,Expressjs,Javascript.To check severs I have used postman-api.You can access users,books etc"
        // link:""
    },
    {
        id:6,
        title:"Netflix Clone",
        img:"./netflix.png",
        desc:"These is a basic Netflix Clone using HTML,CSS.These clones are beginner level projects for any web developers.The project aims to recreate the visual design and layout of the Netflix home page, providing a starting point for creating similar interfaces or learning web development techniques.",
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