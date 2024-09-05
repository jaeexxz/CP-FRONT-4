import React from 'react';
import '../styles/Sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <img src="imagem-sobre.jpg" alt="Sobre a Loja de Esportes" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum...
        {/* Continue com um parágrafo de 20 linhas usando Lorem Ipsum */}
      </p>
    </div>
  );
}

export default Sobre;
