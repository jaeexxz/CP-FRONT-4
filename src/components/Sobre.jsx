import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre Nós</h1>
      <img src="url-para-sua-imagem.jpg" alt="Loja de Esportes" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel massa velit. 
        Proin ut velit ut sapien venenatis sollicitudin. Quisque a lectus a velit sollicitudin gravida.
        {/* Lorem Ipsum de 20 linhas ou qualquer outro texto descritivo */}
      </p>
    </div>
  );
}

export default Sobre;
