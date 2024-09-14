import React from 'react';
import './AboutCompany.css';

function AboutCompany() {
  return (
    <div className="about-company">
      <header className="header">
        <div className="logo">
        <a href="/">
          <img src="/logo.png" alt="logo interconectados" />
          </a>
        </div>
        <nav className="nav"></nav>
       
      </header>  
      <div className='body-about'> 
      <section className="mission-section">
        <h2>¿Cuál es nuestra misión?</h2>
        <p>
          Queremos desarrollar una comunidad diversa que inspire la expansión y el desarrollo humano en todos sus aspectos. 
        </p>
        <p>
          Buscamos ser un catalizador global para la evolución personal y colectiva, ofreciendo oportunidades de enriquecimiento para personas de todas las edades y culturas, en las cuales el intercambio de pensamientos, visiones y sentimientos sean un eje claro.
        </p>
        <p>
          Nos comprometemos a cultivar el crecimiento, la comprensión mutua y la transformación a través de herramientas que promueven la observación externa e interna así como la colaboración y la exploración de la humanidad.
        </p>
        <p>
          Queremos que las personas disfruten del viaje que significa ser humano.
        </p>
      </section>

      <section className="values-section">
        <h2>Nuestros Valores</h2>
        <p>
          En Interconectados, nos guiamos por valores fundamentales que no solo definen quiénes somos, sino que también reflejan la comunidad que aspiramos a construir. Estos principios son esenciales para fomentar una evolución personal y colectiva, asegurando que cada paso hacia adelante esté alineado con un propósito significativo. A continuación, presentamos los pilares que sostienen nuestra visión:
        </p>
        <ul>
          <li><strong>Respeto:</strong> Valoramos y practicamos el respeto mutuo en cada interacción.</li>
          <li><strong>Creatividad:</strong> Inspiramos creatividad constantemente.</li>
          <li><strong>Diversidad e Inclusión:</strong> Celebramos la diversidad e impulsamos la inclusión con respeto.</li>
          <li><strong>Desarrollo Personal:</strong> Apoyamos el crecimiento y desarrollo personal de cada individuo.</li>
          <li><strong>Colaboración:</strong> Fomentamos la colaboración para lograr objetivos comunes.</li>
        </ul>
      </section>

      <section className="contribution-section">
        <h2>¿Qué queremos aportar?</h2>
        <ul>
          <li><strong>Fomentar Conexiones Profundas:</strong> Transformar la forma en que las personas se conectan en la era digital, promoviendo interacciones auténticas y significativas que trascienden lo superficial, fomentando vínculos duraderos y apoyo mutuo.</li>
          <li><strong>Cultivar el Crecimiento Personal:</strong> Ser un catalizador para el desarrollo personal y profesional de las personas, proporcionando herramientas, recursos y experiencias que inspiren a los individuos a alcanzar su máximo potencial y afrontar los desafíos de la vida con resiliencia.</li>
          <li><strong>Promover la Empatía y la Comprensión mutua:</strong> Aspiramos a ser un puente para la comprensión, reduciendo prejuicios y fomentando una sociedad más empática e inclusiva.</li>
          <li><strong>Impulsar el Compromiso Social y Ecológico:</strong> Inspirar a las personas a tomar acción sobre cuestiones sociales y medioambientales, motivándolos a ser agentes de cambio a través de la conscientización de nuestra conexión con la naturaleza.</li>
          <li><strong>Revolucionar el Entretenimiento:</strong> Ofrecer una alternativa enriquecedora al entretenimiento convencional, a través de juegos y actividades que no solo diviertan, sino que también eduquen, inspiren y conecten a las personas en niveles más profundos.</li>
          <li><strong>Crear un Legado de Cambio Positivo:</strong> Queremos que "Interconectados" sea recordado como algo que inspiró a las personas a reconectarse consigo mismas, con los demás y con el mundo a su alrededor.</li>
        </ul>
<button className="cta-button" style={{maxWidth: "600px"}}>
        <a href="/">Todo sobre Interconectados</a>
        </button>

      </section>
      </div>   
      <footer>
        <p>La visión de "Interconectados" es inspirar un cambio positivo, fomentar relaciones más significativas y contribuir a la construcción de una sociedad más consciente y conectada.</p>
        <a href="https://linktr.ee/interconectados.sa">&copy; 2024 @interconectados_ok</a>
      </footer>
    </div>
  );
}

export default AboutCompany;
