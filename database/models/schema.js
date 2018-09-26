const mongoose = require('mongoose');
const { Schema } = mongoose;
const { DBURL } = require('./config');

mongoose.connect(DBURL('trails'));

const trailheadSchema = new Schema({
  name: { type: String, default: '' },
  location: { type: 'Point', coordinates: [Number] },
  createdAt: { type: Date, default: Date.now },
});

const Trailheads = mongoose.model('trailhead', trailheadSchema);

module.exports = Trailheads;
