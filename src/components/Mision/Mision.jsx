import React from "react";
import "./Mision.css";
import { useNavigate } from "react-router-dom";


function Mision() {
  const navigate = useNavigate();
 
  const chooseAboutCompany = () => {
    navigate("/acerca-de-interconectados");
  };
 

  return (
    <div>
      {/* Sección Acerca de... */}
      <section className="testimonials">
        <h2>Nuestra Misión</h2>
        <div className="testimonial">
          <h3>
            Inspirar un cambio positivo y conectar a las personas en un nivel
            más profundo.
          </h3>
          <button className="cta-button" onClick={chooseAboutCompany}>
          Nuestros valores
          </button>
          <button className="cta-button out">
            <a href="https://linktr.ee/interconectados.sa">
              Redes sociales
            </a>
          </button>
        </div>
      </section>

    </div>
  );
}

export default Mision;
