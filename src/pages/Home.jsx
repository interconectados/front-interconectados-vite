import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import featureImage from "/objt-1.png"; // Ajusta la ruta de la imagen
import ctaImage from "/objt-2.png"; // Ajusta la ruta de la imagen

function Home() {
  const navigate = useNavigate();

  const startGame = () => {ß
    navigate("/el-juego");
  };
  return (
    <div className="home">
      {/* Header */}

      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="logo interconectados" />
        </div>
        <nav className="nav"></nav>
        <button className="cta-button " onClick={startGame}>
          Jugar ahora
        </button>
      </header>
      <Carousel />
      <CardCarousel />

      {/* FeatureSection */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>¿Cuál es tu próximo objetivo?</h2>
          <p>
            Si ya lo sabes, te podemos guiar hacia ello. Si aún no lo sabes, te
            podemos ayudar a descubrirlo.
          </p>
          <button className="cta-button">
            <a href=""></a>
            Más info</button>
        </div>
        <div className="feature-image">
          <img src={featureImage} alt="Feature" />
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="products">
        <div className="product">
          <img src="/images/5.svg" alt="Juego Interconectados" />
          <h2>Interconectados: El Juego</h2>
          <p>Crea conexiones significativas mientras te diviertes.</p>
          <button className="product-button " onClick={startGame}>
            Jugar Ahora
          </button>
        </div>
        <div className="product">
          <img src="/images/4.svg" alt="Sesiones de Coaching" />
          <h2>Coaching y Mentoring</h2>
          <p>Sesiones y programas completos donde vos sos el protagonista.</p>
          <button className="product-button">
            <a href="https://sites.google.com/view/interconectados-coaching/inicio">
              {" "}
              Conoce Más
            </a>
          </button>
        </div>
      </section>

      {/* Seccion destacado juego */}
      <section className="section-cta-game">
        <div className="cta-image">
          <img src="/images/2.svg" alt="Impacto positivo" />
        </div>
        <div className="cta-content">
          <h2>Coaching GROW</h2>
          <p>
            Un programa completo que te ayuda a convertir tus sueños en
            objetivos a tu alcance.
          </p>
          <button className="cta-button">
            <a href="https://drive.google.com/file/d/1r6lqhXaneRY1_04bKEtfutxLRU57sKgE/view">
              Conocer más
            </a>
          </button>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials">
        <h2>Nuestra Misión</h2>
        <div className="testimonial">
          <p>
            Inspirar un cambio positivo y conectar a las personas en un nivel
            más profundo.
          </p>
          <a href="https://linktr.ee/interconectados.sa">
            {" "}
            <span>Todo sobre Interconectados</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
