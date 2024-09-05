import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <p>Entre em contato conosco para mais informações.</p>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
