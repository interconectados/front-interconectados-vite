import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const startGame = () => {
      navigate("/el-juego");
  };

  const startHome = () => {
    navigate("/");
  };


  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">
            <a href="/">
          <img src="/logo.png" alt="logo interconectados" />
          </a>
        </div>
        <nav className="nav"></nav>
        <button className="cta-button " onClick={startGame}>
          Juego online
        </button>
      </header>
    </div>
  );
}

export default Home;
