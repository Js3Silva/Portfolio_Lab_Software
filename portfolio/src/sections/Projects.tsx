import { useEffect, useState } from "react";
import "../assets/CSS/Projects.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import { useLanguage } from "../context/LanguageContext";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
};

export default function Projects() {
  const { language } = useLanguage();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const texts = {
    en: {
      title: "My Projects",
      loading: "Loading projects...",
    },
    pt: {
      title: "Meus Projetos",
      loading: "Carregando projetos...",
    },
  };

  useEffect(() => {
    fetch("https://api.github.com/users/Js3Silva/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter((r: Repo) => r.description));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>{texts[language].loading}</h2>;
  }

  return (
    <div className="projects">
      <h1 className="projects-title">{texts[language].title}</h1>
      <div className="carousel">
        {/* Botão Prev */}
        <button
          className="carousel-btn prev"
          onClick={() =>
            document.querySelector(".carousel-track")?.scrollBy({
              left: -300,
              behavior: "smooth",
            })
          }
        >
          <FaChevronLeft />
        </button>

        {/* Track */}
        <div className="carousel-track">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.homepage || repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h2 className="project-title">{repo.name}</h2>
              <p className="project-description">{repo.description}</p>
            </a>
          ))}
        </div>

        {/* Botão Next */}
        <button
          className="carousel-btn next"
          onClick={() =>
            document.querySelector(".carousel-track")?.scrollBy({
              left: 300,
              behavior: "smooth",
            })
          }
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
