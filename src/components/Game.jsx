import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

  const questions = [
    { id: 21, text: "¿cuál fué tu mejor cumpleaños?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 22, text: "¿cúal es tu lunar favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 23, text: "¿con qué soñas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 24, text: "¿cuál fué tu mejor viaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 25, text: "¿cual fué tu peor viaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 26, text: "¿cuál es tu anécdota favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 27, text: "¿a dónde te gustaría viajar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 28, text: "¿cuál es tu lugar favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 29, text: "¿cuál es tu comida favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 210, text: "¿cuál es tu sabor favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 211, text: "¿cuál es tu aroma favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 212, text: "¿cuál es tu estación favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 213, text: "¿cuál es tu día favorito del año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 214, text: "¿cuál es tu libro favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 215, text: "¿cuál es tu autor favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 216, text: "¿cuál es tu película favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 217, text: "¿cuál es tu director de cine favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 218, text: "¿cuál es tu canción favorita?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 219, text: "¿cuál es tu artista musical favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 220, text: "¿cuál es tu género musical favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 221, text: "¿cuál es tu deporte favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 222, text: "¿cuál es tu equipo favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 223, text: "¿en qué piensan las plantas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 224, text: "¿cuál fué tu última caída?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 225, text: "¿cuándo fué la última vez que te caíste?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 226, text: "¿cuál fué la desición más difícil que tuviste que tomar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 227, text: "¿cuál fué el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 228, text: "¿qué impulsó el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 229, text: "¿qué hecho hizo que te cambie la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 230, text: "¿cuál fué la mejor desición que tomaste en la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 231, text: "¿cuál fué la desición más fácil de tomar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 232, text: "¿qué disfrutas hacer en tu estación favorita del año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 233, text: "¿qué te gusta hacer antes de dormir?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 234, text: "¿qué tenes que hacer si o si antes de ir a dormir?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 235, text: "¿qué es lo primero que haces cuando te levantas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 236, text: "¿qué te gusta hacer cuando te despertas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 237, text: "¿cuáles son los 3 valores mas importantes para vos?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 238, text: "¿cómo te imaginás dentro de 5 años?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 239, text: "¿qué esperás del futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 240, text: "¿qué te preocupa del futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 241, text: "¿qué te gustaría cambiar del pasado?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 242, text: "¿cuál fué tu mayor logro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 243, text: "¿cuál fué tu mayor fracaso?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 244, text: "¿cuál fué tu mayor aprendizaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 245, text: "¿qué te gustaría aprender?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 246, text: "¿cuál es tu sueño?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 247, text: "¿cuál es tu mayor miedo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 248, text: "¿qué te da tranquilidad?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 249, text: "¿qué te genera incertidumbre?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 250, text: "¿cuál es tu mayor virtud?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 251, text: "¿cuál es tu mayor defecto?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 252, text: "¿cómo te describirías en una palabra?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 253, text: "¿cómo te describirías en una frase?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 254, text: "¿cuál es tu talento oculto?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 255, text: "¿qué habilidad te gustaría tener?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 256, text: "¿qué cambiarías de vos?", category: "todxs", likes: 0, dislikes: 0 }  ,
    
    { id: 338, text: "¿cómo te imaginás dentro de 5 años?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 339, text: "¿qué experiencia te enseñó mucho sobre el amor?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 340, text: "¿qué desición te cambió la vida?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 341, text: "¿cuál fué lo más emocionante que viviste?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 342, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo ¿dónde sería?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 343, text: "¿qué te inspira?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 344, text: "¿qué evento reciente hizo que cambies de opinión en algo?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 345, text: "¿qué no negociás?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 346, text: "¿qué error del pasado te enseñó la lección más valiosa?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 347, text: "¿quién en tu vida te inspira a ser mejor?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 348, text: "¿cuál fué tu mayor desafío el año pasado?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 349, text: "¿cuál es tu mayor desafío actual?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 350, text: "¿cómo te gustaría ser recordado?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 351, text: "¿qué te sorprende de vos mismo ultimamente?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 352, text: "¿qué actividad te ayuda a encontrar la paz?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 353, text: "¿qué tipo de persona sos?", category: "amigos", likes: 0, dislikes: 0 },

    { id: 414, text: 'Si tuvieras que elegir 2 discos/canciones que te vuelen la cabeza, ¿cuáles serían?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 415, text: '¿qué te entretiene?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 416, text: '¿cómo ves el mundo/planeta/civilización en mil años?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 417, text: 'Si te digo "aire" ¿en qué pensas?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 418, text: '¿qué significa para vos el vacío/la nada?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 419, text: '¿qué significa para vos la palabra "religión"?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 420, text: 'Si no fuese en el planeta tierra ¿dónde te gustaría existir?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 421, text: '¿cuál es tu animal favorito?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 422, text: '¿en qué animal te gustaría reencarnar?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 423, text: '¿en qué piensan las plantas?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 424, text: '¿cuál fué tu última caída?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 425, text: '¿cuándo fué la última vez que te caíste?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 426, text: '¿cuál fué la desición más difícil que tuviste que tomar?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 427, text: '¿cuál fué el último cambio que hiciste en tu vida?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 428, text: '¿qué impulsó el último cambio que hiciste en tu vida?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 429, text: '¿qué hecho hizo que te cambie la vida?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 430, text: '¿cuál fué la mejor desición que tomaste en la vida?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 431, text: '¿cuál fué la desición más fácil de tomar?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 432, text: '¿qué disfrutas hacer en tu estación favorita del año?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 433, text: '¿qué te gusta hacer antes de dormir?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 434, text: '¿qué tenes que hacer si o si antes de ir a dormir?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 435, text: '¿qué es lo primero que haces cuando te levantas?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 436, text: '¿qué te gusta hacer cuando te despertas?', category: 'familia', likes: 0, dislikes: 0 },
    { id: 437, text: '¿cuáles son los 3 valores mas importantes para vos?', category: 'familia', likes: 0, dislikes: 0 },
 
    { id: 555, text: '¿de verdad necesito esto en mi vida?', category: 'cita', likes: 0, dislikes: 0 },
    { id: 556, text: '¿realmente necesito esto por lo que estoy luchando tanto?', category: 'cita', likes: 0, dislikes: 0 },
    { id: 557, text: '¿de verdad quiero hacerlo?', category: 'cita', likes: 0, dislikes: 0 },
    { id: 558, text: 'Aqui estoy de nuevo, ¿de verdad quiero continuarlo?', category: 'cita', likes: 0, dislikes: 0 },
    { id: 559, text: '¿que aporta esto en tu vida?', category: 'cita', likes: 0, dislikes: 0 },
    { id: 560, text: '¿que estas esperando obtener?', category: 'cita', likes: 0, dislikes: 0 },
  
    { id: 6012, text: '¿que esperas de la persona que te acompaña?', category: 'solo', likes: 0, dislikes: 0 },
    { id: 6013, text: '¿que esperas encontrar en alguien', category: 'solo', likes: 0, dislikes: 0 }
  ];

function Game() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const fetchQuestion = () => {
      const filteredQuestions = questions.filter(q => q.category === category);
      const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setQuestion(randomQuestion);
    };
    fetchQuestion();
  }, [category]);

  const handleFeedback = (type) => {
    // Actualizar los likes/dislikes de la pregunta
    if (type === 'like') {
      question.likes += 1;
    } else if (type === 'dislike') {
      question.dislikes += 1;
    }

    // Mostrar la siguiente pregunta después de un segundo
    setTimeout(() => {
      setShowFeedback(false);
      const filteredQuestions = questions.filter(q => q.category === category);
      const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      setQuestion(randomQuestion);
    }, 1000);
  };

  const showFeedbackScreen = () => {
    setShowFeedback(true);
  };

  if (!question) {
    return <div>Cargando pregunta...
         <footer>
        <button onClick={() => navigate('/')}>Salir</button>
      </footer>
    </div>;
  }

  return (
    <div className="game">
      {!showFeedback ? (
        <div>
          <h2>Pregunta</h2>
          <p>{question.text}</p>
          <button onClick={showFeedbackScreen}>Siguiente</button>
        </div>
      ) : (
        <div>
          <h2>¿Te gustó?</h2>
          <button onClick={() => handleFeedback('dislike')}>No</button>
          <button onClick={() => handleFeedback('like')}>Si</button>
        
        </div>
      )}
       <footer>
        <button onClick={() => navigate('/')}>Salir</button>
      </footer>
    </div>
  );
}

export default Game;
