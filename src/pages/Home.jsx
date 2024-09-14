import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Mision from "../components/Mision/Mision";
function Home() {
  const navigate = useNavigate();

  const startGame = () => {
      navigate("/el-juego");
  };

  const startCoaching = () => {
    navigate("/coaching");
  };
 
  const chooseAboutCompany = () => {
    navigate("/acerca-de-interconectados");
  };
  const AboutGROW = () => {
    navigate("/coaching/grow");
  };

  return (
    <div className="home">
      {/* Header */}
     <Header/>
        {/* FeatureSection */}
        <section className="feature-section">
        <div className="feature-content">
          <h2>Interconectados Coaching</h2>
          <p>
     Un espacio de expresión y libertad donde podés conocerte, expandir tu potencial, cumplir objetivos y <strong>lograr tu mejor versión</strong>.
                    </p>
          <button className="cta-button" onClick={startCoaching}>
            Más sobre coaching
          </button>
        </div>
        <div className="feature-image">
          <img src="/images/2.svg" alt="Feature" />
        </div>
      </section>

      <section className="feature-section">
      <div className="feature-image">
          <img src="/images/5.svg" alt="Feature" />
        </div>
        <div className="feature-content 2">
          <h2>Interconectados El Juego</h2>
          <p>
       
            Un juego de preguntas pensado para generar<strong> conversaciones profundas</strong> que te harán conocer a los demás y a vos mismo de una manera diferente.

          </p>
          <button className="cta-button" onClick={startGame}>
            Jugar ahora
          </button>
        </div>
      </section>
      {/* Sección Acerca de... */}
      <Mision/>
    </div>
  );
}

export default Home;
