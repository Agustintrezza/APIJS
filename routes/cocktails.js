const express = require("express");
const router = express.Router();
const {isAuth, isUserPaid} = require("../public/scripts/utils/utils");
const cocktailsData = require('../db/cocktailsData');

module.exports = router;

router.get("/pro", isUserPaid, async (req, res) => {
    try {
  
      if (req.routeType === 'PRO' || req.routeType === 'PREMIUM') {

        const responseObject = {
            status: 200,
            message: 'Éxito',
            data: {
              id: '1',
              name: 'Margarita',
              category: 'Cóctel',
              ingredients: [
                '2 oz (60 ml) de tequila',
                '1 oz (30 ml) de licor de naranja (triple sec)',
                '1 oz (30 ml) de jugo de limón fresco',
                '1 cucharadita de azúcar (opcional, para el borde del vaso)',
                'Hielo',
                'Rodaja de limón (para decorar)',
                'Sal (opcional, para el borde del vaso)',
              ],
              preparation: [
                'Moja el borde del vaso con una rodaja de limón y luego sumérgelo en sal (opcional) para crear un borde escarchado.',
                'En una coctelera, agrega el tequila, el licor de naranja, el jugo de limón y el azúcar (opcional).',
                'Añade hielo a la coctelera y agita bien para enfriar la mezcla.',
                'Cuela la mezcla en el vaso preparado con hielo.',
                'Decora con una rodaja de limón en el borde del vaso.',
                '¡Disfruta de tu refrescante Margarita!',
              ],
              tips: [
                'Utiliza tequila de buena calidad para obtener un mejor sabor.',
                'Puedes ajustar la cantidad de azúcar según tu preferencia de dulzura.',
                'Prueba diferentes variaciones, como Margarita de fresa o mango.',
                'Sirve en un vaso de margarita para una presentación auténtica.',
              ],
              glassType: 'Vaso de margarita',
              images: [
                'https://ejemplo.com/margarita-imagen1.jpg',
                'https://ejemplo.com/margarita-imagen2.jpg',
                'https://ejemplo.com/margarita-imagen3.jpg',
              ],
            },
          };
          
  
          res.status(200).send(responseObject);
      } else {
        res.status(403).json({ message: 'API KEY Acces Denied - Auth error PREMIUM' });

      }
    
  } catch (error) {
    console.log(error);
  }
  });


  router.get("/premium", isUserPaid, async (req, res) => {
    try {
      if (req.routeType === 'PREMIUM') {
        const responseObject = {
          status: 200,
          message: 'Éxito',
          data: cocktailsData,
        };
  
        res.status(200).send(responseObject);
      } else {
        res.status(403).json({ message: 'API KEY Acces Denied - Auth error PREMIUM' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  module.exports = router;