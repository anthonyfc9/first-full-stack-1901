const router = require('express').Router();

const controller = require('./controller');

router.post('/pokemon', controller.create);

router.put('/pokemon/:id', controller.update);

router.delete('/pokemon/:id', controller.delete);

module.exports = router;