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
        inDoorAcBarnd: String,
        inDoorModel:String,
        inDoorserialNumber: Number,
        // outdoor AC info
        outDoorAcBarnd: String,
        outDoorModel:String,
        outDoorserialNumber: Number,
    },
    {
        toJSON: {
            getters: true
        }
    }
);



const Ac = model('Ac', acSchema);

module.exports = Ac;
