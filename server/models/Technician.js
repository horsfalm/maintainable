const { Schema, model } = require('mongoose');

const TechnicianSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

const Technician = model('Technician', TechnicianSchema);

module.exports = Technician;