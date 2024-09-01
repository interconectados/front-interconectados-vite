
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
    { id: 2447, text: "¿Qué es lo que más disfrutas del día a día?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 1236, text: "¿Cuál fue la peor comida que probaste? ¿Dónde la comiste?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 1238, text: "¿Qué define 'hogar' para ti?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 2448, text: "¿Qué es lo primero que haces cuando te levantas?", category: "Vida", likes: 0, dislikes: 0 },
    { id: 24418, text: "¿Cuál es el fenómeno más extraño que presenciaste?", category: "Vida", likes: 0, dislikes: 0 },


  
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
    { id: 2452, text: "¿Qué decisión te cambió la vida?", category: "Crecimiento", likes: 0, dislikes: 0 },
    { id: 2236, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo, ¿dónde sería?", category: "Crecimiento", likes: 0, dislikes: 0 },
  


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
    { id: 2241, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2245, text: "¿Qué es lo que nunca te cansas de hacer?", category: "Entretenimiento", likes: 0, dislikes: 0 },
    { id: 2232, text: "¿Qué te entretiene?", category: "Entretenimiento", likes: 0, dislikes: 0 },




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
  
  
// Categoría Conexión
  { id: 2701, text: "¿Con qué soñas?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2702, text: "¿Cuál fue tu mejor viaje?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2703, text: "¿Cuál fue tu peor viaje?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2704, text: "¿Cuál es el mejor destino para viajar?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2705, text: "¿Qué es la libertad para vos?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2706, text: "Para vos, ¿cuál es el sentido de la vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2707, text: "¿Qué título le pondrías a este momento?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2708, text: "¿Qué cosas aprendiste del último año?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2709, text: "¿Qué te gustaría que te pase este año?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2710, text: "¿Qué haces cuando estás muy contento?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2711, text: "Para vos, ¿qué es la intuición?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2712, text: "¿Qué te entretiene?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2713, text: "Si te digo 'aire', ¿en qué pensás?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2714, text: "¿Qué significa para vos el vacío/la nada?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2715, text: "¿Qué significa para vos la palabra 'fé'?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2716, text: "¿En qué piensan las plantas?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2717, text: "¿Cuál fue tu última caída?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2718, text: "¿Cuál fue la decisión más difícil que tuviste que tomar?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2719, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2720, text: "¿Qué impulsó el último cambio que hiciste en tu vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2721, text: "¿Qué hecho hizo que te cambie la vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2722, text: "¿Cuál fue la mejor decisión que tomaste?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2723, text: "¿Cuál fue la decisión más fácil de tomar?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2724, text: "¿Qué disfrutas hacer?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2725, text: "¿Qué te gusta hacer antes de dormir?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2726, text: "¿Qué es lo primero que haces cuando te levantas?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2727, text: "¿Qué te gusta hacer cuando te despertás?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2728, text: "¿Cómo te imaginás dentro de 5 años?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2729, text: "¿Qué experiencia te enseñó mucho sobre el amor?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2730, text: "¿Qué decisión te cambió la vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2731, text: "¿Cuál fue la aventura más emocionante que viviste?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2732, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo, ¿dónde sería?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2733, text: "¿Qué te inspira?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2734, text: "¿Qué hizo que cambies de opinión en algo?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2735, text: "¿Qué error del pasado te enseñó la lección más valiosa?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2736, text: "¿Quién en tu vida te inspira a ser mejor?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2737, text: "¿Cuál es tu mayor desafío actual?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2738, text: "¿Cómo te gustaría ser recordado?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2739, text: "¿Qué te sorprende de vos mismo últimamente?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2740, text: "¿Qué actividad te ayuda a encontrar la paz?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2741, text: "¿Qué tipo de persona sos?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2742, text: "¿Cuál es tu próxima meta a cumplir?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2743, text: "¿Qué estilo de vida te gustaría tener?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2744, text: "¿De qué te haces cargo?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2745, text: "¿Qué cambio te gustaría hacer?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2746, text: "¿Cuál es tu manera favorita de festejar?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2747, text: "¿De qué te quejas más?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2748, text: "¿Qué te gustaría dejar?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2749, text: "¿Qué te falta?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2750, text: "¿Qué te sobra?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2751, text: "¿Qué te gustaría aprender?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2752, text: "¿Qué tenés que aprender?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2753, text: "¿Qué estás dispuesto a dejar para conseguir tus sueños?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2754, text: "¿Qué necesitas para conseguir lo que querés?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2755, text: "¿Qué es el amor para vos?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2756, text: "¿Qué te pone de mal humor?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2757, text: "¿Qué es lo que más te importa en este momento?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2758, text: "¿Cómo sería un día ideal para vos?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2759, text: "¿Cuál fue uno de los mejores días de tu vida? ¿Qué lo hizo tan especial?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2760, text: "¿Qué te apasiona en la vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2761, text: "¿Hay algo que siempre quisiste aprender y aún no has tenido la oportunidad?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2762, text: "¿Cuál fue tu mayor desafío?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2763, text: "¿En qué momento te sentís vos mism@?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2764, text: "Si pudieras hacer un cambio rotundo en tu vida, ¿cuál sería?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2765, text: "Si tuvieras que ponerle un título a este momento, ¿Cuál sería?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2766, text: "¿Qué elegís hoy para tu vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2767, text: "Si pudieras cambiar algo en el mundo, ¿qué sería?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2768, text: "¿Qué es el éxito? ¿Lo has alcanzado?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2769, text: "¿Cómo manejas los cambios inesperados en tu vida?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2770, text: "¿Qué te trajo la adultez?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2771, text: "¿Cómo te gustaría vivir tus próximos 10 años?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2772, text: "¿Qué expectativas tenés para este año?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2773, text: "¿Qué ves cuando mirás hacia adelante?", category: "Conexión", likes: 0, dislikes: 0 },
  { id: 2774, text: "¿Qué cambiarías si supieras que nadie te juzgará?", category: "Conexión", likes: 0, dislikes: 0 },
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
