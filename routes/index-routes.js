const router = require("express").Router();


router.get('/index', function (req, res) {
  if (req.session.loggedIn)
    res.render('index', { loggedIn: true });
  else
    res.render('index')
})
router.get('/', function (req, res) {
  res.redirect('/index')
})
module.exports = router;