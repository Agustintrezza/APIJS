const express = require("express");
const router = express.Router();
const {isAuth, isUserPaid} = require("../public/scripts/utils/utils");
const cocktailsData = require('../db/cocktailsData');
const cocktailsDataPro = require('../db/cocktailsDataPro')

module.exports = router;

router.get("/pro", isUserPaid, async (req, res) => {
    try {
  
      if (req.routeType === 'PRO' || req.routeType === 'PREMIUM') {

        const responseObject = {
            status: 200,
            message: 'Éxito',
            data: 
              cocktailsDataPro
            ,
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