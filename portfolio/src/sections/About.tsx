import "../assets/CSS/About.css";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-grid">
        <img className="about-image" src="https://i.ibb.co/bRmB2Yt/IMG-20230426-WA0003.jpg" alt="" />
        <div className="about-text">
          <p>
            Sou um desenvolvedor web apaixonado por tecnologia, inovação e pelo impacto que o código pode gerar no mundo real.<br />
            Minha missão é transformar ideias em soluções criativas, desenvolver projetos que conectam pessoas, otimizam processos e impulsionam novas possibilidades.<br />
          </p>
        </div>
      </div>
    </div>
  );
}