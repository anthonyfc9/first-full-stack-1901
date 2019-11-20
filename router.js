const router = require('express').Router();

// router.js, ABOVE the router.get ‘/‘
router.use('/pokemon', require('./controllers/pokemon'));


router.get('/', (req, res) => res.render('index'));

module.exports = router;