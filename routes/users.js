var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb+srv://freddy2010:qweQWE333@list-0ixqy.mongodb.net/test?retryWrites=true', (err, database) => {
    if (err) {
        return console.log(err)
    }
    var db = database.db('FP_Quest');
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/sign-in', (req, res) => {
  console.log('autorized')
    db.collection('Users').updateOne({}, {$inc: {"activeUsers": 1}})
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router;
