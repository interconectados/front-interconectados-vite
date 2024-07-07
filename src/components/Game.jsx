import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const questions = [
  { id: 1, category: 'todxs', text: '¿Cuál es tu color favorito?', likes: 0, dislikes: 0 },
  { id: 2, category: 'familia', text: '¿Cuál es el mejor recuerdo con tu familia?', likes: 0, dislikes: 0 },
  { id: 3, category: 'amigos', text: '¿Qué es lo más divertido que has hecho con tus amigos?', likes: 0, dislikes: 0 },
  { id: 4, category: 'cita', text: '¿Cuál sería tu cita ideal?', likes: 0, dislikes: 0 },
  { id: 5, category: 'solo', text: '¿Qué te gusta hacer cuando estás solo?', likes: 0, dislikes: 0 },
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
          <h1>Pregunta</h1>
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
