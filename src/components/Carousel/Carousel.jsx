import React, { useState, useEffect } from 'react';
import './Carousel.css';

// Imágenes de ejemplo
import slide1 from '/logo.png';
import slide2 from '/logo.png';
import slide3 from '/logo.png';

function Carousel() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

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
                  <h2>¡Hacé rendir tu plata con Paquete rinda!</h2>
                  <p>
                    Conocé los beneficios en súper, combustibles, cines y locales de comida rápida.
                    Además, préstamos en el acto y una cuenta gratis con un rendimiento imperdible.
                  </p>
                  <button className="cta-button">Quiero saber más</button>
                </>
              )}
              {index === 1 && (
                <>
                  <h2>Qué lindo es poder</h2>
                  <p>
                    Con Naranja X accedés a una cuenta gratis en una app para poder hacer lo que
                    quieras con tu plata. Explorá todos los productos que tenemos para vos.
                  </p>
                  <button className="cta-button">Descargar app</button>
                </>
              )}
              {index === 2 && (
                <>
                  <h2>Tu futuro comienza aquí</h2>
                  <p>
                    Descubre nuestras soluciones de coaching para transformar tu vida y alcanzar tus
                    metas.
                  </p>
                  <button className="cta-button">Conocer más</button>
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
