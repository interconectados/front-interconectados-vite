import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game/todxs");
  };

  const chooseCategory = () => {
    navigate("/category");
  };

  return (
    <div className="welcome">
      <h2 className="mb-0">Interconectados_ok</h2>
      <h4>El juego</h4>
      <button onClick={startGame}>Comenzar partida</button>
      <button onClick={chooseCategory}>Elegir categoría</button>
    </div>
  );
}

export default Welcome;
