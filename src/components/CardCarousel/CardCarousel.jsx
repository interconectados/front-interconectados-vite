import React, { useState } from 'react';
import './CardCarousel.css';

// Ejemplo de datos para las tarjetas
const cardData = [
    { id: 1, title: '', icon: '🌟' }, // Relacionado con el juego
    { id: 2, title: '', icon: '💪' }, // Relacionado con coaching
    { id: 3, title: '', icon: '🔗' }, // Relacionado con el juego
    { id: 4, title: '', icon: '🧠' }, // Relacionado con coaching
  ];

function CardCarousel() {

  return (
    <div className='carousel-cards' ><h2>Te invitamos a:</h2>
    <div className="card-carousel">


      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="card"
          >
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CardCarousel;
