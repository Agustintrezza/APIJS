const express = require("express");
const router = express.Router();
const {isAuth, isUserPaid} = require("../public/scripts/utils/utils");
const planetsData = require('../db/planetsData');


router.get("/pro", isUserPaid, async (req, res) => {
    try {
  
      if (req.routeType === 'PRO' || req.routeType === 'PREMIUM') {

        const responseObject = {
          status: 200,
          message: 'Éxito',
          data: {
            id: '1',
            name: 'Mercurio',
            type: 'Planeta terrestre',
            diameter: '4,880 kilómetros',
            distanceFromSun: '57.9 millones de kilómetros',
            orbitalPeriod: '88 días terrestres',
            dayLength: '58.6 días terrestres',
            temperature: ['-173 °C (noche)', '427 °C (día)'],
            surfaceFeatures: ['Cráteres', 'Llanuras', 'Escarpas', 'Rocas espaciales'],
            atmosphere: {
              composition: ['Oxígeno', 'Sodio', 'Hidrógeno', 'Helio'],
              thickness: 'Muy delgada',
              conditions: 'Sin atmósfera significativa',
            },
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
          data: planetsData,
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