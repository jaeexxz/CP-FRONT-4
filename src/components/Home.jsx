import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo.png'; 

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à Loja de Esportes!</h1>
      <p>Encontre os melhores produtos para seu esporte favorito.</p>
      <img src={logo} alt="Logo da Loja de Esportes" className="home-logo" />
    </div>
  );
}

export default Home;