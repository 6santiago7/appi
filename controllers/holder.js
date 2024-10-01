const Holder = require('../models/Holder');


exports.createHolder = async (req, res) => {
  try {
    const newHolder = new Holder(req.body);
    const savedHolder = await newHolder.save();
    res.json(savedHolder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHolder = async (req, res) => {
  try {
    const updatedHolder = await Holder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHolder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllHolders = async (req, res) => {
  try {
    const holders = await Holder.find();
    res.json(holders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getHolderById = async (req, res) => {
  try {
    const holder = await Holder.findById(req.params.id);
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.activateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: '1' }, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deactivateHolder = async (req, res) => {
  try {
    const holder = await Holder.findByIdAndUpdate(req.params.id, { state: '0' }, { new: true });
    res.json(holder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
