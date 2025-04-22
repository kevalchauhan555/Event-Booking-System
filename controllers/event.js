const Event = require('../Models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { name, date, capacity } = req.body;
    const event = new Event({ name, date, capacity, availableSeats: capacity });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const { start, end, page = 1, limit = 10 } = req.query;
    const query = {};
    if (start && end) query.date = { $gte: new Date(start), $lte: new Date(end) };
    const events = await Event.find(query)
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};