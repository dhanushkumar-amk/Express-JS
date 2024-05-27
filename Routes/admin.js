const express = require('express');const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
  // res.send('<h1>Welcome page</h1>  ');
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

/** app.post means if the only works post method request  */
router.post('/add-product', (req, res, next) => {
  console.log('Form data : ', req.body);
  res.send('<h1> form submitted</h1>');
});

module.exports = router;
