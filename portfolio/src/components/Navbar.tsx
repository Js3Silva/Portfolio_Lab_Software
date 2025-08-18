import type { FC } from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/Navbar.css"
import perfilImg from "../assets/perfil.png"; 

const Navbar: FC = (): JSX.Element => {
  return (
    <nav className="navStyles">
      <div className="linksNavStyle">
        <div className="containerStyles">
          <Link to="/" className="linkStyles">
            Jonathan Sena
          </Link>
          <Link to="/about" className="linkStyles">
            About
          </Link>
          <Link to="/projects" className="linkStyles">
            Projects
          </Link>
          <Link to="/contact" className="linkStyles">
            Experience
          </Link>
          <Link to="/contact" className="linkStyles">
            Contact
          </Link>
        </div>
      </div>
      <img className="imgStyles" src={perfilImg} alt="" />
    </nav>


  );
};

export default Navbar;
