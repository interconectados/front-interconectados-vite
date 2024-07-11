
const questions = [

  //Categoría todxs
  { id: 21, text: "¿Cuál fue tu mejor cumpleaños?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 22, text: "¿Cuál es tu lunar favorito?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 23, text: "¿Cuál es tu sueño mas grande?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 24, text: "¿Cuál es fue viaje más emocionante que viviste?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 25, text: "¿Qué aventura te gustaría emprender si no tuvieras ninguna limitación?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 26, text: "¿Qué recuerdo de tu infancia siempre te hace sonreír?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 27, text: "¿Cómo te gustaría ser recordado?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 28, text: "¿En que momentos sentis viejo?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 29, text: "¿Cuál es la lección importante que aprendiste?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 210, text: "¿Qué película siempre te hace reír sin importar cuántas veces la veas?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 211, text: "¿Cuál es tu aroma favorito?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 212, text: "¿Qué experiencia reciente te dejó un aprendizaje?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 213, text: "¿Cuál es tu día favorito del año?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 214, text: "¿Qué tradición te gustaría eliminar?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 215, text: "¿Qué importancia tienen para vos las raíces familiares?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 216, text: "¿Cómo expresas el amor?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 217, text: "¿Cómo proteges a los que amas?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 218, text: "¿Cuál es tu top 3 de música?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 219, text: "¿Qué hace que un lugar se sienta como tu hogar?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 221, text: "¿Cuál es el mayor sacrificio que has visto hacer o hiciste?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 222, text: "¿Cuál es tu recuerdo favorito con tus hermanos?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 223, text: "¿En qué piensan las plantas?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 224, text: "¿Cuál fue tu última caída?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 225, text: "¿Qué es para vos la confianza?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 226, text: "¿Cuál fue la decisión más difícil que tuviste que tomar?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 227, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 228, text: "¿Qué pensas de tu futuro?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 229, text: "¿Qué situación hizo que te cambie la vida?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 230, text: "¿Cuál fue la mejor decisión que tomaste en la vida?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 231, text: "¿Qué significa la atracción para vos?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 232, text: "¿Qué disfrutas hacer en tu estación favorita del año?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 233, text: "¿Qué te gusta hacer antes de dormir?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 234, text: "¿Cuál es un momento en que te sentiste completamente libre?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 235, text: "¿Qué es lo primero que haces cuando te levantas?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 236, text: "¿Cómo te motivas para alcanzar tus metas?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 237, text: "¿Cuáles son los 3 valores más importantes para ti?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 238, text: "¿Cómo te imaginas dentro de 5 años?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 240, text: "¿Qué te preocupa del futuro?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 241, text: "¿Cómo te sentís cuando estás solo?", category: "todxs", likes: 0, dislikes: 0 },
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
  { id: 1234, text: "¿Qué haces cuando querés que alguien se sienta bien?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 1240, text: "¿Qué ves cuando miras hacia adelante?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 1241, text: "¿Qué cambiarías si supieras que nadie te juzgará?", category: "todxs", likes: 0, dislikes: 0 },


  //categoría AMIGOS
  { id: 2434, text: "¿Cómo ves el mundo/planeta/civilización en mil años?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2436, text: "¿Qué significa para vos el vacío/la nada?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2437, text: "¿Qué significa para vos la palabra 'religión'?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2438, text: "Si no fuese en el planeta tierra, ¿dónde te gustaría existir?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2439, text: "¿En qué animal te gustaría reencarnar?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2435, text: "Si te digo 'aire' ¿en qué pensas?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2237, text: "¿Cuál fue el evento reciente que hizo que cambies de opinión en algo?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 244, text: "¿Qué te gustaría descubrir sobre el mundo?", category: "todxs", likes: 0, dislikes: 0 },
  { id: 2331, text: "Si tuvieras que elegir 2 discos/canciones que te vuelen la cabeza, ¿cuáles serían?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2332, text: "¿Qué te entretiene?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2338, text: "¿Cuál fue tu mayor desafío el año pasado?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2340, text: "¿Tenes alguna historia divertida con alguien de la ronda? Contala.", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2341, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2342, text: "¿Cuándo es un buen momento para volver a empezar?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2343, text: "¿Cuál es la diferencia entre estar vivo y vivir?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 2344, text: "¿Qué riesgos valen la pena?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 1230, text: "¿Cómo te imaginás este grupo dentro de 5 años?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 1231, text: "¿Qué decisión te cambió la vida?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 1239, text: "¿Qué ves cuando miras hacia atrás?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 1235, text: "¿Qué fue lo último que aprendiste?", category: "amigos", likes: 0, dislikes: 0 },
  { id: 1237, text: "¿Cuál fue la situación más extrema que viviste?", category: "amigos", likes: 0, dislikes: 0 },



  //categoría FAMILIA
  { id: 2447, text: "¿Qué es lo que más disfrutas del día a día?", category: "familia", likes: 0, dislikes: 0 },
  { id: 2232, text: "¿Qué te entretiene?", category: "familia", likes: 0, dislikes: 0 },
  { id: 2236, text: "Si pudieras vivir durante 1 año en cualquier parte del mundo, ¿dónde sería?", category: "familia", likes: 0, dislikes: 0 },
  { id: 2241, text: "Si pudieras mandar un objeto al espacio, ¿cuál sería?", category: "familia", likes: 0, dislikes: 0 },
  { id: 2245, text: "¿Qué es lo que nunca te cansas de hacer?", category: "familia", likes: 0, dislikes: 0 },
  { id: 1236, text: "¿Cuál fue la peor comida que probaste? ¿Dónde la comiste?", category: "familia", likes: 0, dislikes: 0 },
  { id: 1238, text: "¿Qué define 'hogar' para vos?", category: "familia", likes: 0, dislikes: 0 },
  { id: 2452, text: "¿Qué decisión te cambió la vida?", category: "familia", likes: 0, dislikes: 0 },
  { id: 2448, text: "¿Qué es lo primero que haces cuando te levantas?", category: "familia", likes: 0, dislikes: 0 },


  //categoría CITA
  { id: 2450, text: "¿Cuáles son los 3 valores más importantes para vos?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2460, text: "¿Qué te sorprende de vos mismo últimamente?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2461, text: "¿Qué actividad te ayuda a encontrar la paz?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2453, text: "¿Qué te inspira?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2451, text: "¿Cómo te imaginás dentro de 5 años?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2455, text: "¿Qué no negociás?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2445, text: "¿Qué disfrutas hacer en tu estación favorita del año?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2433, text: "¿Qué título le pondrías a este momento?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2449, text: "¿Qué te gusta hacer cuando te despertas?", category: "cita", likes: 0, dislikes: 0 },
  { id: 2446, text: "¿Qué te gusta hacer antes de dormir?", category: "cita", likes: 0, dislikes: 0 },
  {
    id: 2601,
    text: "¿Quién en tu vida te inspira a ser mejor?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2602,
    text: "¿Qué te inspira?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2603,
    text: "¿Qué haces para sentirte bien?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2604,
    text: "¿Qué esperas de la persona que te acompaña?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2605,
    text: "¿A quién admiras y por qué?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2606,
    text: "¿Qué hace que alguien sea único?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2607,
    text: "¿Cuál es tu manera favorita de festejar?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2608,
    text: "¿Qué te atrae?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2609,
    text: "¿Cómo sería un día ideal para vos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2610,
    text: "¿Qué le preguntarías a alguien que querés conocer mejor?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2611,
    text: "¿Qué es lo que más te importa en este momento?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2612,
    text: "¿Cuál fue la mejor pregunta que te hicieron?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2613,
    text: "¿Cuál fue uno de los mejores días de tu vida? ¿Qué lo hizo tan especial?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2614,
    text: "¿Qué te apasiona en la vida?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2615,
    text: "¿Qué es lo que más valoras en una relación?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2616,
    text: "¿Cuál fue tu mayor desafío?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2617,
    text: "Si sólo pudieras mantener 5 posesiones, ¿cuáles serían y por qué?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2618,
    text: "¿Qué creés que es más importante, la intención o el resultado?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2619,
    text: "¿Qué te hace sentir conectado con alguien?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2620,
    text: "¿Qué significa (para vos) espiritualidad?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2621,
    text: "¿Cuál creés que será tu mayor contribución al mundo y por qué?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2622,
    text: "¿Qué significa para vos vivir una buena vida?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2623,
    text: "¿En qué encontrás inspiración?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2624,
    text: "¿Qué es para vos el destino?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2625,
    text: "Si tuvieras una banda, ¿qué nombre le pondrías y qué tocarían?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2626,
    text: "¿Qué te hace sentir conectado con vos mismo?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2627,
    text: "Si pudieras cambiar algo en el mundo, ¿qué sería?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2628,
    text: "¿Qué es el éxito? ¿Lo has alcanzado?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2629,
    text: "¿Cuál fue el feedback que te hizo repensar y cambiar tu manera de actuar?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2630,
    text: "¿Qué es lo que más te intriga?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2631,
    text: "¿Cómo decidís en quién confiar?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2632,
    text: "¿Qué tiene sentido para vos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2633,
    text: "¿Cómo describirías tu relación con la naturaleza y el universo?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2634,
    text: "¿Qué dilemas éticos encontrás más desafiantes?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2635,
    text: "¿Qué pensás que es crucial durante los tiempos difíciles?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2636,
    text: "¿Qué lección aprendiste de una experiencia amorosa?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2637,
    text: "¿Cómo manejás los cambios inesperados en tu vida?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 555,
    text: "¿qué experiencia te enseñó mucho sobre el amor?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 349,
    text: "¿cuál es nuestro mayor desafío actual?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 371,
    text: "¿Qué significa el compromiso para vos en una relación?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 570,
    text: "¿Qué crees que hace que la atracción sea duradera en una relación?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 352,
    text: "¿qué actividad te ayuda a encontrar la paz?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 6012,
    text: "¿Cuál es la primera cosa que notaste de mí cuando nos conocimos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 559,
    text: "¿Qué te gustaría que este vínculo aporte en tu vida?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 560,
    text: "¿Qué experiencia nueva te gustaría que compartiéramos juntos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 561,
    text: "¿Cómo te imaginas un día perfecto juntos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 562,
    text: "¿Cuál es la cosa más importante que te gustaría que construyéramos juntos en nuestra relación?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 563,
    text: "¿Qué crees que fortalece más nuestro vínculo?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 564,
    text: "¿Qué actividad nueva te gustaría que probáramos juntos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 565,
    text: "¿Qué crees que es lo más curioso que te hace único?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 566,
    text: "Si pudiéramos viajar a cualquier lugar del mundo mañana, ¿a dónde iríamos y qué haríamos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 566,
    text: "¿Qué aventura te gustaría que planificáramos juntos para el próximo año?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 567,
    text: "¿Qué recuerdo te hace sonreír cada vez que lo piensas?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 568,
    text: "¿Qué actividad diaria te hace sentir más conectado?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 569,
    text: "¿Cuál es un sueño que crees que podemos alcanzar juntos y cómo lo haríamos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },

  //categoría SOLO
  { id: 1232, text: "¿Qué tipo de persona sos?", category: "solo", likes: 0, dislikes: 0 },
  { id: 1233, text: "¿Qué esperas obtener con lo que haces?", category: "solo", likes: 0, dislikes: 0 },
  { id: 242, text: "¿Cuál fue tu mayor logro?", category: "solo", likes: 0, dislikes: 0 },
  { id: 1224, text: "¿Cuál fue la decisión más difícil que tuviste que tomar?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2431, text: "¿Qué es la libertad para vos?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2432, text: "Para vos, ¿cuál es el sentido de la vida?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2440, text: "¿Cuál fue la decisión más difícil que tuviste que tomar?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2441, text: "¿Cuál fue el último cambio que hiciste en tu vida?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2442, text: "¿Qué impulsó el último cambio que hiciste?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2443, text: "¿Qué hizo que estés acá hoy?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2444, text: "¿Cuál fue la mejor decisión que tomaste en la vida?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2454, text: "¿Qué evento reciente hizo que cambies de opinión en algo?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2456, text: "¿Qué error del pasado te enseñó la lección más valiosa?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2457, text: "¿Quién te inspira a ser mejor?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2459, text: "¿Cómo te gustaría ser recordado?", category: "solo", likes: 0, dislikes: 0 },
  { id: 2460, text: "¿Qué te sorprende de vos mismo últimamente?", category: "solo", likes: 0, dislikes: 0 },
  {
    id: 2500,
    text: "¿Qué es la libertad para vos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2501,
    text: "Para vos, ¿cuál es el sentido de la vida?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2502,
    text: "¿Qué título le pondrías a este momento?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2503,
    text: "¿Qué cosas aprendiste del último año?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2504,
    text: "Para vos, ¿qué es la intuición?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2507,
    text: "¿Qué significa para vos el vacío/la nada?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2508,
    text: "¿Qué significa para vos la palabra 'religión'?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2509,
    text: "Si no fuese en el planeta tierra, ¿dónde te gustaría existir?",
    category: "familia",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2510,
    text: "¿En qué animal te gustaría reencarnar?",
    category: "todxs",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2512,
    text: "¿Qué no negociás?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2513,
    text: "¿Qué tipo de persona sos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2515,
    text: "¿Qué haces para sentirte bien?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2517,
    text: "¿Qué estilo de vida te gustaría tener?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2518,
    text: "¿Qué cambio te gustaría presenciar?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2519,
    text: "¿Qué pensas del dinero?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2523,
    text: "¿Qué hace que seas único?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2524,
    text: "¿Qué fue lo último que aprendiste?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2528,
    text: "¿Qué ves cuando miras hacia atrás?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2529,
    text: "¿Qué ves cuando miras hacia adelante?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2530,
    text: "¿Qué cambiarías si supieras que nadie te juzgará?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2531,
    text: "¿Cómo te describirían tus amigos en 3 palabras?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2532,
    text: "¿Qué te hace sentir conectado con vos mismo?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2533,
    text: "Si pudieras hacer un cambio rotundo en tu vida, ¿cuál sería?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2534,
    text: "¿En qué aspectos de tu vida te sentís más libre?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2535,
    text: "Te preparas para una noche perfecta, ¿qué te pones?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2536,
    text: "¿Qué elegís hoy para tu vida?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2537,
    text: "¿Qué haces hoy que no te hubieras imaginado hace un año?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2538,
    text: "¿Qué es lo que más te intriga?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2539,
    text: "¿Cómo manejas los cambios inesperados en tu vida?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 6013,
    text: "¿Qué querés en este momento de tu vida?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 500,
    text: "¿Cómo describirías tu estado emocional actual en tres palabras?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 501,
    text: "¿Qué es lo que más te gusta de tu vida en este momento?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 502,
    text: "¿Cuáles son los principales desafíos que enfrentas actualmente?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 503,
    text: "¿Qué hábitos diarios te hacen sentir bien con vos mismo?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 505,
    text: "¿Dónde te gustaría verte en un año?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 505,
    text: "¿Dónde te gustaría verte en un año?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 506,
    text: "¿Cuál es una meta a largo plazo que te emociona y por qué?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 507,
    text: "¿Qué cambios pequeños podrías hacer hoy para acercarte a tu estado deseado?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 508,
    text: "¿Qué estás dispuesto a dejar para conseguir tus metas?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 508,
    text: "¿Qué estás dispuesto a dejar para conseguir tus metas?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 509,
    text: "¿Cómo sería un día perfecto para vos?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 509,
    text: "¿Cómo sería un día perfecto para vos?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 509,
    text: "¿Cómo sería un día perfecto para vos?",
    category: "todxs",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 510,
    text: "¿Cómo te defines cuando estás en tu mejor versión?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 510,
    text: "¿Cómo te defines cuando estás en tu mejor versión?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 511,
    text: "¿Quién eres cuando nadie te está observando?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 512,
    text: "¿Qué partes de tu identidad te gustaría explorar más?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 513,
    text: "¿Cuál es el logro del que sientes más orgullo y por qué?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 513,
    text: "¿Cuál es el logro del que sientes más orgullo y por qué?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 514,
    text: "¿Qué es algo que siempre has querido lograr pero aún no has comenzado?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 514,
    text: "¿Qué es algo que siempre has querido lograr pero aún no has comenzado?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 515,
    text: "¿Qué te gustaría intentar?",
    category: "amigos",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 515,
    text: "¿Qué te gustaría intentar?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 516,
    text: "¿Qué intentarías si no tuvieras miedo?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 517,
    text: "¿Qué te gustaría decirte a vos mismo?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 518,
    text: "¿Cuál ha sido una lección importante que has aprendido este último tiempo?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 519,
    text: "¿Qué significa ser auténtico para ti?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 520,
    text: "¿Por qué cosas estás agradecido en este momento?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 520,
    text: "¿Por qué cosas estás agradecido en este momento?",
    category: "todxs",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 521,
    text: "¿Cómo practicas la gratitud?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 522,
    text: "¿Qué pequeñas cosas en tu vida te traen alegría?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 522,
    text: "¿Qué pequeñas cosas en tu vida te traen alegría?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 523,
    text: "¿Qué te da esperanza para el futuro?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 524,
    text: "¿Qué te inspira a seguir soñando en grande?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 524,
    text: "¿Qué te inspira a seguir soñando en grande?",
    category: "cita",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 525,
    text: "¿Cómo puedes empezar a trabajar hacia uno de tus grandes sueños hoy mismo?",
    category: "solo",
    likes: 0,
    dislikes: 0,
  },
];

export default questions;
