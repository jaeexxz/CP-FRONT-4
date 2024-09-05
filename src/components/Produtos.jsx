import React from 'react';
import '../styles/Produtos.css';

function Produtos() {
  const produtos = [
    { id: 1, nome: 'Tênis de Corrida', descricao: 'Tênis leve e confortável', preco: 'R$ 299,99' },
    { id: 2, nome: 'Camiseta Esportiva', descricao: 'Camiseta leve para treinos', preco: 'R$ 59,99' },
    { id: 3, nome: 'Bola de Futebol', descricao: 'Bola oficial de futebol', preco: 'R$ 79,99' }
  ];

  return (
    <div className="produtos">
      <h1>Produtos</h1>
      <div className="produtos-lista">
        {produtos.map(produto => (
          <div key={produto.id} className="card">
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p><strong>{produto.preco}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
