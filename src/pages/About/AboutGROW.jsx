import React from 'react';
import { useNavigate } from "react-router-dom";

import "./AboutGame.css"
import AboutCarouselGROW from '../../components/AboutCarousel/AboutCarouselGROW';


function AboutGROW() {
  const navigate = useNavigate();
    const startGame = () => {
        navigate("/el-juego/categorias");
      };
    
  return (
   <div> {/* Header */}
   <header className="header">
     <div className="logo">
       <a href="/">
       <img src="/logo.png" alt="logo interconectados" />
       </a>
     </div>
     <nav className="nav"></nav>
     <button className="cta-button " onClick={startGame}>
       Reservá una sesión
     </button>
   </header>
    <div style={
        { padding: "10%"}
    } className="about-game">
     <section>
<AboutCarouselGROW/>
     </section>
     <a href="https://calendly.com/interconectados-sa/30min">
     <button className="cta-button large" onClick={startGame}>
       Reservá una sesión
     </button>
     </a>
     <a href="https://api.whatsapp.com/send?phone=541157443471">
     <button className="cta-button large">

       Contactanos
     </button>
     </a>
    </div>
    
    </div>
  );
}

export default AboutGROW;
