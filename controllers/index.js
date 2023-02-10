const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about',(req, res, next)=> {
  res.render('about', { title: 'About Me' });
});

/* GET goals page. */
router.get('/goals',(req, res, next)=> {
  res.render('goals', { title: 'Goals & Intrests' });
});


module.exports = router;
