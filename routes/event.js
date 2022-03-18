const express = require('express');
const router = express.Router();
const events = require('../controller/event');
router.route('/events')
.get(events.renderEvent)
.post(events.addNewEvent)
module.exports = router ;