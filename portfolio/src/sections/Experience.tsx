import "../assets/CSS/Experience.css";
import Card from "../components/Card";
import TechnologyCard from "../components/TechnologyCard";
import blocxLogo from "../assets/images/blocx.png";
import stellantisLogo from "../assets/images/Stellantis.jpg";

import { SiSpring, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGit, FaDocker } from "react-icons/fa";

function Experience() {
  const empresas = [
    {
      imageSrc: blocxLogo,
      altText: 'Bloquear Monitoramento',
      title: 'Bloquear Monitoramento',
      dateRange: 'JUL/2023 - OUT/2024',
      hoverText: 'Realizei configuração e manutenção de dispositivos rastreadores, abrangendo hardware e software, assegurando a funcionalidade e eficiência dos equipamentos.\n Efetuei diagnósticos técnicos detalhados, solucionando problemas e garantindo a qualidade dos serviços prestados.\n Gerenciei o controle de inventário, otimizando processos logísticos e assegurando a pronta disponibilidade de dispositivos. \nPrestei suporte técnico à equipe interna, auxiliando no atendimento eficaz das demandas dos clientes.\nContribuí para a melhoria de processos internos, implementando soluções que aumentaram a eficiência operacional e reduziram erros.\n Essa experiência aprimorou minhas habilidades técnicas, de análise e resolução de problemas, além de fortalecer minha capacidade de colaborar em equipe e otimizar processos organizacionais.'
    },
    {
      imageSrc: stellantisLogo,
      altText: 'Stellantis',
      title: 'Stellantis Automoveis',
      dateRange: 'ATUAL',
      hoverText: 'Suporte ao gerenciamento de incidentes, problemas e mudanças.\nParticipação em projetos de TI.\nControle e geração de kpis - gestão de demandas, corretivas.\nSuporte na atualização de portfólio de projetos.\nAprendizado e suporte nos sistemas locais.\nAprendizado e suporte nos processos locais.\nInteração com os diversos setores de TI.\nColaboração na solução de problemas sistêmicos e de processos.'
    },
  ];

  const tecnologias = [
    { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Java', Icon: FaJava, color: '#007396' },
    { name: 'Spring', Icon: SiSpring, color: '#6DB33F' },
    { name: 'Git', Icon: FaGit, color: '#F05032' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
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