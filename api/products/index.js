var express = require('express');
var controller = require('./product.controller')
var router = express.Router();

router.get('/', controller.getAll)
router.post('/', controller.create)
router.post('/save', controller.save);

module.exports = router;
