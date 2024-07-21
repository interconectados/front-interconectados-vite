import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "./questionsReflection";


function Game() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const fetchQuestion = () => {
      const filteredQuestions = questions.filter(
        (q) => q.category === category
      );
      const randomQuestion =
        filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setQuestion(randomQuestion);
    };
    fetchQuestion();
  }, [category]);

  const handleFeedback = (type) => {
    // Actualizar los likes/dislikes de la pregunta
    if (type === "like") {
      question.likes += 1;
    } else if (type === "dislike") {
      question.dislikes += 1;
    }

    // Mostrar la siguiente pregunta después de un segundo
    setTimeout(() => {
      setShowFeedback(false);
      const filteredQuestions = questions.filter(
        (q) => q.category === category
      );
      const randomQuestion =
        filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setQuestion(randomQuestion);
    }, 1000);
  };

  const showFeedbackScreen = () => {
    setShowFeedback(true);
  };

  if (!question) {
    return (
      <div>
        Cargando pregunta...
        <div>
          <button onClick={() => navigate("/")}>Salir</button>
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      {!showFeedback ? (
        <div onClick={showFeedbackScreen}>
          <p>Responde:</p>
          <br />
          <h2 className="question">{question.text}</h2>
          <br />
          <button onClick={showFeedbackScreen} style={{}}>
            Siguiente
          </button>
        </div>
      ) : (
        <div>
          <h2>¿Te gustó?</h2>
          <button
            className="btn no"
            style={{}}
            onClick={() => handleFeedback("dislike")}
          >
            No
          </button>
          <button
            className="btn si"
            style={{}}
            onClick={() => handleFeedback("like")}
          >
            Si
          </button>
        </div>
      )}
      <div>
        <button className="btn out" onClick={() => navigate("/")}>
          Salir
        </button>
      </div>
    </div>
  );
}

export default Game;
