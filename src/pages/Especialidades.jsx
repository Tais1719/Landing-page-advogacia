import React, { useState } from "react";
import "../styles/especialidades.css";

const especialidadesData = [
  {
    nome: "Direito Civil",
    descricao: "Atuação em contratos, obrigações, família, sucessões e responsabilidade civil."
  },
  {
    nome: "Direito Penal",
    descricao: "Defesa e acompanhamento de processos criminais, garantindo seus direitos."
  },
  {
    nome: "Direito Trabalhista",
    descricao: "Consultoria e atuação em questões relacionadas a relações de trabalho."
  },
  {
    nome: "Planejamento Patrimonial",
    descricao: "Organização e proteção do patrimônio familiar, sucessão e herança."
  },
  {
    nome: "Direito Tributário",
    descricao: "Orientação sobre tributos, impostos e questões fiscais."
  }
];

const Especialidades = () => {
  const [ativo, setAtivo] = useState(null);

  const toggleDescricao = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <div id="services" className="especialidades-container">
      <h1>Especialidades</h1>
      <ul className="especialidades-list">
        {especialidadesData.map((item, index) => (
          <li key={index} className="especialidade-item">
            <div
              className="especialidade-titulo"
              onClick={() => toggleDescricao(index)}
            >
              {item.nome} <span className={`seta ${ativo === index ? "ativa" : ""}`}>&#9660;</span>
            </div>
            {ativo === index && (
              <p className="especialidade-descricao">{item.descricao}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Especialidades;
