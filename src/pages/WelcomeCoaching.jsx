import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import CardCarousel from "../components/CardCarousel/CardCarousel";

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

      <header className="header">
        <div className="logo">
         <a href="/">
          <img src="/logo.png" alt="logo interconectados" />
          </a>
        </div>
        <nav className="nav"></nav>
        <button className="cta-button " onClick={AboutGROW}>
         Más info
        </button>
      </header>
      <CardCarousel />
      {/* FeatureSection */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>¿Cuál es tu próximo objetivo?</h2>
          <p>
            Te guiamos en el proceso de planificación y obtención de metas
            profesionales y personales.
          </p>
          <button className="cta-button" onClick={AboutGROW}>
            Más info
          </button>
        </div>
        <div className="feature-image">
          <img src="/images/7.svg" alt="Feature" />
        </div>
      </section>
 {/* Seccion destacado GROW */}
 <section className="section-cta-game">
        <div className="cta-image">
          <img src="/images/2.svg" alt="Impacto positivo" />
        </div>
        <div className="cta-content">
          <h2>Programa GROW 🌱</h2>
          <p>
            Diseñado para conocerte, expandir tu potencial, establecer objetivos
            a largo plazo y <strong>lograr tu mejor versión</strong>.
          </p>
          <button className="cta-button">
            <a href="https://drive.google.com/file/d/1r6lqhXaneRY1_04bKEtfutxLRU57sKgE/view">
              Conocer más
            </a>
          </button>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="products">
        <div className="product">
          <img src="/images/4.svg" alt="Sesiones de Coaching" />
          <h2>Sesiones 1 a 1</h2>
          <p>
Un espacio donde te podés expresar libremente y explorar tus vivencias desde una perspectiva constructiva. 
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

     

      {/* Sección Acerca de... */}
      <section className="testimonials">
        <h2>Nuestra Misión</h2>
        <div className="testimonial">
          <h3>
            Inspirar un cambio positivo y conectar a las personas en un nivel
            más profundo.
          </h3>
          <button className="cta-button" onClick={chooseAboutCompany}>
          Nuestros valores
          </button>
          <button className="cta-button out">
            <a href="https://linktr.ee/interconectados.sa">
              Redes sociales
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
