import React from "react";
import { useNavigate } from "react-router-dom";

import "./AboutGame.css";
import Header from "../components/Header/Header";
import CardCarousel from "../components/CardCarousel/CardCarousel";

function AboutGROW() {
  const navigate = useNavigate();
  const AboutSesion = () => {
    navigate("/coaching/sesiones");
  };

  return (
    <>
      <Header />
      <h3 className="title">Programa de Coaching GROW</h3>
      <h4 className="title">Goal - Reality - Options - Will</h4>
      <h4 className="title"></h4>
      {/* FeatureSection */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>¿De qué se trata?</h2>
          <p>
            El método GROW es una herramienta poderosa diseñada para el
            establecimiento de metas claras, comprensión de tu situación actual,
            exploración de diversas estrategias y compromiso con un plan de
            acción concreto.
            <br />
            <br />
            Este proceso proporciona una guía efectiva para el
            autodescubrimiento y el logro de objetivos, convirtiéndose en un
            recurso valioso para tu desarrollo personal y profesional.
            <br />
            <br />A través de un enfoque estructurado y orientado a resultados,
            podrás alcanzar tus objetivos más ambiciosos y vivir una vida con
            propósito y plenitud.
          </p>
        </div>
        <div className="feature-image">
          <img src="/images/7.svg" alt="Feature" />
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-image">
          <img src="/images/1.svg" alt="Feature" />
        </div>
        <div className="feature-content 2">
          <h2>Destinatarios</h2>
          <p>
            Este programa está diseñado para cualquier{" "}
            <strong>
              persona que desee realizar un cambio profundo y sostenible en su
              vida
            </strong>
            , ya sea en el ámbito personal, profesional o ambos.
            <br />
            <br />
            Si estás buscando esto y te considerás listo para trabajar 'de ahora
            en adelante', ¡escribinos!
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=541157443471"
            target="_blank"
          >
            <button className="cta-button" onClick={AboutSesion}>
              Reservar cita
            </button>
          </a>
        </div>
      </section>

      {/* FeatureSection */}
   {/* FeatureSection */}

   <section className="feature-section">
        <div className="feature-content">
          <h2>Forma de trabajo</h2>
          <p>
            Este método se puede realizar perfectamente de forma presencial, por
            videollamada o mediante una llamada tradicional.
            <br />
            <br />
            Se desarrolla en :
            </p>
            <ul>
              <li>Duración del programa 8 sesiones.</li>
              <li>Sesiones semanales o quincenales.</li>
              <li>Duración de una hora cada sesión. </li>
            </ul>
          <p>Podés ver más detalles del programa <a  target="_blank" href="https://drive.google.com/file/d/1r6lqhXaneRY1_04bKEtfutxLRU57sKgE/view?usp=sharing">acá</a>.</p>
        </div>
        <div className="feature-image">
          <img src="/images/4.svg" alt="Feature" />
        </div>
      </section>
      {/* <section className="feature-section">
        <div className="feature-content">
          <h2>Estructura</h2>
          <strong>
            <p>Evaluación de la Realidad Actual.</p>
            <p>Definición de la Meta a 5-10 Años.</p>
            <p>Generación y Evaluación de Opciones.</p>
            <p>Intervenciones de Creencias.</p>
            <p>Planificación del Plan de Acción.</p>
            <p>Seguimiento y Adaptación.</p>
          </strong>
        </div>
        <div className="feature-image">
          <img src="/images/4.svg" alt="Feature" />
        </div>
      </section> */}

      <section className="feature-section">
        <div className="feature-image">
          <img src="/images/6.svg" alt="Feature" />
        </div>
        <div className="feature-content 2">
          <h2>El rol del coach</h2>
          <p>
            El coach asiste en este proceso mediante preguntas y tareas que
            invitan a reflexionar, conocerse y desafiarse en pos del desarrollo
            personal del coachee. El coach te acompaña para:
          </p>
          <ul>
            <li>
              Reflexionar sobre tus palabras y definir con claridad quién
              quieres ser.
            </li>
            <li>Asumir la responsabilidad de tus decisiones y acciones.</li>
            <li>Reconocer el poder que tenés para transformar tu vida.</li>
            <li>
              {" "}
              Asumir el poder que está en tus manos, y desarrollarlo con
              acciones concretas en corto y largo plazo.
            </li>
          </ul>

          <a
            href="https://api.whatsapp.com/send?phone=541157443471"
            target="_blank"
          >
            <button className="cta-button" onClick={AboutSesion}>
              Reservar cita
            </button>
          </a>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-content">
          <h2>Sesiones 1 a 1</h2>
          <p>Un espacio de expresión, reflexión y aprendizaje.</p>
          <button className="cta-button" onClick={AboutSesion}>
            Más sobre sesiones
          </button>
        </div>
        <div className="feature-image">
          <img src="/images/4.svg" alt="Feature" />
        </div>
      </section>
      <CardCarousel />
    </>
  );
}

export default AboutGROW;
