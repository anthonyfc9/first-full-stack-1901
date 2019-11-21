const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/new', controller.new);

router.get('/:id/update', controller.update)

router.get('/:id', controller.show);

module.exports = router;
