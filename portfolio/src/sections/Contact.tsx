import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../assets/CSS/Contacts.css";

export default function Contacts() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("jonathansilvagw@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setCopied(false);
      alert("Clipboard API not supported in this browser.");
    }
  };

  return (
    <div className="contacts">
    <h1 className="contacts-title">My Contacts</h1>
      <div className="contacts-grid">
        {/* LinkedIn */}
        <div className="contact-card">
          <FaLinkedin className="contact-icon linkedin" />
          <p>&lt;/Linkedin&gt;</p>
          <a
            href="https://www.linkedin.com/in/jonathan3sena/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="contact-btn">Acessar</button>
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub className="contact-icon github" />
          <p>&lt;/GitHub&gt;</p>
          <a
            href="https://github.com/Js3Silva"
            target="_blank"
            rel="noreferrer"
          >
            <button className="contact-btn">Acessar</button>
          </a>
        </div>

        {/* Email */}
        <div className="contact-card">
          <SiGmail className="contact-icon gmail" />
          <p>&lt;/Email&gt;</p>
          <button className="contact-btn" onClick={handleCopyEmail}>
            {copied ? "Copiado!" : "Copiar"}
          </button>
        </div>
      </div>
    </div>
  );
}
