import React, { useState, useEffect } from 'react';
import './CardCarousel.css';

// Ejemplo de datos para las tarjetas
const cardData = [
    { id: 1, title: 'Explorar tus emociones', icon: '🌟' }, // Relacionado con el juego
    { id: 2, title: 'Desarrollar tus habilidades', icon: '💪' }, // Relacionado con coaching
    { id: 3, title: 'Crear conexiones profundas', icon: '🔗' }, // Relacionado con el juego
    { id: 4, title: 'Transformar tu vida', icon: '🧠' }, // Relacionado con coaching
  ];

function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Definir la condición para pantallas móviles
    const isMobile = window.innerWidth < 600;

    // Mover automáticamente las tarjetas si es mobile
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      }, 3000); // Cambia cada 3 segundos

      // Limpiar el intervalo cuando el componente se desmonte
      return () => clearInterval(interval);
    }
  }, [cardData.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="card-carousel">
      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
