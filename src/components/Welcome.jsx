import React from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game/todxs');
  };

  const chooseCategory = () => {
    navigate('/category');
  };

  return (
    <div className="welcome">
      <h1>Interconectados</h1>
      <button onClick={startGame}>Comenzar el juego</button>
      <button onClick={chooseCategory}>Elegir categoría</button>
    </div>
  );
}

export default Welcome;
