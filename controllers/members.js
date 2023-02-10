const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('members/index', { title: 'Family Members' });
});
/* GET /father */
router.get('/father',(req, res)=> {
  res.render('members/father', { title: 'Father' });
});

/* GET /mother */
router.get('/mother',(req, res)=> {
  res.render('members/mother', { title: 'Mother' });
});

/* GET /brother */
router.get('/brother',(req, res)=> {
  res.render('members/brother', { title: 'Brother' });
});
module.exports = router;
