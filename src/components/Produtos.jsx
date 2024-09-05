// src/components/Produtos.jsx
import React from 'react';
import './Produtos.css';

function Produtos() {
  return (
    <div className="produtos">
      <h1>Nossos Produtos</h1>
      <div className="produto-card">
        <h2>Produto 1</h2>
        <p>Descrição do Produto 1</p>
      </div>
      <div className="produto-card">
        <h2>Produto 2</h2>
        <p>Descrição do Produto 2</p>
      </div>
      {/* Adicione mais produtos conforme necessário */}
    </div>
  );
}

export default Produtos;
