// planetData.js
const composersDataPro = [
    {
      id: "1",
      name: "Wolfgang Amadeus Mozart",
      occupation: "Compositor",
      birthdate: "27 de enero de 1756",
      placeOfBirth: "Salzburgo, Sacro Imperio Romano Germánico",
      nationality: "Austríaco",
      genres: ["Clásica", "Ópera", "Sinfonía"],
      notableWorks: [
        "Eine kleine Nachtmusik",
        "La flauta mágica",
        "Sinfonía n.º 40",
      ],
      instruments: ["Piano", "Violín"],
      achievements: [
        "Compositor prodigio desde la infancia",
        "Autor de más de 600 obras",
        "Influencia duradera en la música clásica",
        "Maestro en diversos géneros musicales",
        "Reconocimiento póstumo como uno de los grandes compositores",
        "Contribuyó significativamente al desarrollo de la ópera",
        "Dejó un legado musical que sigue siendo apreciado en todo el mundo",
        "Su música ha sido interpretada en innumerables películas, programas de televisión y eventos",
      ],
      ageAtDeath: 35,
    //   influence: {
    //     composers: ["Ludwig van Beethoven", "Franz Schubert"],
    //     musicPeriod: "Era Clásica",
    //   },
    //   legacy:
    //     "Uno de los más grandes compositores en la historia de la música clásica.",
    //   description:
    //     "Wolfgang Amadeus Mozart fue un prolífico compositor y virtuoso músico austriaco del siglo XVIII. Su obra abarca diversos géneros musicales y ha dejado un impacto perdurable en la música clásica.",
    //   imageUrl: "https://ejemplo.com/mozart-imagen.jpg",
    },
    {
      id: "2",
      name: "Ludwig van Beethoven",
      occupation: "Compositor",
      birthdate: "17 de diciembre de 1770",
      placeOfBirth: "Bonn, Electorado de Colonia, Sacro Imperio Romano Germánico",
      nationality: "Alemán",
      genres: ["Clásica", "Romántica"],
      notableWorks: [
        "Sinfonía n.º 9",
        "Sonata para piano n.º 14 (Claro de luna)",
        "Für Elise",
      ],
      instruments: ["Piano", "Violín"],
      achievements: [
        "Transición de la música clásica al Romanticismo",
        "Sordera no impidió su genialidad musical",
        "Influencia duradera en la música romántica",
        "Obras maestras que siguen siendo populares en la actualidad",
      ],
      ageAtDeath: 56,
    //   influence: {
    //     composers: ["Franz Schubert", "Johannes Brahms"],
    //     musicPeriod: "Era Romántica",
    //   },
    //   legacy:
    //     "Uno de los más grandes compositores de la historia, un puente entre el clasicismo y el romanticismo.",
    //   description:
    //     "Ludwig van Beethoven, un destacado compositor alemán, desafió las convenciones musicales de su tiempo y dejó un legado que ha perdurado a lo largo de los siglos.",
    //   imageUrl: "https://ejemplo.com/beethoven-imagen.jpg",
    },
    {
      id: "3",
      name: "Igor Stravinsky",
      occupation: "Compositor",
      birthdate: "17 de junio de 1882",
      placeOfBirth: "Oranienbaum, Imperio ruso",
      nationality: "Ruso",
      genres: ["Neoclásico", "Ballet"],
      notableWorks: [
        "La consagración de la primavera",
        "Petrushka",
        "El pájaro de fuego",
      ],
      instruments: ["Piano", "Violín"],
      achievements: [
        "Innovación en la música del siglo XX",
        "Colaboración con Sergei Diághilev y los Ballets Rusos",
        "Rompió con las convenciones musicales tradicionales",
        "Influencia en la música contemporánea",
      ],
      ageAtDeath: 88,
    //   influence: {
    //     composers: ["Iannis Xenakis", "Olivier Messiaen"],
    //     musicPeriod: "Siglo XX",
    //   },
    //   legacy:
    //     "Un revolucionario en la música del siglo XX, desafiando las normas establecidas.",
    //   description:
    //     "Igor Stravinsky, un influyente compositor ruso, cambió el panorama musical del siglo XX con sus innovadoras composiciones y colaboraciones en el ballet.",
    //   imageUrl: "https://ejemplo.com/stravinsky-imagen.jpg",
    },
    {
      id: "4",
      name: "Johann Sebastian Bach",
      occupation: "Compositor",
      birthdate: "31 de marzo de 1685",
      placeOfBirth: "Eisenach, Sacro Imperio Romano Germánico",
      nationality: "Alemán",
      genres: ["Barroco"],
      notableWorks: [
        "Misa en si menor",
        "El arte de la fuga",
        "Conciertos de Brandeburgo",
      ],
      instruments: ["Órgano", "Clavicémbalo", "Violín"],
      achievements: [
        "Maestro del contrapunto y la armonía barroca",
        "Compositor prolífico en música sacra y secular",
        "Influencia duradera en la música clásica",
        "Desarrollo y perfección de formas musicales de su tiempo",
      ],
      ageAtDeath: 65,
    //   influence: {
    //     composers: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart"],
    //     musicPeriod: "Barroco",
    //   },
    //   legacy:
    //     "Uno de los mayores compositores de la historia, cuyo legado perdura en la música clásica.",
    //   description:
    //     "Johann Sebastian Bach, un destacado compositor barroco alemán, dejó un impacto duradero en la música con sus obras maestras que abarcan una amplia variedad de géneros.",
    //   imageUrl: "https://ejemplo.com/bach-imagen.jpg",
    },
    {
      id: "5",
      name: "Franz Schubert",
      occupation: "Compositor",
      birthdate: "31 de enero de 1797",
      placeOfBirth: "Viena, Sacro Imperio Romano Germánico",
      nationality: "Austríaco",
      genres: ["Romanticismo"],
      notableWorks: [
        'Ciclo de canciones "La bella molinera"',
        'Sinfonía n.º 8 "Inacabada"',
        "Cuartetos de cuerda",
      ],
      instruments: ["Piano", "Voz"],
      achievements: [
        "Compositor prolífico en lieder y música de cámara",
        "Influencia en el Romanticismo musical",
        "Contribuciones a la forma del lied",
        "Sinfonías y obras orquestales destacadas",
      ],
      ageAtDeath: 31,
    //   influence: {
    //     composers: ["Franz Liszt", "Robert Schumann"],
    //     musicPeriod: "Romanticismo",
    //   },
    //   legacy:
    //     "Uno de los principales exponentes del Romanticismo musical, conocido por su expresividad y melodías cautivadoras.",
    //   description:
    //     "Franz Schubert, compositor austríaco del Romanticismo, es recordado por su vasta producción musical, incluyendo lieder, sinfonías y música de cámara.",
    //   imageUrl: "https://ejemplo.com/schubert-imagen.jpg",
    },
    {
      id: "6",
      name: "Pyotr Ilyich Tchaikovsky",
      occupation: "Compositor",
      birthdate: "7 de mayo de 1840",
      placeOfBirth: "Votkinsk, Imperio ruso",
      nationality: "Ruso",
      genres: ["Romanticismo"],
      notableWorks: [
        "El lago de los cisnes",
        "El Cascanueces",
        'Sinfonía n.º 6 "Patética"',
      ],
      instruments: ["Piano", "Violín"],
      achievements: [
        "Maestro del ballet romántico",
        "Compositor de sinfonías, óperas y música de cámara",
        "Contribuciones significativas al repertorio clásico ruso",
        "Influencia en la música del Romanticismo",
      ],
      ageAtDeath: 53,
    //   influence: {
    //     composers: ["Sergei Rachmaninoff", "Igor Stravinsky"],
    //     musicPeriod: "Romanticismo",
    //   },
    //   legacy:
    //     "Uno de los compositores más destacados del Romanticismo ruso, conocido por sus obras maestras melódicas y expresivas.",
    //   description:
    //     "Pyotr Ilyich Tchaikovsky, destacado compositor ruso, dejó un legado duradero en la música con sus composiciones para ballet, ópera y sinfonías.",
    //   imageUrl: "https://ejemplo.com/tchaikovsky-imagen.jpg",
    },
    {
      id: "7",
      name: "Johannes Brahms",
      occupation: "Compositor",
      birthdate: "7 de mayo de 1833",
      placeOfBirth: "Hamburgo, Confederación Germánica",
      nationality: "Alemán",
      genres: ["Romanticismo"],
      notableWorks: [
        "Sinfonía n.º 4",
        "Concierto para piano n.º 2",
        "Canciones húngaras",
      ],
      instruments: ["Piano", "Violín"],
      achievements: [
        "Compositor de sinfonías, conciertos y música de cámara",
        "Maestro de la forma y estructura musical",
        "Conservador de la tradición clásica en la era romántica",
        "Influencia en generaciones posteriores de compositores",
      ],
      ageAtDeath: 63,
    //   influence: {
    //     composers: ["Antonín Dvořák", "Gustav Mahler"],
    //     musicPeriod: "Romanticismo",
    //   },
    //   legacy:
    //     "Uno de los grandes maestros del Romanticismo, conocido por su profundidad emocional y maestría en la composición clásica.",
    //   description:
    //     "Johannes Brahms, compositor alemán del Romanticismo, dejó un impacto duradero en la música con sus composiciones ricas y expresivas.",
    //   imageUrl: "https://ejemplo.com/brahms-imagen.jpg",
    },
    {
      id: "8",
      name: "Claude Debussy",
      occupation: "Compositor",
      birthdate: "22 de agosto de 1862",
      placeOfBirth: "Saint-Germain-en-Laye, Francia",
      nationality: "Francés",
      genres: ["Impresionismo"],
      notableWorks: ["Preludios", "La Mer", "Clair de Lune"],
      instruments: ["Piano", "Orquesta"],
      achievements: [
        "Innovador del estilo musical impresionista",
        "Explorador de armonías y texturas novedosas",
        "Contribuciones a la música simbolista",
        "Influencia en la música del siglo XX",
      ],
      ageAtDeath: 55,
    //   influence: {
    //     composers: ["Maurice Ravel", "Olivier Messiaen"],
    //     musicPeriod: "Impresionismo",
    //   },
    //   legacy:
    //     "Uno de los principales exponentes del impresionismo musical, conocido por sus composiciones evocativas y atmosféricas.",
    //   description:
    //     "Claude Debussy, destacado compositor francés, revolucionó la música con su enfoque innovador y exploración de nuevas sonoridades en la era impresionista.",
    //   imageUrl: "https://ejemplo.com/debussy-imagen.jpg",
    },
    {
      id: "9",
      name: "Richard Wagner",
      occupation: "Compositor",
      birthdate: "22 de mayo de 1813",
      placeOfBirth: "Leipzig, Confederación Germánica",
      nationality: "Alemán",
      genres: ["Ópera", "Música dramática"],
      notableWorks: ["El Anillo del Nibelungo", "Tristán e Isolda", "Tannhäuser"],
      instruments: ["Órgano", "Orquesta"],
      achievements: [
        "Revitalizador del género operístico",
        'Desarrollo del concepto de "Gesamtkunstwerk"',
        "Innovaciones en armonía y orquestación",
        "Influencia duradera en la música y el teatro",
      ],
      ageAtDeath: 70,
    //   influence: {
    //     composers: ["Richard Strauss", "Gustav Mahler"],
    //     musicPeriod: "Romanticismo",
    //   },
    //   legacy:
    //     "Uno de los compositores más influyentes en la historia de la ópera y la música dramática, conocido por su grandiosidad y enfoque totalizador.",
    //   description:
    //     "Richard Wagner, compositor alemán, transformó el mundo de la ópera con sus innovadoras obras y su visión de la síntesis total de las artes.",
    //   imageUrl: "https://ejemplo.com/wagner-imagen.jpg",
    },
    {
      id: "10",
      name: "Antonio Vivaldi",
      occupation: "Compositor y violinista",
      birthdate: "4 de marzo de 1678",
      placeOfBirth: "Venecia, República de Venecia",
      nationality: "Italiano",
      genres: ["Barroco"],
      notableWorks: [
        "Las Cuatro Estaciones",
        "Concierto para mandolina",
        "Gloria",
      ],
      instruments: ["Violín", "Cello", "Órgano"],
      achievements: [
        "Maestro del barroco veneciano",
        "Innovador en la escritura de conciertos",
        "Compositor prolífico de música sacra y secular",
        "Contribuciones al desarrollo del violín",
      ],
      ageAtDeath: 63,
    //   influence: {
    //     composers: ["Johann Sebastian Bach", "Georg Philipp Telemann"],
    //     musicPeriod: "Barroco",
    //   },
    //   legacy:
    //     'Conocido como el "Prete Rosso" (Sacerdote Rojo), Vivaldi dejó un legado importante en la música barroca y es especialmente recordado por sus conciertos.',
    //   description:
    //     "Antonio Vivaldi, destacado compositor y violinista italiano, fue una figura central en la música barroca, conocido por su habilidad en la escritura de conciertos y óperas.",
    //   imageUrl: "https://ejemplo.com/vivaldi-imagen.jpg",
    },
    {
      id: "11",
      name: "George Frideric Handel",
      occupation: "Compositor",
      birthdate: "23 de febrero de 1685",
      placeOfBirth: "Halle, Sacro Imperio Romano Germánico",
      nationality: "Alemán (naturalizado británico)",
      genres: ["Barroco"],
      notableWorks: [
        "El Mesías",
        "Música acuática",
        "Música para los Reales Fuegos Artificiales",
      ],
      instruments: ["Órgano", "Cembalo"],
      achievements: [
        "Uno de los principales compositores del Barroco",
        "Producción prolífica de óperas, oratorios y música instrumental",
        "Contribuciones significativas al oratorio inglés",
        "Reconocimiento en la corte británica",
      ],
      ageAtDeath: 74,
    //   influence: {
    //     composers: ["Ludwig van Beethoven", "Johann Sebastian Bach"],
    //     musicPeriod: "Barroco",
    //   },
    //   legacy:
    //     "Handel dejó un legado duradero en la música barroca británica, especialmente conocido por sus oratorios majestuosos y composiciones para eventos ceremoniales.",
    //   description:
    //     "George Frideric Handel, destacado compositor alemán-británico, fue una figura clave en la música barroca, conocido por sus óperas, oratorios y música para la corte real.",
    //   imageUrl: "https://ejemplo.com/handel-imagen.jpg",
    },
  
    // Puedes continuar agregando información para otros planetas
    // ...
  ];
  
  module.exports = composersDataPro;
  