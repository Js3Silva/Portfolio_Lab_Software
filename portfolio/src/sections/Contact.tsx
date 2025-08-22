import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../assets/CSS/Contacts.css";
import { useLanguage } from "../context/LanguageContext";

export default function Contacts() {
  const { language } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const texts = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Venha se conectar comigo 🚀",
      description: "Estou sempre aberto a novas ideias, parcerias e oportunidades.",
      placeholders: {
        name: "Seu Nome",
        email: "Seu Email",
        message: "Sua Mensagem",
      },
      button: "Enviar",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar: ",
    },
    en: {
      title: "Contact Me",
      subtitle: "Let's connect 🚀",
      description: "I’m always open to new ideas, collaborations, and opportunities.",
      placeholders: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
      },
      button: "Send",
      success: "Message sent successfully!",
      error: "Failed to send: ",
    },
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_insd0tu",
          "template_5x5wcvc",
          form.current,
          "npBATyLmsJ0WBjGuX"
        )
        .then(
          () => {
            setStatus(texts[language].success);
            form.current?.reset();
          },
          (error) => {
            setStatus(texts[language].error + error.text);
          }
        );
    }
  };

  return (
    <div className="contacts">
      <h1 className="contacts-title">{texts[language].title}</h1>

      <div className="contact-card big two-columns">
        {/* Coluna Esquerda */}
        <div className="contact-left">
          <h2>{texts[language].subtitle}</h2>
          <p>{texts[language].description}</p>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/jonathan3sena/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social linkedin" />
            </a>
            <a
              href="https://github.com/Js3Silva"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="social github" />
            </a>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder={texts[language].placeholders.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={texts[language].placeholders.email}
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder={texts[language].placeholders.message}
              required
            />
            <button type="submit" className="contact-btn">
              {texts[language].button}
            </button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </div>
  );
}
