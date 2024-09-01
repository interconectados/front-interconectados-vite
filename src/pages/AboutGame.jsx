import React from 'react';

import "./AboutGame.css"

function AboutGame() {
    const startGame = () => {
        navigate("/game/Entretenimiento");
      };
    
  return (
    <div style={
        { padding: "10%"}
    } className="about-game">
      <h1>Interconectados El Juego</h1>
      <h2>¿De qué se trata?</h2>
      
      <section className="section">
        <h3>Objetivo del Juego</h3>
        <p>
          El objetivo de "Interconectados: El Juego" es ser un catalizador para crear conversaciones significativas que profundicen las conexiones humanas.
        </p>
        <p>
          A través de preguntas diseñadas para explorar emociones, experiencias y valores, el juego fomenta la empatía, la comprensión y el aprendizaje mutuo entre los jugadores. Además, "Interconectados" ofrece la posibilidad de jugar en solitario, permitiendo a los jugadores reflexionar y conocerse a sí mismos en momentos de introspección.
        </p>
        <p>
          Más allá del simple entretenimiento, la intención es abrir espacios de diálogo, tanto internos como con los demás, donde cada participante pueda descubrir nuevas perspectivas, fortalecer lazos y promover un crecimiento personal y colectivo.
        </p>
        <br />
        <button className="btn link" onClick={startGame}>Jugar</button>
      </section>

      <section className="section">
        <h2>¿Cómo se juega?</h2>
        <p>
          Existen diversas formas de disfrutar este juego, y a continuación te presentamos algunas sugerencias. Sin embargo, cada jugador tiene la libertad de elegir cómo quiere vivir la experiencia.
        </p>
      </section>

      <section className="section">
        <h3>Preparación</h3>
        <p>
          Reúne a los participantes en un círculo o una disposición cómoda para todos. ¡Lo importante es que todos se sientan a gusto!
        </p>
        <p>
          Asegúrate de que todos tengan acceso a las preguntas, ya sea en formato digital o impreso.
        </p>
        <p>
          Si estás jugando con vos mismo, intentá estar en un espacio tranquilo donde puedas reflexionar sobre tus respuestas.
        </p>
      </section>

      <section className="section">
        <h3>Inicio del Juego</h3>
        <p>
          Vamos a decidir quién empieza. Puede ser la persona más joven, la que sugirió el juego o simplemente alguien elegido al azar.
        </p>
        <p>
          El primer jugador responde la primer pregunta del carrusel.
        </p>
      </section>

      <section className="section">
        <h3>Modo de Juego</h3>
        <p>
          <strong>Modo Libre:</strong> El jugador puede responder la pregunta él mismo o elegir a otra persona para que la responda.
        </p>
        <p>
          <strong>Modo Ronda:</strong> Todos los jugadores responden la misma pregunta por turnos. Esto permite conocer diferentes perspectivas sobre el mismo tema.
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
            Participa activamente y disfruta de las historias y experiencias que compartan los demás.
          </li>
          <li>
            <strong>Sé honesto:</strong> Las respuestas sinceras crean una conexión más profunda. No tengas miedo de abrirte.
          </li>
          <li>
            <strong>Sé respetuoso:</strong> Escucha con atención y respeto las respuestas de los demás. Todos merecen ser escuchados sin interrupciones.
          </li>
          <li>
            <strong>Diviértete:</strong> El objetivo es disfrutar y conocernos más. ¡Ríe, reflexiona y sobre todo, disfruta del momento! 😄
          </li>
        </ul>
        <br />
        <button className="btn link" onClick={startGame}>Jugar</button>
      </section>
    </div>
  );
}

export default AboutGame;
