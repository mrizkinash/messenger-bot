const express = require('express');
const router = express.Router();

const webhookController = require('../controller/webhook')

router.get('/', webhookController.webhookGet);
router.post('/', webhookController.webhookPost);

module.exports = router;