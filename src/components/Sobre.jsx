import React from 'react';
import '../styles/Sobre.css';
import sobreImagem from '../assets/sobre-imagem.png';

function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre a Loja de Esportes</h1>
      <img src={sobreImagem} alt="Sobre a Loja de Esportes" className="sobre-imagem" />
      <p>
      Na nossa loja de esportes, acreditamos no poder transformador do esporte. Fundada com a missão de oferecer equipamentos e vestuários de alta qualidade, nossa loja é o ponto de encontro para atletas e entusiastas de todas as modalidades. Trabalhamos com as melhores marcas do mercado, trazendo as últimas inovações em tecnologia esportiva para garantir que você esteja sempre no seu melhor. Seja você um corredor, jogador de futebol, praticante de academia ou qualquer outro esporte, estamos aqui para oferecer o suporte necessário para suas conquistas. Venha nos visitar e faça parte da nossa comunidade esportiva!

      </p>
    </div>
  );
}

export default Sobre;
