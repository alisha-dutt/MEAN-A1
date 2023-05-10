const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('friends/index', { title: 'Friends' });
});
/* GET /bestfriend1 */
router.get('/bestfriendmale',(req, res)=> {
  res.render('friends/bestfriendmale', { title: 'My Best friend' });
});

/* GET /bestfriend2 */
router.get('/bestfriendfemale',(req, res)=> {
  res.render('friends/bestfriendfemale', { title: 'My Gal Best friend' });
});


module.exports = router;
