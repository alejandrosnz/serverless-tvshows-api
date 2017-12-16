const mongoose = require('mongoose');

const model = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  network: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  hidden: {
    type: Boolean,
    required: true
  },
  meta: {
    seasons: Number,
    episodes: Number
  }
});

module.exports = model;
