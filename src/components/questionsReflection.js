
const questions = [
    // Categoría todxs
    { id: 21, text: "¿Cuál fue tu mejor cumpleaños?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 22, text: "¿Cuál es tu lunar favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 23, text: "¿Cuál es tu sueño más grande?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 24, text: "¿Cuál fue el viaje más emocionante que viviste?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 25, text: "¿Qué aventura te gustaría emprender si no tuvieras ninguna limitación?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 26, text: "¿Qué recuerdo de tu infancia siempre te hace sonreír?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 27, text: "¿Cómo te gustaría ser recordado?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 28, text: "¿En qué momentos sientes viejo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 29, text: "¿Cuál es la lección más importante que aprendiste?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 210, text: "¿Qué película siempre te hace reír sin importar cuántas veces la veas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 211, text: "¿Cuál es tu aroma favorito?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 212, text: "¿Qué experiencia reciente te dejó un aprendizaje?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 213, text: "¿Cuál es tu día favorito del año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 214, text: "¿Qué tradición te gustaría eliminar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 215, text: "¿Qué importancia tienen para ti las raíces familiares?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 216, text: "¿Cómo expresas el amor?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 217, text: "¿Cómo proteges a los que amas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 218, text: "¿Cuál es tu top 3 de música?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 219, text: "¿Qué hace que un lugar se sienta como tu hogar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 221, text: "¿Cuál es el mayor sacrificio que has visto hacer o hiciste?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 222, text: "¿Cuál es tu recuerdo favorito con tus hermanos?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 223, text: "¿En qué piensan las plantas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 224, text: "¿Cuál fue tu última caída?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 225, text: "¿Qué es para ti la confianza?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 226, text: "¿Cuál fue la decisión más difícil que tuviste que tomar?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 227, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 228, text: "¿Qué piensas de tu futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 229, text: "¿Qué situación hizo que te cambie la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 230, text: "¿Cuál fue la mejor decisión que tomaste en la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 231, text: "¿Qué significa la atracción para ti?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 232, text: "¿Qué disfrutas hacer en tu estación favorita del año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 233, text: "¿Qué te gusta hacer antes de dormir?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 234, text: "¿Cuál es un momento en que te sentiste completamente libre?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 235, text: "¿Qué es lo primero que haces cuando te levantas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 236, text: "¿Cómo te motivas para alcanzar tus metas?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 237, text: "¿Cuáles son los 3 valores más importantes para ti?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 238, text: "¿Cómo te imaginas dentro de 5 años?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 240, text: "¿Qué te preocupa del futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 241, text: "¿Cómo te sientes cuando estás solo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 244, text: "¿Qué te gustaría descubrir sobre el mundo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 245, text: "¿Qué te gustaría aprender?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 246, text: "¿Cuál sientes que es tu propósito en la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 247, text: "¿Cuál es tu mayor miedo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 248, text: "¿Qué te da tranquilidad?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 249, text: "¿Qué cambios te gustaría ver en el futuro?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 250, text: "¿Cuál es tu mayor virtud?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 251, text: "¿Qué pensabas que era un defecto y ahora es una virtud?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 252, text: "¿Qué cosas pequeñas te hacen feliz en el día a día?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 253, text: "¿Cómo te describirías en una frase?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 254, text: "¿Qué despierta tu curiosidad actualmente?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 255, text: "¿Qué habilidad te gustaría tener?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1221, text: "¿Qué te gustaría que te pase este año?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1222, text: "¿Qué haces cuando estás muy contento?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1223, text: "¿Cuándo fue la última vez que te caíste?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1225, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1226, text: "¿Cuál fue la mejor decisión que tomaste en la vida?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1227, text: "¿Qué disfrutas hacer en invierno?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1228, text: "¿Qué te gusta hacer antes de dormir?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1234, text: "¿Qué haces cuando quieres que alguien se sienta bien?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1240, text: "¿Qué ves cuando miras hacia adelante?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 1241, text: "¿Qué cambiarías si supieras que nadie te juzgará?", category: "todxs", likes: 0, dislikes: 0 },
  
    // Categoría amigos
    { id: 2434, text: "¿Cómo ves el mundo/planeta/civilización en mil años?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2436, text: "¿Qué significa para ti el vacío/la nada?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2437, text: "¿Qué significa para ti la palabra 'religión'?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2438, text: "Si no fuese en el planeta tierra, ¿dónde te gustaría existir?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2439, text: "¿En qué animal te gustaría reencarnar?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2435, text: "Si te digo 'aire' ¿en qué piensas?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2237, text: "¿Cuál fue el evento reciente que hizo que cambies de opinión en algo?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 244, text: "¿Qué te gustaría descubrir sobre el mundo?", category: "todxs", likes: 0, dislikes: 0 },
    { id: 2331, text: "Si tuvieras que elegir 2 discos/canciones que te vuelen la cabeza, ¿cuáles serían?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2332, text: "¿Qué te entretiene?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2338, text: "¿Cuál fue tu mayor desafío el año pasado?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2340, text: "¿Tienes alguna historia divertida con alguien de la ronda? Cuéntala.", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2341, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2342, text: "¿Cuándo es un buen momento para volver a empezar?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2343, text: "¿Cuál es la diferencia entre estar vivo y vivir?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 2344, text: "¿Qué riesgos valen la pena?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 1230, text: "¿Cómo te imaginas este grupo dentro de 5 años?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 1231, text: "¿Qué decisión te cambió la vida?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 1239, text: "¿Qué ves cuando miras hacia atrás?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 1235, text: "¿Qué fue lo último que aprendiste?", category: "amigos", likes: 0, dislikes: 0 },
    { id: 1237, text: "¿Cuál fue la situación más extrema que viviste?", category: "amigos", likes: 0, dislikes: 0 },
  
    // Categoría familia
    { id: 2447, text: "¿Qué es lo que más disfrutas del día a día?", category: "familia", likes: 0, dislikes: 0 },
    { id: 2232, text: "¿Qué te entretiene?", category: "familia", likes: 0, dislikes: 0 },
    { id: 2236, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo, ¿dónde sería?", category: "familia", likes: 0, dislikes: 0 },
    { id: 2241, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "familia", likes: 0, dislikes: 0 },
    { id: 2245, text: "¿Qué es lo que nunca te cansas de hacer?", category: "familia", likes: 0, dislikes: 0 },
    { id: 1236, text: "¿Cuál fue la peor comida que probaste? ¿Dónde la comiste?", category: "familia", likes: 0, dislikes: 0 },
    { id: 1238, text: "¿Qué define 'hogar' para ti?", category: "familia", likes: 0, dislikes: 0 },
    { id: 2452, text: "¿Qué decisión te cambió la vida?", category: "familia", likes: 0, dislikes: 0 },
    { id: 2448, text: "¿Qué es lo primero que haces cuando te levantas?", category: "familia", likes: 0, dislikes: 0 },

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
    
      // categoría Vida
      { id: 2607, text: "¿Cuál es tu manera favorita de festejar?", category: "Vida", likes: 0, dislikes: 0 },
      { id: 2609, text: "¿Cómo sería un día ideal para vos?", category: "Vida", likes: 0, dislikes: 0 },
      { id: 2613, text: "¿Cuál fue uno de los mejores días de tu vida? ¿Qué lo hizo tan especial?", category: "Vida", likes: 0, dislikes: 0 },
      { id: 2617, text: "Si sólo pudieras mantener 5 posesiones, ¿cuáles serían y por qué?", category: "Vida", likes: 0, dislikes: 0 },
      { id: 2625, text: "Si tuvieras una banda, ¿qué nombre le pondrías y qué tocarían?", category: "Vida", likes: 0, dislikes: 0 },
    
];

export default questions;
