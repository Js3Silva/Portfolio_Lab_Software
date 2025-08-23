import { useEffect, useState } from "react";
import "../../assets/CSS/Home.css";
import { GoChevronRight } from "react-icons/go";
import img from "../assets/images/astronauta.png";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      name: "Olá! Eu sou o Jonathan.\n",
      paragraph: "Sou apaixonado por tecnologia, inovação e pelo impacto que o código pode gerar no mundo real.",
      button: "Saber mais",
    },
    en: {
      name: "Hi! I'm Jonathan.\n",
      paragraph: "I am passionate about technology, innovation, and the impact that code can create in the real world.",
      button: "Learn more",
    },
  };

  const paragraphText = texts[language].paragraph;
  const Name = texts[language].name;

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
            <Link to="about" smooth={true} duration={500} offset={-70}>
              <button className="home-button">
                {texts[language].button} <GoChevronRight />
              </button>
            </Link>
          </section>
        </div>

        <div className="home-image">
          <img src={img} alt="Foto decorativa de um Astronauta" />
        </div>
      </div>
    </div>
  );
}
