
import React from 'react';
import "./Home.css"
import { useNavigate } from "react-router-dom";
import Carousel from '../components/Carousel/Carousel';
import CardCarousel from '../components/CardCarousel/CardCarousel';
import featureImage from '/logo.png'; // Ajusta la ruta de la imagen
import ctaImage from '/logo.png'; // Ajusta la ruta de la imagen



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

{/* FeatureSection */}
<section className="feature-section">
      <div className="feature-content">
        <h2>¿Cuál es tu próximo objetivo?</h2>
        <p>
      Te acompañamos a convertirte en la persona que querés ser. 
        </p>
        <button className="cta-button">Conocer más</button>
      </div>
      <div className="feature-image">
        <img src={featureImage} alt="Feature" />
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

      {/* Seccion destacado juego */}
      <section className="section-cta-game">
      <div className="cta-image">
        <img src={ctaImage} alt="Impacto positivo" />
      </div>
      <div className="cta-content">
        <h2>Conocé un pograma para desarrollar tu potencial y cumplir tus metas.</h2>
        <button className="cta-button">Conocer más</button>
      </div>
      
    </section>

      {/* Sección de Testimonios */}
      <section className="testimonials">
      <h2>Nuestra Misión</h2>
        <div className="testimonial">
        <p>Inspirar un cambio positivo y conectar a las personas en un nivel más profundo.</p>
          <a href="">   <span>Acerca de Interconectados</span></a>
        </div>
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
