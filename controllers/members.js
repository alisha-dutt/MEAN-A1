const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next)=> {
  res.render('members/index', { title: 'Family Members' });
});
/* GET /father */
router.get('members/father',(req, res)=> {
  res.render('father', { title: 'Father' });
});

module.exports = router;
