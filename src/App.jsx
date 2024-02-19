import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/Skills/Skills"; 
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return (
  <div className="app">
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About">
      <About/>
    </section>
    <section id="Skills">
      <Parallax type="skills"/>
     </section>
    <section id="Skills">
      <Skills/> 
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <Portfolio/> 
    <section id="Contact">
      <Contact/>
    </section>
  </div>
  );
};

export default App;
