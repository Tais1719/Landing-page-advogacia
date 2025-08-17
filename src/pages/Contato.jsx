import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import "../styles/contato.css";

const Contato = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    const subject = `Mensagem de ${formData.nome}`;
    const body = `Nome: ${formData.nome}%0AEmail: ${formData.email}%0AMensagem: ${formData.mensagem}`;
    window.location.href = `mailto:contato@seudominio.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contato-page">
      <div className="contato-container">
        <h1>Estamos preparados para te ajudar nos mais diversos cenários:</h1>
        <div className="contato-content">

          {/* Lista de Especialidades */}
          <div className="contato-especialidades">
            <ul>
              <li>Direito do Trabalho para Trabalhadores</li>
              <li>Direito do Trabalho Empresarial</li>
              <li>Proteção de Dados</li>
              <li>Servidores Públicos</li>
              <li>Direito Sucessório</li>
              <li>Direito Previdenciário</li>
              <li>Direito Médico</li>
            </ul>
            <p><FaPhone style={{ marginRight: "8px" }} /> (*55) 000000</p>
          </div>

          {/* Formulário de Contato */}
          <div className="contato-form">
            <h3>Entre em contato</h3>
            <form onSubmit={handleSubmit} className={enviado ? "enviado" : ""}>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="mensagem"
                rows="4"
                placeholder="Escreva sua mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
              {!enviado && <button type="submit">Enviar</button>}
              {enviado && (
                <p className="mensagem-enviada">
                  Obrigado! Sua mensagem foi enviada.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      <footer className="footer">
        &copy; 2025 Seu Escritório. Todos os direitos reservados.
      </footer>
    </section>
  );
};

export default Contato;
