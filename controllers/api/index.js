const router = require('express').Router();
const controller = require('./controller');
router.post('/pokemon', controller.create);
module.exports = router;