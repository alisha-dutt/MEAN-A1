const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('friends/index', { title: 'Friends' });
});
/* GET /bestfriend1 */
router.get('/bestfriend',(req, res)=> {
  res.render('friends/bestfriend1', { title: 'My Best friend' });
});

/* GET /bestfriend2 */
router.get('/boyfriend',(req, res)=> {
  res.render('friends/bestfriend2', { title: 'My Best friend' });
});


module.exports = router;
