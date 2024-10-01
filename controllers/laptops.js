const Laptop = require('../models/Laptop');


exports.createLaptop = async (req, res) => {
  try {
    const newLaptop = new Laptop(req.body);
    const savedLaptop = await newLaptop.save();
    res.json(savedLaptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateLaptop = async (req, res) => {
  try {
    const updatedLaptop = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLaptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find().populate('holder');
    res.json(laptops);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getLaptopById = async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id).populate('holder');
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.activateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, { state: '1' }, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deactivateLaptop = async (req, res) => {
  try {
    const laptop = await Laptop.findByIdAndUpdate(req.params.id, { state: '0' }, { new: true });
    res.json(laptop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
