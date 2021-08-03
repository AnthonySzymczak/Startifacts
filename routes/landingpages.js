const router = require("express").Router();

router.get('/', function (req, res) {
    res.render('index')
})

  
  /*
  app.get('/', function (req, res) {
    res.send('Get startrek categories')
  })
*/

module.exports = router;

/*
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.get('/', function (req, res) {
    res.render('index')
})
  
  /*
  app.get('/', function (req, res) {
    res.send('Get startrek categories')
  })

module.exports = router; */