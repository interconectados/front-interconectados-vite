import React from 'react';
import { useNavigate } from "react-router-dom";

import "./AboutGame.css"
import AboutCarouselGROW from '../components/AboutCarousel/AboutCarouselGROW';


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
     <button className="cta-button ">
       Reservá una sesión
     </button>
   </header>
    <div className="about-game">
     <section>
<AboutCarouselGROW/>
     </section>
     <br /><br />
     <a href="https://api.whatsapp.com/send?phone=541157443471" target='_blank'>
     <button className="cta-button large">
       Contactanos
     </button>
     </a>

    </div>
    
    </div>
  );
}

export default AboutGROW;
