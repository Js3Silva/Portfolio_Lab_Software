import "../assets/CSS/Experience.css";
import Card from "../components/Card";
import TechnologyCard from "../components/TechnologyCard";
import blocxLogo from "../assets/images/blocx.png";
import stellantisLogo from "../assets/images/Stellantis.jpg";

import { SiSpring, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGit, FaDocker } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Experience",
      tech: "Technologies",
      empresas: [
        {
          imageSrc: blocxLogo,
          altText: "Blocx Monitoring",
          title: "Blocx Monitoring",
          dateRange: "JUL/2023 - OCT/2024",
          hoverText:
            "Configured and maintained tracking devices (hardware & software), ensuring functionality and efficiency.\nPerformed detailed technical diagnostics, solving problems and ensuring service quality.\nManaged inventory control, optimizing logistics processes and ensuring availability.\nProvided technical support to the internal team.\nContributed to improving internal processes, increasing efficiency and reducing errors.\nThis experience enhanced my technical, problem-solving, and teamwork skills.",
        },
        {
          imageSrc: stellantisLogo,
          altText: "Stellantis",
          title: "Stellantis Automobiles",
          dateRange: "CURRENT",
          hoverText:
            "Support for incident, problem, and change management.\nParticipation in IT projects.\nControl and generation of KPIs - demand management and corrective actions.\nSupport in project portfolio updates.\nLearning and supporting local systems and processes.\nCollaboration across IT departments.\nAssisting in solving systemic and process issues.",
        },
      ],
    },
    pt: {
      title: "Experiência",
      tech: "Tecnologias",
      empresas: [
        {
          imageSrc: blocxLogo,
          altText: "Bloquear Monitoramento",
          title: "Bloquear Monitoramento",
          dateRange: "JUL/2023 - OUT/2024",
          hoverText:
            "Realizei configuração e manutenção de dispositivos rastreadores (hardware e software), assegurando a funcionalidade e eficiência.\nEfetuei diagnósticos técnicos detalhados, solucionando problemas e garantindo qualidade dos serviços.\nGerenciei controle de inventário, otimizando processos logísticos e assegurando disponibilidade.\nPrestei suporte técnico à equipe interna.\nContribuí para melhoria de processos internos, aumentando eficiência e reduzindo erros.\nEssa experiência aprimorou minhas habilidades técnicas, de análise e resolução de problemas, além da colaboração em equipe.",
        },
        {
          imageSrc: stellantisLogo,
          altText: "Stellantis",
          title: "Stellantis Automóveis",
          dateRange: "ATUAL",
          hoverText:
            "Suporte ao gerenciamento de incidentes, problemas e mudanças.\nParticipação em projetos de TI.\nControle e geração de KPIs - gestão de demandas, corretivas.\nSuporte na atualização de portfólio de projetos.\nAprendizado e suporte nos sistemas locais e processos.\nInteração com os diversos setores de TI.\nColaboração na solução de problemas sistêmicos e de processos.",
        },
      ],
    },
  };

  const tecnologias = [
    { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Java", Icon: FaJava, color: "#007396" },
    { name: "Spring", Icon: SiSpring, color: "#6DB33F" },
    { name: "Git", Icon: FaGit, color: "#F05032" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
  ];

  return (
    <div className="experience">
      <h1 className="experience-title">{texts[language].title}</h1>
      <div className="experience-grid">
        {texts[language].empresas.map((empresa, index) => (
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
      <h1 className="technologies-title">{texts[language].tech}</h1>
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
