import React from "react";
import officeImg from "../assets/oficce.png"; // ajuste o caminho da imagem
import "../styles/office.css";

const Office = () => {
  return (
    <div id="office" className="office-container">
      <div className="office-content">
        <div className="office-text">
          <h1>ANYWHERE OFFICE</h1>
          <p>
            O Escritório funciona em sua maior parte de maneira remota com profissionais
            e colaboradores capacitados. Os meios de comunicação e acessibilidade são
            facilitados por meio de atendimento online, documentos eletrônicos e uso
            de assinaturas digitais. Mas não se preocupe, contamos com profissionais
            em todo o país.
          </p>
        </div>
        <div className="office-image">
          <img src={officeImg} alt="Office" />
        </div>
      </div>
    </div>
  );
};

export default Office;
