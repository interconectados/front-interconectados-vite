import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import Header from "../components/Header/Header";
import Mision from "../components/Mision/Mision";

function WelcomeCoaching() {
  const navigate = useNavigate();

  const startGame = () => {
      navigate("/el-juego");
  };

  const startCoaching = () => {
    navigate("/coaching");
  };
 
  const AboutSesion = () => {
    navigate("/coaching/sesiones");
  };
  const AboutGROW = () => {
    navigate("/coaching/grow");
  };

  return (
    <>
<Header/>
    <div className="home">
      <CardCarousel />
 
      {/* FeatureSection */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>Sesiones 1 a 1</h2>
          <p>
          Un espacio donde te podés expresar libremente y explorar tus vivencias desde una perspectiva constructiva. 
          </p>
          <button className="cta-button" onClick={AboutSesion}>
            Más info
          </button>
        </div>
        <div className="feature-image">
          <img src="/images/4.svg" alt="Feature" />
        </div>
      </section>

      <section className="feature-section">
      <div className="feature-image">
          <img src="/images/2.svg" alt="Feature" />
        </div>
        <div className="feature-content 2">
          <h2>Programa GROW 🌱</h2>
          <p>
            Diseñado para conocerte, expandir tu potencial, establecer objetivos
            a largo plazo y <strong>lograr tu mejor versión</strong>.
          </p>
          <button className="cta-button" onClick={AboutGROW}>
            Más info
          </button>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="products">
        <div className="product">
          <img src="/images/7.svg" alt="Sesiones de Coaching" />
          <h2>¿Cuál es tu próximo objetivo?</h2>
          <p>
          Te guiamos en el proceso de planificación y obtención de metas
            profesionales y personales.

          </p>
          <button className="product-button" onClick={startCoaching}>
              Conocé Más
          </button>
        </div>

        <div className="product">
          <img src="/images/5.svg" alt="Juego Interconectados" />
          <h2>Interconectados El Juego</h2>
          <p>
            Un juego de preguntas diseñadas para crear conversaciones profundas que te ayudarán conocer a los demás y a vos mismo de una manera diferente.
          </p>
          <button className="product-button " onClick={startGame}>
            Jugar Ahora
          </button>
        </div>
      </section>
      <Mision/>
    </div>
    </>
  );
}

export default WelcomeCoaching;
