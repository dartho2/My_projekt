const mongoose = require('mongoose');

const yogaSchema = mongoose.Schema({
  title: { type: String, required: true },
  point1: { type: String, required: true },
  point2: { type: String, required: true },
  point3: { type: String, required: true },
  point4: { type: String, required: true },
  point5: { type: String, required: true },
  point6: { type: String, required: true }
});

module.exports = mongoose.model('Yoga', yogaSchema);
