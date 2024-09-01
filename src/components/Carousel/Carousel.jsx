import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Imágenes de ejemplo
import slide1 from '/logo.png';
import slide2 from '/logo.png';
import slide3 from '/logo.png';
import { useNavigate } from "react-router-dom";
function Carousel() {
  const navigate = useNavigate();
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const startGame = () => {
    navigate("/el-juego");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
            <div className="text-container">
              {index === 0 && (
                <>
                  <h2>Sentí la conexión</h2>
                  <p>
             Profundizá en tus relaciones con nuestro juego online               </p>
             <button  className = "cta-button "onClick={startGame}>Jugar ahora</button>

                </>
              )}
              {index === 1 && (
                <>
                  <h2>Qué lindo es poder elegir</h2>
                  <p>
                 Saber que tenemos opciones es siempre mejor. 
                   </p>
                   <button  className = "cta-button "onClick={startGame}>Jugar ahora</button>
                </>
              )}
              {index === 2 && (
                <>
                  <h2>Tu futuro comienza aquí</h2>
                  <p>
                 Desarrollá tu potencial y cumplí tus sueños.
                  </p>
                  <button  className = "cta-button "onClick={startGame}>Jugar ahora</button>

                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
