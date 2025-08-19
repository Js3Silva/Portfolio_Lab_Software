import type { FC } from "react";
import type { JSX } from "react";
import { Link } from "react-scroll";
import "../assets/CSS/Navbar.css";
import perfilImg from "../assets/images/perfil.png"; 

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="navStyles">
      <div className="linksNavStyle">
        <div className="containerStyles">
          <Link to="about" smooth={true} duration={500} offset={-70} className="linkStyles">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-70} className="linkStyles">
            Projects
          </Link>
          <Link to="experience" smooth={true} duration={500} offset={-70} className="linkStyles">
            Experience
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="linkStyles">
            Contact
          </Link>
        </div>
      </div>
      <img className="imgStyles" src={perfilImg} alt="Perfil" />
    </nav>
  );
};

export default Navbar;
