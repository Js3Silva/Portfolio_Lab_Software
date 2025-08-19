import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" className="section">
        <Home />
      </Element>

      <Element name="about" className="section">
        <About />
      </Element>

      <Element name="projects" className="section">
        <Projects />
      </Element>

      <Element name="experience" className="section">
        <Experience />
      </Element>

      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
