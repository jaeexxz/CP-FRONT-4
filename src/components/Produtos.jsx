import React from 'react';
import './Produtos.css';

function Produtos() {
  const produtos = [
    { id: 1, nome: 'Bola de Futebol', preco: 'R$ 100,00' },
    { id: 2, nome: 'Raquete de Tênis', preco: 'R$ 200,00' },
    { id: 3, nome: 'Luvas de Boxe', preco: 'R$ 150,00' },
  ];

  return (
    <div className="produtos">
      <h1>Produtos</h1>
      <div className="produtos-lista">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
