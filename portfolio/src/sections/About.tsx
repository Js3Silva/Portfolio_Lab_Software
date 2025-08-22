import "../assets/CSS/About.css";
import imagem from "../assets/images/eu.jpeg";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "About Me",
      description: `
I am pursuing a degree in Software Engineering at the Pontifical Catholic University of Minas Gerais and hold a technical degree in Electronics from CEFET-MG. I have always been an easygoing and curious person, passionate about programming and problem-solving.
Much of my hands-on programming experience comes from university, and I am currently focused on deepening my knowledge in React for front-end and Java with Spring Boot for back-end, as well as using PostgreSQL as a database.
At present, I work at Stellantis Automóveis Brasil in a hybrid model, in the ICT area, managing projects. Before that, I worked at Block Monitoramento, where, drawing on my electronics background, I configured vehicle tracking devices. This experience was essential, but I decided to migrate to the software field to better understand the “whys” behind solutions and also because I am a creative and motivated person, eager to innovate and structure ideas.
My personal goals include improving my English and securing a Junior Developer position in the short term. In the long term, I aim to establish myself as a recognized professional in the technology field, making a significant contribution to the market with my learning and experiences.`,
    },
    pt: {
      title: "Sobre Mim",
      description: `
        Estou graduando em Engenharia de Software pela Pontifícia Universidade Católica de Minas Gerais e possuo formação técnica em Eletrônica pelo CEFET-MG. Sempre fui uma pessoa descontraída e curiosa, apaixonado por programar e resolver problemas.\n
        Grande parte da minha experiência prática em programação vem da universidade, e atualmente estou focado em aprofundar meus conhecimentos em React para front-end e em Java com Spring Boot para back-end, além do uso de PostgreSQL como banco de dados.\n
        Atualmente, trabalho na Stellantis Automóveis Brasil, em regime híbrido, na área de ICT, atuando na gestão de projetos. Antes disso, trabalhei na Block Monitoramento, onde, a partir da minha formação em eletrônica, configurei dispositivos de rastreamento veicular. Essa vivência foi essencial, mas decidi migrar para a área de software para entender melhor os “porquês” por trás das soluções e também, pelo fato de ser uma pessoa criativa e motivada para poder inovar e estruturar ideias.\n
        Tenho como metas pessoais aprimorar meu inglês e conquistar uma posição de Desenvolvedor Júnior no curto prazo. A longo prazo, desejo me consolidar como um grande profissional e referência na área de tecnologia, contribuindo de forma significativa para o mercado com meu aprendizado e experiências.\n
      `,
    },
  };

  return (
    <div className="about-section">
      <h1 className="about-title">
        {texts[language].title}
      </h1>

      <div className="about-grid">
        <img
          className="about-image"
          src={imagem}
          alt="Foto de Jonathan Silva"
        />

        <div className="about-text">
          <p>{texts[language].description}</p>
        </div>
      </div>
    </div>
  );
}
