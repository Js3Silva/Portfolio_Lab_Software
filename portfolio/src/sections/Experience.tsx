import "../assets/CSS/Experience.css";
import Card from "../components/Card";
import TechnologyCard from "../components/TechnologyCard";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";

function Experience() {
  const empresas = [
    {
      imageSrc: '../assets/images/blocx.png',
      altText: 'Bloquear Monitoramento',
      title: 'Bloquear Monitoramento',
      dateRange: 'JUL/2023 - OUT/2024',
      hoverText: 'Descrição das suas funções na MIP Engenharia, o que você aprendeu, projetos, etc.'
    },
    {
      imageSrc: '../assets/images/Stellantis.jpg',
      altText: 'Stellantis',
      title: 'Stellantis Automoveis Brasil',
      dateRange: 'ATUAL',
      hoverText: 'Descrição das suas funções na Stellantis, o que você aprendeu, projetos, etc.'
    },
  ];

  const tecnologias = [
    { name: 'HTML', Icon: FaHtml5 , color: '#E34F26'},
    { name: 'CSS', Icon: FaCss3Alt , color: '#1572B6'},
    { name: 'JavaScript', Icon: FaJs , color: '#F7DF1E'},
    { name: 'React', Icon: FaReact , color: '#61DAFB'},
    { name: 'Java', Icon: FaJava , color: '#007396'},
  ];

  return (
    <div className="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-grid">
        {empresas.map((empresa, index) => (
          <Card
            key={index}
            imageSrc={empresa.imageSrc}
            altText={empresa.altText}
            title={empresa.title}
            dateRange={empresa.dateRange}
            hoverText={empresa.hoverText}
          />
        ))}
      </div>
      <h1 className="technologies-title">Technologies</h1>
      <div className="technologies-grid">
        {tecnologias.map((tech, index) => (
          <TechnologyCard
            key={index}
            name={tech.name}
            Icon={tech.Icon}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;