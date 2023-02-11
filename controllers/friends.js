const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('friends/index', { title: 'Friends' });
});
/* GET /bestfriend */
router.get('/bestfriend',(req, res)=> {
  res.render('friends/bestfriend', { title: 'My Best friends' });
});

/* GET /boyfriend */
router.get('/boyfriend',(req, res)=> {
  res.render('friends/boyfriend', { title: 'My Boyfriend' });
});


module.exports = router;
