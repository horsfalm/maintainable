const { Schema, model } = require('mongoose');
const acSchema = require('./Ac');

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      minlength: 10
    },
    acs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Ac'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Customer = model('Customer', customerSchema);

module.exports = Customer;