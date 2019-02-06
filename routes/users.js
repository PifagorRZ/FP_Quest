var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/sign-in', (req, res) => {
  console.log('autorized')

})

module.exports = router;
