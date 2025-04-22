const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/event');

router.post('/', auth(['admin']), createEvent);
router.get('/', getEvents);
router.put('/:id', auth(['admin']), updateEvent);
router.delete('/:id', auth(['admin']), deleteEvent);

module.exports = router;