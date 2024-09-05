// src/components/Contato.jsx
import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className="contato">
      <h1>Fale Conosco</h1>
      <form>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
