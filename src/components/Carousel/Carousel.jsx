import React, { useState, useEffect } from "react";
import "./Carousel.css";

// Imágenes de ejemplo
import slide1 from "/1.png";
import slide2 from "/2.png";
import slide3 from "/3.png";
import slide4 from "/4.png";

import { useNavigate } from "react-router-dom";
function Carousel() {
  const navigate = useNavigate();
  const slides = [slide1, slide2, slide3,slide4];
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
                    Creá momentos de conexión profunda en reuniones o momentos
                    de reflexión personal con el <strong>Interconectados Juego</strong>{" "}
                  </p>
                  <button className="cta-button " onClick={startGame}>
                    Jugar ahora
                  </button>
                </>
              )}
              {index === 1 && (
                <>
                  <h2>¿Quién querés ser?</h2>
                  <p>Descrubrite, transformate y construí la realidad que querés  a través de conversaciones donde vos sos el protagonista.</p>
                  <button className="cta-button " 
                  // onClick={startGame}
                  >
                   <a href="https://drive.google.com/file/d/14yQUA4NFIc9aAXNYnusVDHqvZcNSrgp0/view?usp=sharing"> Más info</a>
                  </button>
                </>
              )}
              {index === 2 && (
                <>
                  <h2>Tu futuro comienza aquí</h2>
                  <p>Desarrollá tu potencial y cumplí tus sueños.</p>
                  <button className="cta-button " onClick={startGame}>
                    Jugar ahora
                  </button>
                </>
              )}
               {index === 3 && (
                <>
                  <h2>Tu futuro comienza aquí</h2>
                  <p>Desarrollá tu potencial y cumplí tus sueños.</p>
                  <button className="cta-button " onClick={startGame}>
                    Jugar ahora
                  </button>
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
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
