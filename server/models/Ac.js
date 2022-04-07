const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const acSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        // indoor AC info
        inDoorAcBarnd: {
            type: String,
            required: true
        },
        inDoorModel: {
            type: String,
            required: true
        },
        inDoorserialNumber: {
            type: String,
            required: true
        },
        // outdoor AC info
        outDoorAcBarnd:{
            type: String,
            required: true
        },
        outDoorModel: {
            type: String,
            required: true
        },
        outDoorserialNumber: {
            type: String,
            required: true
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
