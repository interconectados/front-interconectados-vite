import React from 'react';
import { useNavigate } from "react-router-dom";

import "./AboutGame.css"
import AboutCarousel from '../components/AboutCarousel/AboutCarousel';

function AboutGame() {
  const navigate = useNavigate();
    const startGame = () => {
        navigate("/el-juego/categorias");
      };
    
  return (
   <div> {/* Header */}
   <header className="header">
     <div className="logo">
       <a href="/">
       <img src="/logo.svg" alt="logo interconectados" />
       </a>
     </div>
     <nav className="nav"></nav>
     <button className="cta-button " onClick={startGame}>
       Jugar ahora
     </button>
   </header>
    <div style={
        { padding: "10%"}
    } className="about-game">
     <section>
<AboutCarousel/>
     </section>
     <button className="cta-button large" onClick={startGame}>
       Jugar ahora
     </button>
    </div>
    
    </div>
  );
}

export default AboutGame;
