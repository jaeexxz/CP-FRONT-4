import React from 'react';
import '../styles/Produtos.css';
import produto1 from '../assets/produto1.png'; 
import produto2 from '../assets/produto2.png';
import produto3 from '../assets/produto3.png'; 

function Produtos() {
  const produtos = [
    { id: 1, nome: 'Tênis de Corrida', descricao: 'Tênis leve e confortável', preco: 'R$ 299,99', imagem: produto1 },
    { id: 2, nome: 'Camiseta Esportiva', descricao: 'Camiseta leve para treinos', preco: 'R$ 59,99', imagem: produto2 },
    { id: 3, nome: 'Bola de Futebol', descricao: 'Bola oficial de futebol', preco: 'R$ 79,99', imagem: produto3 }
  ];

  return (
    <div className="produtos">
      <h1>Produtos</h1>
      <div className="produtos-lista">
        {produtos.map(produto => (
          <div key={produto.id} className="card">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
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
