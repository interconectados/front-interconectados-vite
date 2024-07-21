
const questions = [
    // categoría Vida
    { id: 21, text: "¿Cuál fue tu mejor cumpleaños?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 24, text: "¿Cuál fue el viaje más emocionante que viviste?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 26, text: "¿Qué recuerdo de tu infancia siempre te hace sonreír?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 28, text: "¿En qué momentos sientes viejo?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 210, text: "¿Qué película siempre te hace reír sin importar cuántas veces la veas?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 213, text: "¿Cuál es tu día favorito del año?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 215, text: "¿Qué importancia tienen para ti las raíces familiares?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 217, text: "¿Cómo proteges a los que amas?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 219, text: "¿Qué hace que un lugar se sienta como tu hogar?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 221, text: "¿Cuál es el mayor sacrificio que has visto hacer o hiciste?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 222, text: "¿Cuál es tu recuerdo favorito con tus hermanos?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 224, text: "¿Cuál fue tu última caída?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 225, text: "¿Qué es para ti la confianza?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 228, text: "¿Qué piensas de tu futuro?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 230, text: "¿Cuál fue la mejor decisión que tomaste en la vida?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 232, text: "¿Qué disfrutas hacer en tu estación favorita del año?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 233, text: "¿Qué te gusta hacer antes de dormir?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 235, text: "¿Qué es lo primero que haces cuando te levantas?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 238, text: "¿Cómo te imaginas dentro de 5 años?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 240, text: "¿Qué te preocupa del futuro?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 241, text: "¿Cómo te sientes cuando estás solo?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 245, text: "¿Qué te gustaría aprender?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 247, text: "¿Cuál es tu mayor miedo?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 248, text: "¿Qué te da tranquilidad?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 250, text: "¿Cuál es tu mayor virtud?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 252, text: "¿Qué cosas pequeñas te hacen feliz en el día a día?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 1232, text: "¿Qué tipo de persona sos?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 1233, text: "¿Qué esperas obtener con lo que haces?", category: "Vida", likes: 0, dislikes: 0 },
  
    // categoría Crecimiento
    { id: 22, text: "¿Cuál es tu lunar favorito?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 23, text: "¿Cuál es tu sueño más grande?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 25, text: "¿Qué aventura te gustaría emprender si no tuvieras ninguna limitación?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 27, text: "¿Cómo te gustaría ser recordado?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 29, text: "¿Cuál es la lección más importante que aprendiste?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 211, text: "¿Cuál es tu aroma favorito?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 212, text: "¿Qué experiencia reciente te dejó un aprendizaje?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 214, text: "¿Qué tradición te gustaría eliminar?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 216, text: "¿Cómo expresas el amor?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 218, text: "¿Cuál es tu top 3 de música?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 223, text: "¿En qué piensan las plantas?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 226, text: "¿Cuál fue la decisión más difícil que tuviste que tomar?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 227, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 229, text: "¿Qué situación hizo que te cambie la vida?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 231, text: "¿Qué significa la atracción para ti?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 234, text: "¿Cuál es un momento en que te sentiste completamente libre?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 236, text: "¿Cómo te motivas para alcanzar tus metas?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 237, text: "¿Cuáles son los 3 valores más importantes para ti?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 243, text: "¿Qué te gustaría descubrir sobre el mundo?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 253, text: "¿Cómo te describirías en una frase?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 254, text: "¿Qué despierta tu curiosidad actualmente?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 255, text: "¿Qué habilidad te gustaría tener?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 1221, text: "¿Qué te gustaría que te pase este año?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 1222, text: "¿Qué haces cuando estás muy contento?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 1225, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 1226, text: "¿Cuál fue la mejor decisión que tomaste en la vida?", category: "Crecimiento", likes: 0, dislikes: 0 },
  
    // categoría Entretenimiento
    { id: 2434, text: "¿Cómo ves el mundo/planeta/civilización en mil años?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2436, text: "¿Qué significa para ti el vacío/la nada?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2437, text: "¿Qué significa para ti la palabra 'religión'?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2438, text: "Si no fuese en el planeta tierra, ¿dónde te gustaría existir?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2439, text: "¿En qué animal te gustaría reencarnar?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2435, text: "Si te digo 'aire' ¿en qué pensás?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2237, text: "¿Cuál fue el evento reciente que hizo que cambies de opinión en algo?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 244, text: "¿Qué te gustaría descubrir sobre el mundo?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2331, text: "Si tuvieras que elegir 2 discos/canciones que te vuelen la cabeza, ¿cuáles serían?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2332, text: "¿Qué te entretiene?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2338, text: "¿Cuál fue tu mayor desafío el año pasado?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2340, text: "¿Tienes alguna historia divertida con alguien de la ronda? Cuéntala.", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2341, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2342, text: "¿Cuándo es un buen momento para volver a empezar?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2343, text: "¿Cuál es la diferencia entre estar vivo y vivir?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2344, text: "¿Qué riesgos valen la pena?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 1230, text: "¿Cómo te imaginas este grupo dentro de 5 años?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 1231, text: "¿Qué decisión te cambió la vida?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 1239, text: "¿Qué ves cuando miras hacia atrás?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 1235, text: "¿Qué fue lo último que aprendiste?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 1237, text: "¿Cuál fue la situación más extrema que viviste?", category: "Entretenimiento", likes: 0, dislikes: 0 },
  
    // Otras preguntas de "familia" en categorías correspondientes
    { id: 2447, text: "¿Qué es lo que más disfrutas del día a día?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 2232, text: "¿Qué te entretiene?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2236, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo, ¿dónde sería?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 2241, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2245, text: "¿Qué es lo que nunca te cansas de hacer?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 1236, text: "¿Cuál fue la peor comida que probaste? ¿Dónde la comiste?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 1238, text: "¿Qué define 'hogar' para ti?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 2452, text: "¿Qué decisión te cambió la vida?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 2448, text: "¿Qué es lo primero que haces cuando te levantas?", category: "Vida", likes: 0, dislikes: 0 },



    // Categoría Vínculos
    { id: 2434, text: "¿Cómo ves el mundo/planeta/civilización en mil años?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2436, text: "¿Qué significa para ti el vacío/la nada?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2437, text: "¿Qué significa para ti la palabra 'religión'?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2438, text: "Si no fuese en el planeta tierra, ¿dónde te gustaría existir?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2439, text: "¿En qué animal te gustaría reencarnar?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2435, text: "Si te digo 'aire' ¿en qué pensás?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2237, text: "¿Cuál fue el evento reciente que hizo que cambies de opinión en algo?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 244, text: "¿Qué te gustaría descubrir sobre el mundo?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2331, text: "Si tuvieras que elegir 2 discos/canciones que te vuelen la cabeza, ¿cuáles serían?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2332, text: "¿Qué te entretiene?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2338, text: "¿Cuál fue tu mayor desafío el año pasado?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2340, text: "¿Tienes alguna historia divertida con alguien de la ronda? Cuéntala.", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2341, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2342, text: "¿Cuándo es un buen momento para volver a empezar?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2343, text: "¿Cuál es la diferencia entre estar vivo y vivir?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 2344, text: "¿Qué riesgos valen la pena?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 1230, text: "¿Cómo te imaginas este grupo dentro de 5 años?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 1231, text: "¿Qué decisión te cambió la vida?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 1239, text: "¿Qué ves cuando miras hacia atrás?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 1235, text: "¿Qué fue lo último que aprendiste?", category: "Vínculos", likes: 0, dislikes: 0 },
    { id: 1237, text: "¿Cuál fue la situación más extrema que viviste?", category: "Vínculos", likes: 0, dislikes: 0 },
  
  
      // categoría Conexión
      { id: 2601, text: "¿Quién en tu vida te inspira a ser mejor?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2602, text: "¿Qué te inspira?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2603, text: "¿Qué haces para sentirte bien?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2604, text: "¿Qué esperas de la persona que te acompaña?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2605, text: "¿A quién admiras y por qué?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2606, text: "¿Qué hace que alguien sea único?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2608, text: "¿Qué te atrae?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2610, text: "¿Qué le preguntarías a alguien que querés conocer mejor?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2611, text: "¿Qué es lo que más te importa en este momento?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2612, text: "¿Cuál fue la mejor pregunta que te hicieron?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2614, text: "¿Qué te apasiona en la vida?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2615, text: "¿Qué es lo que más valoras en una relación?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2616, text: "¿Cuál fue tu mayor desafío?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2618, text: "¿Qué creés que es más importante, la intención o el resultado?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2619, text: "¿Qué te hace sentir conectado con alguien?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2620, text: "¿Qué significa (para vos) espiritualidad?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2621, text: "¿Cuál creés que será tu mayor contribución al mundo y por qué?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2622, text: "¿Qué significa para vos vivir una buena vida?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2623, text: "¿En qué encontrás inspiración?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2624, text: "¿Qué es para vos el destino?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2626, text: "¿Qué te hace sentir conectado con vos mismo?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2627, text: "Si pudieras cambiar algo en el mundo, ¿qué sería?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2628, text: "¿Qué es el éxito? ¿Lo has alcanzado?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2629, text: "¿Cuál fue el feedback que te hizo repensar y cambiar tu manera de actuar?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2630, text: "¿Qué es lo que más te intriga?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2631, text: "¿Cómo decidís en quién confiar?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2632, text: "¿Qué tiene sentido para vos?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2633, text: "¿Cómo describirías tu relación con la naturaleza y el universo?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2634, text: "¿Qué dilemas éticos encontrás más desafiantes?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2635, text: "¿Qué pensás que es crucial durante los tiempos difíciles?", category: "Conexión", likes: 0, dislikes: 0 },
      { id: 2636, text: "¿Qué lección aprendiste de una experiencia amorosa?", category: "Conexión", likes: 0, dislikes: 0 },
    
        // categoría Hábitos
        { id: 242, text: "¿Cuál fue tu mayor logro?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 2441, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 2448, text: "¿Qué es lo primero que haces cuando te levantas?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 1238, text: "¿Qué define 'hogar' para vos?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 503, text: "¿Qué hábitos diarios te hacen sentir bien con vos mismo?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 505, text: "¿Dónde te gustaría verte en un año?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 507, text: "¿Qué cambios pequeños podrías hacer hoy para acercarte a tu estado deseado?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 509, text: "¿Cómo sería un día perfecto para vos?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 510, text: "¿Qué actividad te relaja más?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 515, text: "¿Qué haces para mantenerte activo/a?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 521, text: "¿Qué nuevas actividades te gustaría probar?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 522, text: "¿Cuál es tu rutina diaria preferida?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 500, text: "¿Cómo describirías tu estado emocional actual en tres palabras?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 508, text: "¿Qué estás dispuesto a dejar para conseguir tus metas?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 511, text: "¿Quién eres cuando nadie te está observando?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 512, text: "¿Qué partes de tu identidad te gustaría explorar más?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 513, text: "¿Cuál es el logro del que sientes más orgullo y por qué?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 514, text: "¿Qué es algo que siempre has querido lograr pero aún no has comenzado?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 516, text: "¿Qué intentarías si no tuvieras miedo?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 517, text: "¿Qué te gustaría decirte a vos mismo?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 518, text: "¿Cuál ha sido una lección importante que has aprendido este último tiempo?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 519, text: "¿Qué significa ser auténtico para ti?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 520, text: "¿Por qué cosas estás agradecido en este momento?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 523, text: "¿Qué te da esperanza para el futuro?", category: "Hábitos", likes: 0, dislikes: 0 },
        { id: 524, text: "¿Qué te inspira a seguir soñando en grande?", category: "Hábitos", likes: 0, dislikes: 0 },
];

export default questions;
