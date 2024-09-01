import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png"

import "./Welcome.css"

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game/Entretenimiento");
  };

  const chooseCategory = () => {
    navigate("/category");
  };
  const chooseAboutGame = () => {
    navigate("/acerca-de-interconectados/el-juego");
  };

  return (
    <div className="welcome">
      <img src={logo} alt="logo interconectados" style={{width: "100px"}}/>
      <h4 style={{marginTop: "0"}}>El juego</h4>
      <button className="btn link" onClick={chooseAboutGame}>
        <a href="/acerca-de-interconectados/el-juego"></a>
        Acerca del juego</button>
      <button className="btn categoryes" onClick={chooseCategory}>¿Cómo se juega?</button>
      <button className="btn categoryes" onClick={chooseCategory}>Elegir categoría</button>
      <button onClick={startGame}>Comenzar partida</button>
    </div>
  );
}

export default Welcome;
