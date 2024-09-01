
import React from 'react';
import "./Home.css"
import { useNavigate } from "react-router-dom";
import Carousel from '../components/Carousel/Carousel';
import CardCarousel from '../components/CardCarousel/CardCarousel';

function Home() {
    
    const navigate = useNavigate();


    const startGame = () => {
        navigate("/el-juego");
      };
  return (
    <div className="home">
      {/* Header */}

      <header className="header">
        <div className="logo">
            <img src="/logo.png" alt="logo interconectados" />
        </div>
        <nav className="nav">
        </nav>
        <button className="cta-button">Únete</button>
      </header>
      <Carousel/>
      <CardCarousel/>
      {/* Hero Section */}
      <section className="hero">
        <h1>Expande tus horizontes con Interconectados</h1>
        <p>Conéctate profundamente con los demás y contigo mismo a través de nuestro juego y servicios de coaching.</p>
        <div className="cta-buttons">
          <button className="hero-button">Descubre el Juego</button>
          <button className="hero-button">Servicios de Coaching</button>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="products">
        <div className="product">
          <img src="/path-to-image" alt="Juego Interconectados" />
          <h2>Interconectados: El Juego</h2>
          <p>Crea conexiones significativas mientras te diviertes.</p>
          <button  className = "product-button "onClick={startGame}>Jugar Ahora</button>
        </div>
        <div className="product">
          <img src="/path-to-image" alt="Servicios de Coaching" />
          <h2>Servicios de Coaching</h2>
          <p>Transforma tu vida con sesiones personalizadas de coaching.</p>
          <button className="product-button">
            <a href="https://sites.google.com/view/interconectados-coaching/inicio">  Conoce Más</a>
          </button>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials">
        <h2>Lo que dicen nuestros usuarios</h2>
        <div className="testimonial">
          <p>"El juego cambió la forma en que conecto con mi familia y amigos."</p>
          <span>- Usuario A</span>
        </div>
        <div className="testimonial">
          <p>"El coaching me ayudó a descubrir mi verdadero potencial."</p>
          <span>- Usuario B</span>
        </div>
      </section>

      {/* Sección de Misión */}
      <section className="mission">
        <h2>Nuestra Misión</h2>
        <p>Inspirar un cambio positivo y conectar a las personas en un nivel más profundo.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Interconectados. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
