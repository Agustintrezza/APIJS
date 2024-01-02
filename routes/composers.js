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
const composersDataPro = require("../db/composersDataPro");

router.get("/pro", isUserPaid, async (req, res) => {
    try {
  
      if (req.routeType === 'PRO' || req.routeType === 'PREMIUM') {
        // Usuario PRO, permitir acceso a la ruta "/negocio"
        // ... tu lógica aquí ...
        // Crear un objeto de respuesta
        const responseObject = {
            status: 200,
            message: 'Éxito',
            data: composersDataPro
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