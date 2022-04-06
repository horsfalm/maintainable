const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const customerSchema = new Schema(
  {
    
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    phonenumber:{
        type: Number,
        required: true
    },
    streetname:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    region:{
        type: String,
        required: true
    },
    postCode:{
        type: String,
        required: true
    },
    acs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Ac'
      }
    ],
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Customer = model('Customer', customerSchema);

module.exports = Customer;
