import React from 'react';
import '../styles/Contato.css';

function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
