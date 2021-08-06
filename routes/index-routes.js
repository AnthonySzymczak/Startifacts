const router = require("express").Router();


router.get('/index', function (req, res) {
  res.render('index')
})

router.get('/', function (req, res) {
    res.redirect('index')
})

module.exports = router;