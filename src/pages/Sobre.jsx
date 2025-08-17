// src/pages/sobre/Sobre.jsx
import React from "react";
import sobreImg from "../assets/sobre.png"; // ajuste o caminho conforme seu projeto
import "../styles/sobre.css";

const Sobre = () => {
  return (
    <div id="about" className="sobre-container">
      <div className="sobre-content">
        <img src={sobreImg} alt="Sobre" className="sobre-image" />
        <div className="sobre-text">
          <h1>Sobre Nós</h1>
          <p>
            Formada em Direito pela Unifacisa, com sólida base acadêmica e prática na área jurídica.

            Especialista em Direito Civil e Processo Civil pela Faculdade Legale – Brasil, com profundo conhecimento em legislação, procedimentos e estratégias jurídicas voltadas à proteção e defesa dos interesses de clientes.

            Especialista em Planejamento Patrimonial Familiar e Sucessório, garantindo segurança, organização e eficiência na gestão e transmissão de patrimônio familiar.

            Atuação pautada pela ética, dedicação e comprometimento, sempre buscando soluções claras, objetivas e eficazes, oferecendo tranquilidade e confiança em cada etapa do processo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
