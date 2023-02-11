const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about',(req, res)=> {
  res.render('about', { title: 'About'});
});

/* GET goals page. */
router.get('/goals',(req, res)=> {
  res.render('goals', { title: 'Goals & Intrests' });
});


module.exports = router;
