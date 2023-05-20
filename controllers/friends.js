const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('friends/index', { title: 'Friends' });
});


/* GET /bestfriend2 */
router.get('/bestfriendfemale',(req, res)=> {
  res.render('friends/bestfriendfemale', { title: 'My Gal Best friend' });
});


module.exports = router;
