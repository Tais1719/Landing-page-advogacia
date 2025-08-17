import React, { useState } from "react";
import "./Navbar.css";
import fundo from "../assets/Home.png";
import icone from "../assets/logo sombra 1.png";

const links = [
  { label: "Home", section: "#home" },
  { label: "Sobre", section: "#about" },
  { label: "Especialidades", section: "#services" },
  { label: "ANYWHERE OFFICE", section: "#office" },
  { label: "Equipe", section: "#team" },
  { label: "Contato", section: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (section) => {
    const el = document.querySelector(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" }); // scroll suave
    }
    setIsOpen(false); // fecha menu mobile
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${fundo})` }}>
      <div className="logo-container">
        <img src={icone} alt="Ícone" className="icon" />

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.section}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.section);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
