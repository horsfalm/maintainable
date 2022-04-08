const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const acSchema = new Schema(
  {
    acName: {
      type: String
    },
    acBrand: {
      type: String
    },
    outModel: {
      type: String
    },
    outSerial: {
      type: String
    },
    inModel: {
      type: String
    },
    inSerial: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Ac = model('Ac', acSchema);

module.exports = Ac;
