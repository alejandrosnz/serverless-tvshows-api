const mongoose = require('mongoose');
const validator = require('validator');

const model = mongoose.model('TvShow', {
  name: {
    type: String,
    required: true,
    validate: {
      validator(name) {
        return validator.isAlphanumeric(name);
      }
    }
  },
  description: {
    type: String,
    required: false,
    validate: {
      validator(description) {
        return validator.isAlphanumeric(description);
      }
    }
  },
  network: {
    type: String,
    required: true,
    validate: {
      validator(network) {
        return validator.isAlphanumeric(network);
      }
    }
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator(year) {
        return validator.isInt(year);
      }
    }
  },
  hidden: {
    type: Boolean,
    required: true,
    validate: {
      validator(hidden) {
        return validator.isBoolean(hidden);
      }
    }
  },
  meta: {
    seasons: Number,
    episodes: Number
  }
});

module.exports = model;
