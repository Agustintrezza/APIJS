const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const { randomBytes } = require('crypto');
const { validationResult } = require("express-validator");
// const stripe = require("stripe")
const { formatISO, add, parseISO } = require('date-fns');
const {isAuth, isUserPaid} = require("../public/scripts/utils/utils");
const composersData = require('../db/composersData');

router.get("/pro", isUserPaid, async (req, res) => {
    try {
  
      if (req.routeType === 'PRO' || req.routeType === 'PREMIUM') {
        // Usuario PRO, permitir acceso a la ruta "/negocio"
        // ... tu lógica aquí ...
        // Crear un objeto de respuesta
        const responseObject = {
            status: 200,
            message: 'Éxito',
            data: {
              id: '2',
              name: 'Wolfgang Amadeus Mozart',
              occupation: 'Compositor',
              birthdate: '27 de enero de 1756',
              placeOfBirth: 'Salzburgo, Sacro Imperio Romano Germánico',
              nationality: 'Austríaco',
              genres: ['Clásica', 'Ópera', 'Sinfonía'],
              notableWorks: ['Eine kleine Nachtmusik', 'La flauta mágica', 'Sinfonía n.º 40'],
              instruments: ['Piano', 'Violín'],
              achievements: [
                'Compositor prodigio desde la infancia',
                'Autor de más de 600 obras',
                'Influencia duradera en la música clásica',
                // 'Maestro en diversos géneros musicales',
                // 'Reconocimiento póstumo como uno de los grandes compositores',
                // 'Contribuyó significativamente al desarrollo de la ópera',
                // 'Dejó un legado musical que sigue siendo apreciado en todo el mundo',
                // 'Su música ha sido interpretada en innumerables películas, programas de televisión y eventos',
              ],
            //   ageAtDeath: 35,
            //   influence: {
            //     composers: ['Ludwig van Beethoven', 'Franz Schubert'],
            //     musicPeriod: 'Era Clásica',
            //   },
            //   legacy: 'Uno de los más grandes compositores en la historia de la música clásica.',
            //   description: 'Wolfgang Amadeus Mozart fue un prolífico compositor y virtuoso músico austriaco del siglo XVIII. Su obra abarca diversos géneros musicales y ha dejado un impacto perdurable en la música clásica.',
            //   imageUrl: 'https://ejemplo.com/mozart-imagen.jpg',
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
          data: composersData,
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