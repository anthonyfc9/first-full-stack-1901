const router = require('express').Router();

const controller = require('./controller');

router.post('/pokemon', controller.create);

router.put('/pokemon/:id', controller.update);

module.exports = router;