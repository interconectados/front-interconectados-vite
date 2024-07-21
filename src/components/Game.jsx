import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "./questionsReflection";

function Game() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [usedQuestions, setUsedQuestions] = useState([]);

  const fetchQuestion = () => {
    const filteredQuestions = questions.filter(
      (q) => q.category === category && !usedQuestions.includes(q.id)
    );
    if (filteredQuestions.length === 0) {
      setQuestion({ text: "No hay más preguntas en esta categoría" });
      return;
    }
    const randomQuestion =
      filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    setQuestion(randomQuestion);
    setUsedQuestions((prevUsedQuestions) => [...prevUsedQuestions, randomQuestion.id]);
  };

  useEffect(() => {
    setUsedQuestions([]);  // Reset the used questions when category changes
    fetchQuestion();
  }, [category]);

  const handleNextQuestion = () => {
    fetchQuestion();
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
      <div>
        <p>Responde:</p>
        <br />
        <h2 className="question">{question.text}</h2>
        <br />
        {question.id && (
          <button onClick={handleNextQuestion} style={{}}>
            Siguiente
          </button>
        )}
      </div>
      <div>
        <button className="btn out" onClick={() => navigate("/")}>
          Salir
        </button>
      </div>
    </div>
  );
}

export default Game;
