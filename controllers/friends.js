const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index', { title: 'Friends' });
});
/* GET /bestfriend */
router.get('/bestfriend',(req, res)=> {
  res.render('bestfriend', { title: 'bestfriend' });
});

module.exports = router;
