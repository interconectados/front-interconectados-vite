import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import "./AboutGame.css";
import CardCarousel from "../components/CardCarousel/CardCarousel";

function AboutSesion() {
  const navigate = useNavigate();

  const AboutGROW = () => {
    navigate("/coaching/grow#");
  };

  return (
    <>
      <Header />
      <h3 className="title">
        Sesiones 1 a 1 <br /> Construite a traves del lenguaje
      </h3>
      <h4 className="title"></h4>
      {/* FeatureSection */}
      <section className="feature-section">
        <div className="feature-content">
          <h2>
            ¿Alguna vez te pasó de estar en una situación y no saber cómo
            resolverla?
          </h2>
          <p>
            Hay muchos ejemplos de estas situaciones como una mudanza, una nueva
            relación, un ascenso, un conflicto relacional, una decisión, una
            conversación difícil, etc. <br />
            <br />
            En respuesta a esto, desde Interconectados Coaching
            brindamos un espacio seguro totalmente tuyo donde podés conversar
            acerca de estas situaciones que te atraviesan y buscar algo
            diferente.
            <br />
            <br />
            Ese ‘algo diferente’ es hacerte de la capacidad de pensar, sentir y
            accionar de una forma que te hagan sentir fiel a vos mismo en pos de
            crecer y mejorar.{" "}
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
          <h2>¿De qué se trata?</h2>
          <p>
            Es un método conversacional donde ayudamos a las personas a ver las
            situaciones desde distintas perspectivas. Esto a su vez
            disponibiliza nuevas opciones de cómo ser y actuar en la vida.
            <br />
            <br />
            Este tipo de coaching es muy completo, con él se pueden trabajar
            aspectos cotidianos o profundos de la vida.
            <br />
            <br />
            Además, es lo suficientemente flexible para trabajar temas
            completamente diferentes y, en apariencia, sin relación de una
            sesión a otra.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=541157443471"
            target="_blank"
          >
            <button className="cta-button">
              Reservar cita
            </button>
          </a>
        </div>
      </section>

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
            <ul>
              <li>Sesión semanal, quincenal o a convenir.</li>
              <li>Duración de una hora cada sesión. </li>
            </ul>
          </p>
        </div>
        <div className="feature-image">
          <img src="/images/4.svg" alt="Feature" />
        </div>
      </section>

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
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=541157443471"
            target="_blank"
          >
            <button className="cta-button">
              Reservar cita
            </button>
          </a>
        </div>
      </section>
      <section className="feature-section">
        <div className="feature-content">
          <h2>Programa GROW 🌱</h2>
          <p>
          Diseñado para conocerte, expandir tu potencial, establecer objetivos a largo plazo y <strong>lograr tu mejor versión</strong>.
          </p>
          <button className="cta-button" onClick={AboutGROW}>
              Más sobre GROW
            </button>
        </div>
        <div className="feature-image">
          <img src="/images/2.svg" alt="Feature" />
        </div>
        
      </section>
      <CardCarousel />
    </>
  );
}

export default AboutSesion;
