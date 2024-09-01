import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png"

import "./Welcome.css"

function Welcome() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game/Conexión");
  };

  const chooseCategory = () => {
    navigate("/el-juego/category");
  };
  const chooseAboutGame = () => {
    navigate("/acerca-de-interconectados/el-juego");
  };

  return (
    <div className="welcome">
      <img src={logo} alt="logo interconectados" style={{width: "100px"}}/>
      <h4 style={{marginTop: "0"}}>El juego</h4>
        <a href="/acerca-de-interconectados">      Acerca de Interconectados</a>
      <button className="btn outline" onClick={chooseCategory}>¿Cómo se juega?</button>
      <button className="btn outline" onClick={chooseCategory}>Elegir categoría</button>
      <button  className = "cta "onClick={startGame}>Comenzar partida</button>
    </div>
  );
}

export default Welcome;
