var express = require('express')
  , router = express.Router()

router.use('/aktivnost', require('./aktivnost'))
router.use('/hasAktivnost', require('./hasAktivnost'))
router.use('/oseba', require('./oseba'))

router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router