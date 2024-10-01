const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

// Import Routes
const holderRoutes = require('./routes/holder');
const laptopRoutes = require('./routes/laptop');
const entryRoutes = require('./routes/entry');

// Use Routes
app.use('/api/holder', holderRoutes);
app.use('/api/laptop', laptopRoutes);
app.use('/api/entry', entryRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
