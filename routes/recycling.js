const express = require("express");
const router = express.Router();
const {isAuth, isUserPaid} = require("../public/scripts/utils/utils");
const recyclingData = require('../db/recyclingData');


module.exports = router;

router.get("/pro", isUserPaid, async (req, res) => {
    try {
  
      if (req.routeType === 'PRO' || req.routeType === 'PREMIUM') {

        const responseObject = {
            status: 200,
            message: 'Éxito',
            data: {
                id: '1',
                category: 'Reciclaje',
                title: 'Consejos Avanzados para Reciclar',
                tips: [
                'Reduce el uso de plástico eligiendo alternativas reutilizables, como bolsas de tela y botellas de agua recargables.',
                'Investiga sobre los programas de reciclaje locales para entender qué materiales son aceptados y cómo deben ser separados.',
                'Reutiliza objetos de uso diario de formas creativas. Por ejemplo, convierte envases vacíos en contenedores de almacenamiento.',
                'Apoya a empresas que adoptan prácticas sostenibles y producen envases reciclables como parte de la economía circular.',
                'Recicla productos electrónicos correctamente, ya que contienen materiales valiosos pero también componentes tóxicos.',
                'Participa en iniciativas comunitarias de limpieza y reciclaje para aumentar la conciencia ambiental.',
                ],
                importance: 'El reciclaje no solo reduce la cantidad de residuos, sino que también conserva recursos y ayuda a mitigar el impacto ambiental negativo. Contribuir al reciclaje es una acción fundamental para construir un futuro más sostenible.',
                benefits: ['Conservación de recursos naturales', 'Reducción de la contaminación', 'Promoción de la sostenibilidad'],
                challenges: ['Contaminación de materiales reciclables', 'Falta de conciencia y educación sobre reciclaje', 'Infraestructura limitada para el reciclaje'],
                additionalResources: {
                websites: ['https://www.recicla.org', 'https://www.ecoembes.com'],
                books: ['"Recycling Revolution" by Sarah Green', '"Sustainable Living Guide" by Emma Eco'],
                },
                video: 'https://www.youtube.com/watch?v=ejemplo',
                image: 'https://ejemplo.com/recycling-tips-premium-image.jpg',
            },
            };
          
  
          res.status(200).send(responseObject);
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
          data: recyclingData,
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