import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

  const questions = [
    { id: 1, text: "¿cuál fué tu mejor cumpleaños?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 2, text: "¿cúal es tu lunar favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 3, text: "¿con qué soñas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 4, text: "¿cuál fué tu mejor viaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 5, text: "¿cual fué tu peor viaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 6, text: "¿cuál es tu anécdota favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 7, text: "¿a dónde te gustaría viajar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 8, text: "¿cuál es tu lugar favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 9, text: "¿cuál es tu comida favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 10, text: "¿cuál es tu sabor favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 11, text: "¿cuál es tu aroma favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 12, text: "¿cuál es tu estación favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 13, text: "¿cuál es tu día favorito del año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 14, text: "¿cuál es tu libro favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 15, text: "¿cuál es tu autor favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 16, text: "¿cuál es tu película favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 17, text: "¿cuál es tu director de cine favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 18, text: "¿cuál es tu canción favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 19, text: "¿cuál es tu artista musical favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 20, text: "¿cuál es tu género musical favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 21, text: "¿cuál es tu deporte favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 22, text: "¿cuál es tu equipo favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 23, text: "¿en qué piensan las plantas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 24, text: "¿cuál fué tu última caída?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 25, text: "¿cuándo fué la última vez que te caíste?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 26, text: "¿cuál fué la desición más difícil que tuviste que tomar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 27, text: "¿cuál fué el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 28, text: "¿qué impulsó el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 29, text: "¿qué hecho hizo que te cambie la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 30, text: "¿cuál fué la mejor desición que tomaste en la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 31, text: "¿cuál fué la desición más fácil de tomar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 32, text: "¿qué disfrutas hacer en tu estación favorita del año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 33, text: "¿qué te gusta hacer antes de dormir?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 34, text: "¿qué tenes que hacer si o si antes de ir a dormir?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 35, text: "¿qué es lo primero que haces cuando te levantas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 36, text: "¿qué te gusta hacer cuando te despertas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 37, text: "¿cuáles son los 3 valores mas importantes para vos?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 38, text: "¿cómo te imaginás dentro de 5 años?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 39, text: "¿qué esperás del futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 40, text: "¿qué te preocupa del futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 41, text: "¿qué te gustaría cambiar del pasado?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 42, text: "¿cuál fué tu mayor logro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 43, text: "¿cuál fué tu mayor fracaso?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 44, text: "¿cuál fué tu mayor aprendizaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 45, text: "¿qué te gustaría aprender?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 46, text: "¿cuál es tu sueño?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 47, text: "¿cuál es tu mayor miedo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 48, text: "¿qué te da tranquilidad?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 49, text: "¿qué te genera incertidumbre?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 50, text: "¿cuál es tu mayor virtud?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 51, text: "¿cuál es tu mayor defecto?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 52, text: "¿cómo te describirías en una palabra?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 53, text: "¿cómo te describirías en una frase?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 54, text: "¿cuál es tu talento oculto?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 55, text: "¿qué habilidad te gustaría tener?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 56, text: "¿qué cambiarías de vos?", category: "todxs", likes: 0, dislikes: 0 }  ,
    { id: 38, text: "¿cómo te imaginás dentro de 5 años?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 39, text: "¿qué experiencia te enseñó mucho sobre el amor?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 40, text: "¿qué desición te cambió la vida?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 41, text: "¿cuál fué lo más emocionante que viviste?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 42, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo ¿dónde sería?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 43, text: "¿qué te inspira?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 44, text: "¿qué evento reciente hizo que cambies de opinión en algo?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 45, text: "¿qué no negociás?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 46, text: "¿qué error del pasado te enseñó la lección más valiosa?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 47, text: "¿quién en tu vida te inspira a ser mejor?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 48, text: "¿cuál fué tu mayor desafío el año pasado?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 49, text: "¿cuál es tu mayor desafío actual?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 50, text: "¿cómo te gustaría ser recordado?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 51, text: "¿qué te sorprende de vos mismo ultimamente?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 52, text: "¿qué actividad te ayuda a encontrar la paz?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 53, text: "¿qué tipo de persona sos?", category: "amigos", likes: 0, dislikes: 0 },
];

function Game() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const fetchQuestion = () => {
      const filteredQuestions = questions.filter(q => q.category === category);
      const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setQuestion(randomQuestion);
    };
    fetchQuestion();
  }, [category]);

  const handleFeedback = (type) => {
    // Actualizar los likes/dislikes de la pregunta
    if (type === 'like') {
      question.likes += 1;
    } else if (type === 'dislike') {
      question.dislikes += 1;
    }

    // Mostrar la siguiente pregunta después de un segundo
    setTimeout(() => {
      setShowFeedback(false);
      const filteredQuestions = questions.filter(q => q.category === category);
      const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setQuestion(randomQuestion);
    }, 1000);
  };

  const showFeedbackScreen = () => {
    setShowFeedback(true);
  };

  if (!question) {
    return <div>Cargando pregunta...</div>;
  }

  return (
    <div className="game">
      {!showFeedback ? (
        <div>
          <h2>Pregunta</h2>
          <p>{question.text}</p>
          <button onClick={showFeedbackScreen}>Siguiente</button>
        </div>
      ) : (
        <div>
          <h1>Feedback</h1>
          <button onClick={() => handleFeedback('like')}>Me gusta</button>
          <button onClick={() => handleFeedback('dislike')}>No me gusta</button>
        </div>
      )}
      <footer>
        <button onClick={() => navigate('/')}>Volver al menú principal</button>
      </footer>
    </div>
  );
}

export default Game;
