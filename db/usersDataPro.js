const usersDataPro = [
    {
        id: 1,
        name: 'Maria',
        lastname: 'Gomez',
        age: 28,
        born: '12-15-1995',
        country: 'Spain',
        hobbies: ['Painting', 'Reading', 'Cycling', 'Cooking'],
        video: 'https://www.youtube.com/watch?v=abc123&ab_channel=ArtLover',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/xyz789.webp',
        // historial: {
        //   infancia: 'Desde pequeña, me fascinaba el arte. Pasaba horas dibujando y pintando en mi habitación, creando mundos imaginarios con cada trazo de pincel. Mis padres siempre me animaron a seguir mi pasión creativa.',
        //   adolescencia: 'En la adolescencia, descubrí mi amor por la lectura y la escritura. Los libros se convirtieron en mis compañeros más fieles, y las palabras se convirtieron en mi refugio en tiempos de cambios y descubrimientos.'
        // }
      },
      {
        id: 2,
        name: 'Carlos',
        lastname: 'López',
        age: 42,
        born: '03-21-1980',
        country: 'Mexico',
        hobbies: ['Photography', 'Traveling', 'Camping', 'Cooking'],
        video: 'https://www.youtube.com/watch?v=def456&ab_channel=AdventureSeeker',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/pqr321.webp',
        // historial: {
        //   infancia: 'Mi infancia estuvo llena de aventuras al aire libre. Crecí explorando bosques, escalando árboles y descubriendo la magia de la naturaleza. Mis padres me inculcaron el amor por el medio ambiente desde pequeño.',
        //   adolescencia: 'En la adolescencia, la fotografía se convirtió en mi pasión. Capturar momentos fugaces se volvió una forma de expresión para mí. Viajé a diferentes lugares, buscando la belleza en cada rincón y aprendiendo sobre diversas culturas.'
        // }
      },
      {
        id: 3,
        name: 'Sophie',
        lastname: 'Johnson',
        age: 23,
        born: '09-08-1999',
        country: 'United States',
        hobbies: ['Music', 'Painting', 'Hiking', 'Photography'],
        video: 'https://www.youtube.com/watch?v=ghi789&ab_channel=CreativeSoul',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/mno456.webp',
        // historial: {
        //   infancia: 'Mi infancia fue una sinfonía de risas y descubrimientos. Cada día era una nueva aventura, ya fuera explorando el jardín trasero o inventando historias en mi mente creativa.',
        //   adolescencia: 'En la adolescencia, la música se convirtió en mi escape. Pasaba horas tocando instrumentos y componiendo canciones que expresaban mis emociones más profundas. La creatividad se convirtió en mi forma de autodescubrimiento.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 4,
        name: 'Liam',
        lastname: 'Smith',
        age: 31,
        born: '04-12-1992',
        country: 'Canada',
        hobbies: ['Snowboarding', 'Gaming', 'Cooking', 'Technology'],
        video: 'https://www.youtube.com/watch?v=jkl345&ab_channel=TechEnthusiast',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/uvw789.webp',
        // historial: {
        //   infancia: 'Crecí fascinado por la tecnología y los videojuegos. Mis días estaban llenos de exploraciones virtuales y curiosidad por el mundo digital que se expandía ante mis ojos.',
        //   adolescencia: 'En la adolescencia, mi amor por la tecnología se intensificó. Comencé a experimentar con programación y desarrollo de software. Cada línea de código era un paso hacia el futuro que imaginaba.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 5,
        name: 'Isabella',
        lastname: 'Martinez',
        age: 45,
        born: '07-30-1978',
        country: 'Argentina',
        hobbies: ['Dancing', 'Cooking', 'Gardening', 'Reading'],
        video: 'https://www.youtube.com/watch?v=pqrs123&ab_channel=JoyfulDancer',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/xyz123.webp',
        // historial: {
        //   infancia: 'Desde pequeña, la danza fue mi forma de expresión. Bailar en la sala de estar o en el jardín se convirtió en mi refugio y mi manera de comunicarme con el mundo.',
        //   adolescencia: 'En la adolescencia, mi pasión por la lectura floreció. Cada libro me transportaba a mundos desconocidos y despertaba mi imaginación. Los personajes y las historias se volvieron compañeros inseparables.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 6,
        name: 'Daniel',
        lastname: 'Chen',
        age: 38,
        born: '11-05-1985',
        country: 'China',
        hobbies: ['Martial Arts', 'Calligraphy', 'Traveling', 'Cooking'],
        video: 'https://www.youtube.com/watch?v=stu456&ab_channel=ZenWarrior',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/abc789.webp',
        // historial: {
        //   infancia: 'Crecí inmerso en las artes marciales. Desde joven, la disciplina y la gracia del kung fu se convirtieron en parte integral de mi vida cotidiana.',
        //   adolescencia: 'En la adolescencia, me sumergí en la caligrafía china. Cada trazo era una expresión de mi ser, y cada carácter contenía la riqueza de una tradición milenaria. La escritura se volvió una meditación en movimiento.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 7,
        name: 'Aya',
        lastname: 'Sato',
        age: 29,
        born: '02-18-1994',
        country: 'Japan',
        hobbies: ['Anime', 'Gaming', 'Photography', 'Traveling'],
        video: 'https://www.youtube.com/watch?v=def890&ab_channel=OtakuAdventures',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/def567.webp',
        // historial: {
        //   infancia: 'Desde pequeña, el mundo del anime y los videojuegos me cautivó. Cada episodio y cada aventura virtual eran portales a mundos llenos de emoción y fantasía.',
        //   adolescencia: 'En la adolescencia, mi amor por la fotografía se fusionó con mi fascinación por los viajes. Capturar momentos en diferentes lugares se convirtió en mi manera de preservar recuerdos inolvidables.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 8,
        name: 'Elena',
        lastname: 'Novak',
        age: 37,
        born: '08-24-1986',
        country: 'Russia',
        hobbies: ['Chess', 'Reading', 'Painting', 'Cooking'],
        video: 'https://www.youtube.com/watch?v=ghi567&ab_channel=StrategicMind',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/ghi890.webp',
        // historial: {
        //   infancia: 'Desde niña, me sumergí en el mundo del ajedrez. Cada partida era un desafío estratégico, y el tablero se convirtió en mi campo de batalla para ejercitar la mente.',
        //   adolescencia: 'En la adolescencia, mi pasión por la lectura se fusionó con mi amor por la pintura. Cada pincelada era una expresión de las historias que llenaban mi mente. El arte y la literatura se entrelazaron en mi búsqueda de significado.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 9,
        name: 'Miguel',
        lastname: 'Silva',
        age: 48,
        born: '06-11-1975',
        country: 'Brazil',
        hobbies: ['Surfing', 'Music', 'Cooking', 'Traveling'],
        video: 'https://www.youtube.com/watch?v=jkl678&ab_channel=WaveRider',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/jkl012.webp',
        // historial: {
        //   infancia: 'Desde pequeño, las olas del mar me llamaron. Aprender a surfear se convirtió en mi aventura favorita, y cada ola era una conexión con la naturaleza que me rodeaba.',
        //   adolescencia: 'En la adolescencia, la música se convirtió en mi banda sonora personal. Descubrí la magia de los acordes y las letras, y mi guitarra se convirtió en mi compañera inseparable en la búsqueda de la armonía.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 10,
        name: 'Lina',
        lastname: 'Chowdhury',
        age: 34,
        born: '03-02-1989',
        country: 'Bangladesh',
        hobbies: ['Cycling', 'Photography', 'Reading', 'Traveling'],
        video: 'https://www.youtube.com/watch?v=stu890&ab_channel=GlobalExplorer',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/mno012.webp',
        // historial: {
        //   infancia: 'Desde niña, mi bicicleta fue mi fiel compañera de aventuras. Explorar los rincones de mi vecindario y sentir la brisa en mi rostro se convirtió en mi ritual diario.',
        //   adolescencia: 'En la adolescencia, la fotografía se volvió mi forma de capturar la belleza efímera. Cada clic de la cámara era un intento de congelar momentos inolvidables en el tiempo.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 11,
        name: 'Kai',
        lastname: 'Tanaka',
        age: 41,
        born: '09-19-1982',
        country: 'Japan',
        hobbies: ['Gardening', 'Martial Arts', 'Reading', 'Cooking'],
        video: 'https://www.youtube.com/watch?v=pqrs567&ab_channel=ZenGardener',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/abc012.webp',
        // historial: {
        //   infancia: 'Desde pequeño, el jardín de mi abuela fue mi refugio. Plantar semillas y verlas crecer se convirtió en una lección de paciencia y conexión con la naturaleza.',
        //   adolescencia: 'En la adolescencia, las artes marciales se convirtieron en mi disciplina. Cada kata era una expresión de fuerza y armonía, y la práctica diaria me enseñó a encontrar equilibrio en la vida.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 12,
        name: 'Mila',
        lastname: 'Ivanova',
        age: 43,
        born: '05-14-1980',
        country: 'Russia',
        hobbies: ['Painting', 'Reading', 'Cooking', 'Hiking'],
        video: 'https://www.youtube.com/watch?v=def890&ab_channel=ArtEnthusiast',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/def567.webp',
        // historial: {
        //   infancia: 'Desde pequeña, encontré mi pasión en el arte. La paleta de colores se convirtió en mi forma de expresar emociones, y cada lienzo en blanco era una invitación a la creatividad.',
        //   adolescencia: 'En la adolescencia, la lectura se convirtió en mi escape a otros mundos. Cada libro era un portal a la imaginación, y las historias se convertían en compañeras en mis momentos de soledad.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 13,
        name: 'Ravi',
        lastname: 'Patel',
        age: 39,
        born: '07-07-1984',
        country: 'India',
        hobbies: ['Yoga', 'Cooking', 'Traveling', 'Photography'],
        video: 'https://www.youtube.com/watch?v=pqrs567&ab_channel=YogaJourney',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/pqr012.webp',
        // historial: {
        //   infancia: 'Desde niño, el yoga fue mi conexión con la paz interior. Las posturas y la meditación se convirtieron en mi refugio en medio del bullicio del día a día.',
        //   adolescencia: 'En la adolescencia, la fotografía se cruzó en mi camino. Capturar momentos de serenidad y belleza se volvió una extensión de mi práctica de yoga, llevando la tranquilidad a cada imagen.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 14,
        name: 'Sofia',
        lastname: 'Moreno',
        age: 36,
        born: '10-29-1987',
        country: 'Argentina',
        hobbies: ['Dancing', 'Cooking', 'Reading', 'Painting'],
        video: 'https://www.youtube.com/watch?v=abc890&ab_channel=JoyfulDancer',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/abc567.webp',
        // historial: {
        //   infancia: 'Desde pequeña, la danza fue mi forma de expresión. Bailar en la sala de estar o en el jardín se convirtió en mi refugio y mi manera de comunicarme con el mundo.',
        //   adolescencia: 'En la adolescencia, mi pasión por la lectura se fusionó con mi amor por la pintura. Cada pincelada era una expresión de las historias que llenaban mi mente. El arte y la literatura se entrelazaron en mi búsqueda de significado.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      },
      {
        id: 15,
        name: 'Javier',
        lastname: 'Rodriguez',
        age: 47,
        born: '04-03-1976',
        country: 'Spain',
        hobbies: ['Sailing', 'Photography', 'Gardening', 'Cooking'],
        video: 'https://www.youtube.com/watch?v=jkl789&ab_channel=SeaAdventurer',
        imagen: 'https://res.cloudinary.com/djpifu0cl/image/upload/v1690756537/jkl345.webp',
        // historial: {
        //   infancia: 'Crecí cerca del mar, y desde joven, las velas de un barco se convirtieron en mi sueño. Navegar se volvió una pasión que me llevó a descubrir la libertad en alta mar.',
        //   adolescencia: 'En la adolescencia, la fotografía se convirtió en mi forma de capturar la belleza de los paisajes marinos. Cada imagen era un testimonio de mi conexión con la naturaleza.',
        //   // No hay campo "vejez" ya que es menor de 50 años
        // }
      }
  ]



  module.exports =  usersDataPro;