import React from "react";
import member1 from "../assets/menber1.png";
import member2 from "../assets/menber2.png";
import member3 from "../assets/menber3.png";
import "../styles/equipe.css";

const Equipes = () => {
  return (
    <div id="team" className="team-container">
      <h1>Time</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={member1} alt="Membro 1" />
          <h3>Samara Silva</h3>
          <p>Advogada Tributarista, formada em 2020 no IESP, especialista em Direito Tributário e Restituição de impostos.</p>
        </div>
        <div className="team-member">
          <img src={member2} alt="Membro 2" />
          <h3>Luiza Santos</h3>
          <p>Advogada e empresária do mundo digital, especializada em Direito Previdenciário, Trabalhista e Familiar, com anos de experiência auxiliando clientes em todo o país.</p>
        </div>
        <div className="team-member">
          <img src={member3} alt="Membro 3" />
          <h3>Tayna Machado</h3>
          <p>Advogada, especialista em Propriedade Intelectual, atuando na proteção de Marcas e Patentes para empreendedores em todo território nacional.</p>
        </div>
      </div>
    </div>
  );
};

export default Equipes;
