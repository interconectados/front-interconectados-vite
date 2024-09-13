import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

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
      {/* Productos Destacados */}
      <section className="products">
        <div className="product">
          <img src="/images/5.svg" alt="Juego Interconectados" />
          <h2>Interconectados: El Juego</h2>
          <p>
            Un juego de preguntas que te ayudarán conocer a lo demás y a vos
            mismo a traves de conversaciones.
            {/* Si sos un curioso por el ser, el comportamiento humano y las relaciones, te va a encantar */}
          </p>
          <button className="product-button " onClick={startGame}>
            Jugar Ahora
          </button>
        </div>
        <div className="product">
          <img src="/images/4.svg" alt="Sesiones de Coaching" />
          <h2>Coaching y Mentoring</h2>
          <p>Sesiones y programas completos donde vos sos el protagonista.</p>
          <button className="product-button" onClick={startCoaching}>
              Ver más
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
