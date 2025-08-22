import type { FC } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";
import perfilImg from "../assets/images/perfil.png";
import brFlag from "../assets/images/br.png";
import usFlag from "../assets/images/us.png";
import "../assets/CSS/Navbar.css";

const Navbar: FC = () => {
  const { language, setLanguage } = useLanguage();

  const labels = {
    pt: { about: "Sobre", projects: "Projetos", experience: "Experiência", contact: "Contato" },
    en: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact" },
  };

  return (
    <nav className="navStyles">
      <div className="linksNavStyle">
        <div className="containerStyles">
          <Link style={{ color: "white", cursor: "pointer", fontSize: "1.2rem", fontFamily: "Roboto, sans-serif" }} to="about" smooth={true} duration={500} offset={-70}>{labels[language].about}</Link>
          <Link style={{ color: "white", cursor: "pointer", fontSize: "1.2rem", fontFamily: "Roboto, sans-serif" }} to="projects" smooth={true} duration={500} offset={-70}>{labels[language].projects}</Link>
          <Link style={{ color: "white", cursor: "pointer", fontSize: "1.2rem", fontFamily: "Roboto, sans-serif" }} to="experience" smooth={true} duration={500} offset={-70}>{labels[language].experience}</Link>
          <Link style={{ color: "white", cursor: "pointer", fontSize: "1.2rem", fontFamily: "Roboto, sans-serif" }} to="contact" smooth={true} duration={500} offset={-70}>{labels[language].contact}</Link>
        </div>
      </div>
      <div style={{ marginLeft: "20px", display: "flex", gap: "10px" }}>
        <img src={brFlag} alt="Português" onClick={() => setLanguage("pt")} style={{ width: 30, cursor: "pointer" }} />
        <img src={usFlag} alt="English" onClick={() => setLanguage("en")} style={{ width: 30, cursor: "pointer" }} />
      </div>
      <img className="imgStyles" src={perfilImg} alt="Perfil" />
    </nav>
  );
};

export default Navbar;
