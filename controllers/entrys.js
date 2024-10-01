const Entry = require('../models/Entry');

exports.createEntry = async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save();
    res.json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEntriesByHolder = async (req, res) => {
  try {
    const entries = await Entry.find({ holder: req.params.id }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getEntriesByDay = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const entries = await Entry.find({ entrytime: { $gte: today } }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getEntriesBetweenDates = async (req, res) => {
  const { start, end } = req.query;
  try {
    const entries = await Entry.find({
      entrytime: { $gte: new Date(start), $lte: new Date(end) }
    }).populate('laptop');
    res.json(entries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.registerCheckout = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndUpdate(req.params.id, { checkout: Date.now() }, { new: true });
    res.json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
