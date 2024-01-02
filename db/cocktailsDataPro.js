const cocktailsDataPro = [
    {
      id: "1",
      name: "Margarita",
      category: "Cóctel",
      ingredients: [
        {
          name: "Tequila",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Licor de naranja (triple sec)",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Jugo de limón fresco",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Azúcar (opcional, para el borde del vaso)",
          amount: "1 cucharadita",
        },
        {
          name: "Hielo",
          amount: "Al gusto",
        },
        {
          name: "Rodaja de limón (para decorar)",
          amount: "1 unidad",
        },
        {
          name: "Sal (opcional, para el borde del vaso)",
          amount: "Al gusto",
        },
      ],
      preparation: [
        "Moja el borde del vaso con una rodaja de limón y luego sumérgelo en sal (opcional) para crear un borde escarchado.",
        "En una coctelera, agrega el tequila, el licor de naranja, el jugo de limón y el azúcar (opcional).",
        "Añade hielo a la coctelera y agita bien para enfriar la mezcla.",
        "Cuela la mezcla en el vaso preparado con hielo.",
        "Decora con una rodaja de limón en el borde del vaso.",
        "¡Disfruta de tu refrescante Margarita!",
      ],
    //   tips: [
    //     "Utiliza tequila de calidad premium para un sabor excepcional.",
    //     "Ajusta la cantidad de azúcar según tu preferencia de dulzura.",
    //     "Experimenta con variedades de limón para darle un toque único.",
    //     "Sirve en un vaso de margarita de cristal para una presentación elegante.",
    //   ],
    //   glassType: "Vaso de margarita",
    //   garnish: "Rodaja de limón y borde escarchado con sal",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/margarita-imagen1.jpg",
    //     "https://ejemplo.com/margarita-imagen2.jpg",
    //     "https://ejemplo.com/margarita-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "2",
      name: "Martini",
      category: "Cóctel",
      ingredients: [
        {
          name: "Gin",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Vermú seco",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Aceituna (para decorar)",
          amount: "1 unidad",
        },
        {
          name: "Hielo",
          amount: "Al gusto",
        },
      ],
      preparation: [
        "En una coctelera, agrega el gin y el vermú seco.",
        "Añade hielo a la coctelera y agita bien para enfriar la mezcla.",
        "Cuela la mezcla en una copa de martini.",
        "Decora con una aceituna en el centro del cóctel.",
        "¡Disfruta de tu elegante Martini!",
      ],
    //   tips: [
    //     "Utiliza gin de alta calidad para realzar el sabor.",
    //     "Ajusta la proporción de gin y vermut según tu preferencia.",
    //     "Prueba con aceitunas rellenas para una variación de sabor.",
    //     "Sirve en una copa de martini fría para mantener la temperatura adecuada.",
    //   ],
    //   glassType: "Copa de martini",
    //   garnish: "Aceituna",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/martini-imagen1.jpg",
    //     "https://ejemplo.com/martini-imagen2.jpg",
    //     "https://ejemplo.com/martini-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "3",
      name: "Negroni",
      category: "Cóctel",
      ingredients: [
        {
          name: "Gin",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Vermú rojo",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Campari",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Rodaja de naranja (para decorar)",
          amount: "1 unidad",
        },
        {
          name: "Hielo",
          amount: "Al gusto",
        },
      ],
      preparation: [
        "En un vaso bajo con hielo, agrega el gin, el vermut rojo y el Campari.",
        "Remueve suavemente para mezclar los ingredientes.",
        "Decora con una rodaja de naranja en el borde del vaso.",
        "¡Disfruta de tu sofisticado Negroni!",
      ],
    //   tips: [
    //     "Elige ingredientes de calidad para un auténtico sabor italiano.",
    //     "Ajusta la proporción de ingredientes según tu preferencia de sabor.",
    //     "Prueba con diferentes tipos de vermut para variaciones de sabor.",
    //     "Sirve en un vaso bajo con hielo para mantenerlo refrescante.",
    //   ],
    //   glassType: "Vaso bajo",
    //   garnish: "Rodaja de naranja",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/negroni-imagen1.jpg",
    //     "https://ejemplo.com/negroni-imagen2.jpg",
    //     "https://ejemplo.com/negroni-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "4",
      name: "Blue Curacao",
      category: "Cóctel",
      ingredients: [
        {
          name: "Licor Blue Curacao",
          amount: "1.5 oz (45 ml)",
        },
        {
          name: "Vodka",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Jugo de piña",
          amount: "3 oz (90 ml)",
        },
        {
          name: "Cubos de hielo",
          amount: "Al gusto",
        },
      ],
      preparation: [
        "En una coctelera, agrega el licor Blue Curacao, el vodka y el jugo de piña.",
        "Añade cubos de hielo a la coctelera y agita bien para enfriar la mezcla.",
        "Cuela la mezcla en un vaso alto con hielo.",
        "Decora con una rodaja de piña en el borde del vaso.",
        "¡Disfruta de tu vibrante Blue Curacao!",
      ],
    //   tips: [
    //     "Utiliza licor Blue Curacao de alta calidad para un color vibrante.",
    //     "Ajusta la cantidad de jugo de piña según tu preferencia de dulzura.",
    //     "Prueba con decoraciones tropicales para una presentación llamativa.",
    //     "Sirve en un vaso alto para disfrutar de los colores del cóctel.",
    //   ],
    //   glassType: "Vaso alto",
    //   garnish: "Rodaja de piña",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/blue-curacao-imagen1.jpg",
    //     "https://ejemplo.com/blue-curacao-imagen2.jpg",
    //     "https://ejemplo.com/blue-curacao-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "5",
      name: "Cuba Libre",
      category: "Cóctel",
      ingredients: [
        {
          name: "Ron blanco",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Cola",
          amount: "Cola al gusto",
        },
        {
          name: "Jugo de lima",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Cubos de hielo",
          amount: "Al gusto",
        },
        {
          name: "Rodaja de lima (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "En un vaso alto con cubos de hielo, añade el ron blanco.",
        "Exprime el jugo de lima sobre el ron.",
        "Completa con cola al gusto y mezcla suavemente.",
        "Decora con una rodaja de lima en el borde del vaso.",
        "¡Disfruta de tu refrescante Cuba Libre!",
      ],
    //   tips: [
    //     "Utiliza un buen ron blanco para un sabor auténtico.",
    //     "Ajusta la cantidad de cola según tu preferencia de dulzura.",
    //     "Puedes agregar más lima si deseas un toque cítrico más fuerte.",
    //     "Sirve con mucho hielo para mantenerlo bien frío.",
    //   ],
    //   glassType: "Vaso alto",
    //   garnish: "Rodaja de lima",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/cuba-libre-imagen1.jpg",
    //     "https://ejemplo.com/cuba-libre-imagen2.jpg",
    //     "https://ejemplo.com/cuba-libre-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "6",
      name: "Cosmopolitan",
      category: "Cóctel",
      ingredients: [
        {
          name: "Vodka",
          amount: "1.5 oz (45 ml)",
        },
        {
          name: "Triple sec",
          amount: "0.5 oz (15 ml)",
        },
        {
          name: "Jugo de arándano",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Jugo de lima fresco",
          amount: "0.5 oz (15 ml)",
        },
        {
          name: "Cáscara de naranja (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "En una coctelera, agrega el vodka, el triple sec, el jugo de arándano y el jugo de lima fresco.",
        "Añade cubos de hielo a la coctelera y agita bien para enfriar la mezcla.",
        "Cuela la mezcla en una copa de cóctel previamente enfriada.",
        "Decora con una cáscara de naranja.",
      ],
    //   tips: [
    //     "Utiliza ingredientes de alta calidad para un sabor excepcional.",
    //     "Puedes ajustar la proporción de jugo de arándano según tu preferencia.",
    //     "Sirve en una copa de cóctel para una presentación elegante.",
    //   ],
    //   glassType: "Copa de cóctel",
    //   garnish: "Cáscara de naranja",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/cosmopolitan-imagen1.jpg",
    //     "https://ejemplo.com/cosmopolitan-imagen2.jpg",
    //     "https://ejemplo.com/cosmopolitan-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "7",
      name: "Piña Colada",
      category: "Cóctel",
      ingredients: [
        {
          name: "Ron blanco",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Crema de coco",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Jugo de piña",
          amount: "3 oz (90 ml)",
        },
        {
          name: "Cubos de hielo",
          amount: "Al gusto",
        },
        {
          name: "Rodaja de piña (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "En una licuadora, combina el ron blanco, la crema de coco y el jugo de piña con cubos de hielo.",
        "Mezcla hasta obtener una consistencia suave y cremosa.",
        "Vierte la mezcla en un vaso alto.",
        "Decora con una rodaja de piña en el borde del vaso.",
      ],
    //   tips: [
    //     "Utiliza ingredientes de buena calidad para un sabor delicioso.",
    //     "Ajusta la cantidad de jugo de piña según tu preferencia de dulzura.",
    //     "Prueba con diferentes decoraciones tropicales para un toque visual.",
    //   ],
    //   glassType: "Vaso alto",
    //   garnish: "Rodaja de piña",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Bajo",
    //   images: [
    //     "https://ejemplo.com/pina-colada-imagen1.jpg",
    //     "https://ejemplo.com/pina-colada-imagen2.jpg",
    //     "https://ejemplo.com/pina-colada-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "8",
      name: "Mojito",
      category: "Cóctel",
      ingredients: [
        {
          name: "Ron blanco",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Azúcar",
          amount: "2 cucharaditas",
        },
        {
          name: "Jugo de lima",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Menta fresca",
          amount: "10 hojas",
        },
        {
          name: "Agua con gas",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Cubos de hielo",
          amount: "Al gusto",
        },
        {
          name: "Rodaja de lima (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "En un vaso, agrega el azúcar y el jugo de lima.",
        "Remueve bien para disolver el azúcar.",
        "Añade las hojas de menta y machácalas suavemente con un mortero.",
        "Llena el vaso con cubos de hielo y vierte el ron blanco.",
        "Completa con agua con gas y mezcla suavemente.",
        "Decora con una rodaja de lima en el borde del vaso.",
      ],
    //   tips: [
    //     "Utiliza ron blanco de buena calidad para un mejor sabor.",
    //     "Ajusta la cantidad de azúcar según tu preferencia de dulzura.",
    //     "Experimenta con diferentes tipos de menta para variar el sabor.",
    //   ],
    //   glassType: "Vaso alto",
    //   garnish: "Rodaja de lima",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/mojito-imagen1.jpg",
    //     "https://ejemplo.com/mojito-imagen2.jpg",
    //     "https://ejemplo.com/mojito-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "9",
      name: "Caipirinha",
      category: "Cóctel",
      ingredients: [
        {
          name: "Cachaça",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Azúcar",
          amount: "2 cucharaditas",
        },
        {
          name: "Limón",
          amount: "1 unidad",
        },
        {
          name: "Hielo",
          amount: "Al gusto",
        },
      ],
      preparation: [
        "Lava el limón y córtalo en trozos pequeños.",
        "En un vaso, agrega los trozos de limón y el azúcar.",
        "Machaca suavemente para extraer el jugo del limón y disolver el azúcar.",
        "Añade la cachaça y mezcla bien.",
        "Completa con hielo al gusto.",
      ],
    //   tips: [
    //     "Utiliza cachaça de calidad para un sabor auténtico.",
    //     "Ajusta la cantidad de azúcar según tu preferencia de dulzura.",
    //     "Puedes experimentar con otras frutas, como fresas o kiwis.",
    //   ],
    //   glassType: "Vaso corto",
    //   garnish: "Rodaja de limón",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/caipirinha-imagen1.jpg",
    //     "https://ejemplo.com/caipirinha-imagen2.jpg",
    //     "https://ejemplo.com/caipirinha-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "10",
      name: "Whisky Sour",
      category: "Cóctel",
      ingredients: [
        {
          name: "Bourbon o whisky",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Jarabe de azúcar",
          amount: "3/4 oz (22.5 ml)",
        },
        {
          name: "Jugo de limón fresco",
          amount: "3/4 oz (22.5 ml)",
        },
        {
          name: "Clara de huevo",
          amount: "1 unidad (opcional)",
        },
        {
          name: "Hielo",
          amount: "Al gusto",
        },
        {
          name: "Cereza al marrasquino (para decorar)",
          amount: "1 unidad",
        },
        {
          name: "Rodaja de naranja (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "En una coctelera, agrega el bourbon o whisky, el jarabe de azúcar, y el jugo de limón fresco.",
        "Si lo prefieres, añade la clara de huevo a la coctelera para darle una textura suave y espumosa al cóctel.",
        "Añade hielo a la coctelera y agita bien para enfriar la mezcla.",
        "Cuela la mezcla en un vaso bajo con hielo.",
        "Decora con una cereza al marrasquino y una rodaja de naranja.",
        "¡Disfruta de tu refrescante Whisky Sour!",
      ],
    //   tips: [
    //     "Utiliza un bourbon de calidad para un sabor excepcional.",
    //     "Ajusta la cantidad de jarabe de azúcar según tu preferencia de dulzura.",
    //     "La clara de huevo es opcional, pero agrega una textura suave al cóctel.",
    //   ],
    //   glassType: "Vaso bajo",
    //   garnish: "Cereza al marrasquino y rodaja de naranja",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/whisky-sour-imagen1.jpg",
    //     "https://ejemplo.com/whisky-sour-imagen2.jpg",
    //     "https://ejemplo.com/whisky-sour-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "11",
      name: "Black Russian",
      category: "Cóctel",
      ingredients: [
        {
          name: "Vodka",
          amount: "1.5 oz (45 ml)",
        },
        {
          name: "Licor de café",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Cubos de hielo",
          amount: "Al gusto",
        },
      ],
      preparation: [
        "En un vaso bajo con cubos de hielo, añade el vodka y el licor de café.",
        "Remueve suavemente para mezclar los ingredientes.",
        "¡Disfruta de tu elegante Black Russian!",
      ],
    //   tips: [
    //     "Utiliza un vodka de calidad para un sabor excepcional.",
    //     "Ajusta la cantidad de licor de café según tu preferencia de sabor.",
    //     "Puedes decorar con una cereza al marrasquino si lo deseas.",
    //   ],
    //   glassType: "Vaso bajo",
    //   garnish: "Cereza al marrasquino (opcional)",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/black-russian-imagen1.jpg",
    //     "https://ejemplo.com/black-russian-imagen2.jpg",
    //     "https://ejemplo.com/black-russian-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "12",
      name: "Manhattan",
      category: "Cóctel",
      ingredients: [
        {
          name: "Whisky de centeno",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Vermú dulce",
          amount: "1 oz (30 ml)",
        },
        {
          name: "Angostura bitters",
          amount: "2-3 gotas",
        },
        {
          name: "Cereza al marrasquino (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "En un vaso mezclador con hielo, añade el whisky de centeno, el vermú dulce y las gotas de Angostura bitters.",
        "Remueve bien la mezcla.",
        "Cuela la mezcla en un vaso para cócteles previamente enfriado.",
        "Decora con una cereza al marrasquino.",
      ],
    //   tips: [
    //     "Utiliza whisky de centeno de calidad para un sabor auténtico.",
    //     "Ajusta la cantidad de bitters según tu preferencia de amargor.",
    //     "Sirve en un vaso para cócteles para una presentación clásica.",
    //   ],
    //   glassType: "Vaso para cócteles",
    //   garnish: "Cereza al marrasquino",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/manhattan-imagen1.jpg",
    //     "https://ejemplo.com/manhattan-imagen2.jpg",
    //     "https://ejemplo.com/manhattan-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "13",
      name: "Old Fashioned",
      category: "Cóctel",
      ingredients: [
        {
          name: "Azúcar",
          amount: "1 cucharadita",
        },
        {
          name: "Agua",
          amount: "1 chorrito",
        },
        {
          name: "Angostura bitters",
          amount: "2-3 gotas",
        },
        {
          name: "Whisky bourbon",
          amount: "2 oz (60 ml)",
        },
        {
          name: "Cáscara de naranja (para decorar)",
          amount: "1 trozo",
        },
      ],
      preparation: [
        "En un vaso, añade el azúcar y el chorrito de agua.",
        "Añade las gotas de Angostura bitters y mezcla hasta disolver el azúcar.",
        "Añade el whisky bourbon y algunos cubos de hielo.",
        "Remueve suavemente y decora con una cáscara de naranja.",
      ],
    //   tips: [
    //     "Utiliza un whisky bourbon de calidad para un sabor excepcional.",
    //     "Ajusta la cantidad de azúcar según tu preferencia de dulzura.",
    //     "Exprime la cáscara de naranja sobre el cóctel para liberar sus aceites esenciales.",
    //   ],
    //   glassType: "Vaso bajo",
    //   garnish: "Cáscara de naranja",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/old-fashioned-imagen1.jpg",
    //     "https://ejemplo.com/old-fashioned-imagen2.jpg",
    //     "https://ejemplo.com/old-fashioned-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    {
      id: "14",
      name: "Bloody Mary",
      category: "Cóctel",
      ingredients: [
        {
          name: "Vodka",
          amount: "1.5 oz (45 ml)",
        },
        {
          name: "Jugo de tomate",
          amount: "3 oz (90 ml)",
        },
        {
          name: "Zumo de limón",
          amount: "0.5 oz (15 ml)",
        },
        {
          name: "Salsa inglesa",
          amount: "1 chorrito",
        },
        {
          name: "Salsa picante (al gusto)",
          amount: "Al gusto",
        },
        {
          name: "Sal de apio (para el borde del vaso)",
          amount: "Al gusto",
        },
        {
          name: "Cubos de hielo",
          amount: "Al gusto",
        },
        {
          name: "Rama de apio y rodaja de limón (para decorar)",
          amount: "1 unidad",
        },
      ],
      preparation: [
        "Humedece el borde de un vaso alto con la rodaja de limón y sumérgelo en sal de apio para crear un borde escarchado.",
        "En el vaso preparado, añade el vodka, el jugo de tomate, el zumo de limón, la salsa inglesa y la salsa picante.",
        "Añade cubos de hielo y mezcla bien.",
        "Decora con una rama de apio y una rodaja de limón.",
      ],
    //   tips: [
    //     "Ajusta la cantidad de salsa picante según tu preferencia de picante.",
    //     "Utiliza vodka de buena calidad para un mejor sabor.",
    //     "Puedes agregar condimentos adicionales como pimienta negra o rábano picante si lo deseas más sabroso.",
    //   ],
    //   glassType: "Vaso alto",
    //   garnish: "Rama de apio y rodaja de limón",
    //   servingTemperature: "Fresco",
    //   alcoholContent: "Moderado",
    //   images: [
    //     "https://ejemplo.com/bloody-mary-imagen1.jpg",
    //     "https://ejemplo.com/bloody-mary-imagen2.jpg",
    //     "https://ejemplo.com/bloody-mary-imagen3.jpg",
    //   ],
    //   video: "https://www.youtube.com/watch?v=ejemplo",
    },
    // Puedes continuar agregando información para otros planetas
    // ...
  ];
  
  module.exports = cocktailsDataPro;
  