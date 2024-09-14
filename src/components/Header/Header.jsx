import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const startGame = () => {
      navigate("/el-juego");
  };

  const startHome = () => {
    navigate("/");
  };


  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
            <a href="/">
          <img src="/logo.png" alt="logo interconectados" />
          </a>
        </div>
        <nav className="nav"></nav>
        {/* <button className="cta-button " onClick={startGame}>
          Juego online
        </button> */}
      </header>
    </div>
  );
}

export default Header;
