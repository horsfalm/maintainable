const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reportSchema = new Schema(
  {
    reportText: {
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

const Report = model('Report', reportSchema);

module.exports = Report;