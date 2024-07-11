import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png"


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
      <img src={logo} alt="logo interconectados" style={{width: "100px"}}/>
      <h4 style={{marginTop: "0"}}>El juego</h4>
      <button onClick={startGame}>Comenzar partida</button>
      <button className="btn categoryes" onClick={chooseCategory}>Elegir categoría</button>
    </div>
  );
}

export default Welcome;
