var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f
// https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
// https://www.geeksforgeeks.org/run-python-script-node-js-using-child-process-spawn-method/
// https://stackoverflow.com/questions/40637522/trying-to-rewrite-app-js-as-a-class