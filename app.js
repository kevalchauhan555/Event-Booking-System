const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/event');
require('dotenv').config();
require('./config/db')();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'something went wrong', error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on ${PORT}`));

module.exports = app;