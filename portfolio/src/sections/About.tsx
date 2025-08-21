import "../assets/CSS/About.css";
import imagem from "../assets/images/eu.jpeg";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me / Sobre Mim</h1>

      <div className="about-grid">
        <img
          className="about-image"
          src={imagem}
          alt="Foto de Jonathan Silva"
        />

        <div className="about-text">
          {/* Inglês */}
          <div className="about-section">
            <h2>English</h2>
            <p>
              I am a web developer passionate about technology, innovation, and the impact that code can create in the real world.<br />
              My mission is to turn ideas into creative solutions, developing projects that connect people, optimize processes, and drive new possibilities.<br />
            </p>
          </div>

          {/* Português */}
          <div className="about-section">
            <h2>Português</h2>
            <p>
              Sou um desenvolvedor web apaixonado por tecnologia, inovação e pelo impacto que o código pode gerar no mundo real.<br />
              Minha missão é transformar ideias em soluções criativas, desenvolver projetos que conectam pessoas, otimizam processos e impulsionam novas possibilidades.<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
