import React, { useState } from "react";
import "./CardCarousel.css";

const icon1 = "/icon-1.svg";
const icon2 = "/icon-2.svg";
const icon3 = "/icon-3.svg";
const icon4 = "/icon-4.svg";

// Ejemplo de datos para las tarjetas
const cardData = [
  { id: 1, title: "Agendá una entrevista", icon: "🌟", img: icon4, link: "https://tr.ee/F0QmOmxg_E" }, // Relacionado con el juego
  { id: 2, title: "Mirá todo sobre interconectados", icon: "💪", img: icon3, link: "https://linktr.ee/interconectados.sa"  }, // Relacionado con coaching
  // { id: 3, title: "", icon: "🔗", img: icon2, link: "#"  }, // Relacionado con el juego
  { id: 4, title: "Envianos un WhatsApp", icon: "🧠", img: icon1, link: "https://api.whatsapp.com/send?phone=541157443471"  }, // Relacionado con coaching
];

function CardCarousel() {
  return (
    <div className="carousel-cards">
      <h2>Potenciá tu crecimiento con un acompañamiento profesional</h2>
      <p className="subtitle">
        Descubrí cómo podemos colaborar para alcanzar tus metas, maximizar tu
        potencial y generar cambios positivos en tu vida.
      </p>
      <p className="description">¡Primera sesión exploratoria gratuita!</p>
      <div className="card-carousel">
        <div className="card-container">
          {cardData.map((card, index) => (
            <div>
              <a href={card.link}>
              <img src={card.img} alt={card.title} className="icons" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
