import { useEffect, useState } from "react";
import "../assets/CSS/Home.css";
import { GoChevronRight } from "react-icons/go";
import img from "../assets/images/astronauta.png";

export default function Home() {
  const paragraphText = ` Sou apaixonado por tecnologia, inovação e pelo impacto que o código pode gerar no mundo real. 
Minha missão é transformar ideias em soluções criativas, desenvolver projetos que conectam pessoas, 
otimizam processos e impulsionam novas possibilidades.`;
  const Name = "Bem-vindo ao meu universo! \n";
  const [lines, setLines] = useState<string[][]>([]);

  useEffect(() => {
    const words = paragraphText.split(" ");
    const containerWidth = 60;
    const tempLines: string[][] = [];
    let currentLine: string[] = [];
    let currentLength = 0;

    words.forEach((word) => {
      currentLength += word.length + 1;
      if (currentLength > containerWidth) {
        tempLines.push(currentLine);
        currentLine = [word];
        currentLength = word.length + 1;
      } else {
        currentLine.push(word);
      }
    });
    if (currentLine.length) tempLines.push(currentLine);
    setLines(tempLines);
  }, [paragraphText]);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-h1" style={{ whiteSpace: "pre-line" }}>
            {Name}
          </h1>
          <section className="home-description">
            <p>
              {lines.map((line, index) => (
                <span
                  key={index}
                  className={index === lines.length - 1 ? "line last-line" : "line"}
                  style={{ "--i": index } as React.CSSProperties}
                >
                  {line.join(" ")}{index === lines.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </section>
          <section className="home-button-section">
            <button className="home-button">Saber mais <GoChevronRight /></button>
          </section>
        </div>

        <div className="home-image">
          <img src={img} alt="Foto decorativa de um Astronauta" />
        </div>
      </div>
    </div>
  );
}
