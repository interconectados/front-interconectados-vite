import React, { useState } from 'react';
import './AboutCarousel.css';

const slides = [
  {
    title: "Programa de Coaching GROW",
    description: "El método GROW es una herramienta poderosa diseñada para el establecimiento de metas claras, comprensión de tu situación actual, exploración de diversas estrategias y compromiso con un plan de acción concreto.",
    bullets: [
    ]
  },
  {
    title: "Programa de Coaching GROW",
    description: "Este proceso proporciona una guía efectiva para el autodescubrimiento y el logro de objetivos, convirtiéndose en un recurso valioso para tu desarrollo personal y profesional.",
    bullets: [
    ]
  },
  {
    title: "Programa de Coaching GROW",
    description: "A través de un enfoque estructurado y orientado a resultados, podrás alcanzar tus objetivos más ambiciosos y vivir una vida con propósito y plenitud. ",
    bullets: [
    ]
  },
  {
    title: "Destinatarios",
    description: "Este programa está diseñado para cualquier persona que desee realizar un cambio profundo y sostenible en su vida, ya sea en el ámbito personal, profesional o ambos.",
    bullets: [
    ]
  },
  {
    title: "Estructura",
    description: "",
    bullets: [
      "Evaluación de la Realidad Actual",
      "Definición de la Meta a 5-10 Años",
      "Generación y Evaluación de Opciones",
      "Intervenciones de Creencias",
      "Planificación del Plan de Acción",
      "Seguimiento y Adaptación"
    ]
  },
  {
    title: "Beneficios",
    description: "",
    bullets: [
      "Autoconocimiento",
      "Claridad y Enfoque",
      "Acción y compromiso",
      "Creatividad",
      "Crecimiento personal",
      "Desarrollo profesional"
    ]
  },
  {
    title: "El rol del coach",
    description: "En una conversación: <<El coach tiene todas las preguntas. El coachee tiene todas las respuestas>>",
    bullets: [
      "El coach asiste mediante una serie de preguntas especificas que invitan a reflexionar, conocerse y desafiarse en pos del desarrollo personal del coachee.",
      "El proceso es conversacional, destinado a promover el aprendizaje y nuevas posibilidades de acción.",
    ]
  },
  ,
  {
    title: "Si llegaste hasta acá",
    description: "¡Hablemos!",
    bullets: [
      "Envianos un WA",
      "Agendá una cita",
      "Sumate a la comunidad"
    ]
  },

];

const AboutCarouselGROW = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <h2></h2>
      <div className="carousel-slide">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        <ul>
          {slides[currentSlide].bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Siguiente</button>
      </div>
    </div>
  );
};

export default AboutCarouselGROW;
