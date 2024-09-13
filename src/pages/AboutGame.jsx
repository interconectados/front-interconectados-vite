import React from 'react';

import "./AboutGame.css"

function AboutGame() {
    const startGame = () => {
        navigate("/game/Entretenimiento");
      };
    
  return (
   <div> {/* Header */}
   <header className="header">
     <div className="logo">
       <img src="/logo.png" alt="logo interconectados" />
     </div>
     <nav className="nav"></nav>
     <button className="cta-button " onClick={startGame}>
       Jugar ahora
     </button>
   </header>
    <div style={
        { padding: "10%"}
    } className="about-game">
    
      <section className="section">
        <h2>¿Cómo se juega?</h2>
        <p>La idea de este juego es crear conversaciones significativas y profundas con quién desees jugarlo.</p>
        <p>
          Existen diversas formas de disfrutar este juego, y a continuación te presentamos algunas sugerencias. Sin embargo, cada jugador tiene la libertad de elegir cómo quiere vivir la experiencia.
        </p>
      </section>
      <section className="section">
        <h3>Preparación</h3>
        <p>
          Reúne a los participantes en una disposición cómoda para todos.
          Asegúrate de que todos tengan acceso a las preguntas.
        </p>
        <p>
          Si estás jugando con vos mismo, intentá estar en un espacio tranquilo donde puedas reflexionar sobre tus respuestas.
        </p>
      </section>

      <section className="section">
        <h3>Inicio del Juego</h3>
        <p>
          Puede iniciar la ronda la persona más joven, la que sugirió el juego o simplemente alguien elegido al azar.
        </p>
        <p>
          Al primer jugador le toca la primer pregunta del carrusel y responde según el modo de juego elegido.
        </p>
      </section>

      <section className="section">
        <h3>Modo de Juego</h3>
       
        <p>
          <strong>Respondo Yo:</strong> El jugador de turno responde.
        </p>
        <p>
          <strong>Respondo Otro:</strong> El jugador de turno elige quién responde.
        </p>
        <p>
          <strong>Modo Libre:</strong> El jugador de turno puede responder la pregunta él mismo o elegir a otra persona para que la responda.
        </p>
        <p>
          <strong>Modo Ronda:</strong> Todos los jugadores responden la pregunta por turnos.
        </p>
      </section>

      <section className="section">
        <h3>Cambio de Turno</h3>
        <p>
          Después de que la pregunta ha sido respondida, el siguiente jugador en el orden establecido responde la siguiente pregunta y el juego continúa.
        </p>
      </section>

      <section className="section">
        <h3>Consejos para un Juego Exitoso</h3>
        <ul>
          <li>
            <strong>Escucha Activa:</strong> Cuando alguien esté respondiendo, escucha con atención y respeto. ¡Es su momento! Haz preguntas adicionales o pide más detalles para profundizar en la conversación. Todos queremos sentirnos escuchados y valorados.
          </li>
          <li>
            <strong>Sé honesto:</strong> Las respuestas sinceras crean una conexión más profunda. No tengas miedo de abrirte.
          </li>
          <li>
            <strong>Sé respetuoso:</strong> Respeta las respuestas de los demás aún cuando no estés de acuerdo, puede ser un buen momento para abrir tu mirada sobre el mundo.
          </li>
          <li>
            <strong>Diviértete:</strong> El objetivo es disfrutar y conocernos más. ¡Ríe, reflexiona y sobre todo, disfruta del momento! 😄
          </li>
        </ul>
        <br />
        <button className="btn link" onClick={startGame}>
            <a href="/el-juego">Jugar</a>
        </button>
      </section>
    </div>
    </div>
  );
}

export default AboutGame;
