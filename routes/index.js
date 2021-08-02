const { model } = require("../config/connection");
const apiroutes = require ("./api");

const router = require("express").Router();
// router.use('/api', apiroutes);

const landingpages = require('./landingpages')
router.use('/', landingpages);

module.exports = router;