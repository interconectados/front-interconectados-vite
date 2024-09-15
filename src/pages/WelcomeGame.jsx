import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.svg"
import "./Home.css"
import Header from "../components/Header/Header";

function WelcomeGame() {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game/Entretenimiento");
  };

  const chooseCategory = () => {
    navigate("/el-juego/categorias");
  };
  const chooseAboutGame = () => {
    navigate("/acerca-de-interconectados/juego");
  };
  const chooseAboutCompany= () => {
    navigate("/acerca-de-interconectados");
  };
  return (
    <div>
      {/* Header */}
     <Header/>
    <div className="welcome">
      <a href="/">
      <img src={logo} alt="logo interconectados" style={{width: "100px"}}/>
      </a>
      <h4 style={{marginTop: "0"}}>El juego</h4>
      <div className="content-buttons">
        <a href="/acerca-de-interconectados" className=""></a>
        <button className="btn outline" onClick={chooseAboutCompany}>Acerca de Interconectados</button>
      <button className="btn outline" onClick={chooseAboutGame}>¿Cómo se juega?</button>
      <button className="btn outline" onClick={chooseCategory}>Elegir categoría</button>
      <button  className = "cta "onClick={startGame}>Comenzar partida</button>
      </div>
    </div>
    </div>
  );
}

export default WelcomeGame;