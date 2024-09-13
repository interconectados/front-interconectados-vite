import React, { useState } from 'react';
import './AboutCarousel.css';

const slides = [
  {
    title: "Bienvenido al juego",
    description: "Explora el poder de la conexión humana a través de este juego interactivo.",
    bullets: [
      "Descubre temas profundos para reflexionar.",
      "Comparte tus ideas con otros jugadores.",
      "Conéctate de una manera significativa."
    ]
  },
  {
    title: "¿Cómo se juega?",
    description: "Existen diversas formas de disfrutar este juego, y a continuación te presentamos algunas sugerencias. Sin embargo, cada jugador tiene la libertad de elegir cómo quiere vivir la experiencia.",
    bullets: [
    ]
  },
  {
    title: "Preparación",
    description: "",
    bullets: [
      "Reúne a los participantes en una disposición cómoda para todos. Asegúrate de que todos tengan acceso a las preguntas.",
      "Si estás jugando con vos mismo, intentá estar en un espacio tranquilo donde puedas reflexionar sobre tus respuestas.",
    ]
  },
  {
    title: "Inicio del Juego",
    description: "Puede iniciar la ronda la persona más joven, la que sugirió el juego o simplemente alguien elegido al azar.",
    bullets: [
     
    ]
  },
  {
    title: "Modo de Juego",
    description: "Prepárate para una experiencia única de juego.",
    bullets: [
      "Respondo Yo: El jugador de turno responde.",
      "Respondo Otro: El jugador de turno elige quién responde.",
      "Modo Libre: El jugador de turno puede responder la pregunta él mismo o elegir a otra persona para que la responda."
    , "Modo Ronda: Todos los jugadores responden la pregunta por turnos."
]
  },
  {
    title: "Cambio de Turno",
    description: "Después de que la pregunta ha sido respondida, el siguiente jugador en el orden establecido responde la siguiente pregunta y el juego continúa.",
    bullets: [
     ]
  },
  {
    title: "Consejos para un Juego Exitoso",
    description: "",
    bullets: [
        "Escucha activa: Cuando alguien esté respondiendo, escucha con atención. ¡Es su momento! Todos queremos sentirnos escuchados y valorados.",
"Sé honesto: Las respuestas sinceras crean una conexión más profunda. No tengas miedo de abrirte.",
"Sé respetuoso: Respeta las respuestas de los demás aún cuando no estés de acuerdo, puede ser un buen momento para abrir tu mirada sobre el mundo.",
"Diviértete: El objetivo es disfrutar y conocernos más. ¡Ríe, reflexiona y sobre todo, disfruta del momento! 😄"
     ]
  }
];

const AboutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
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

export default AboutCarousel;
