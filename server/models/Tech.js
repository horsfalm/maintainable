const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const techSchema = new Schema(
  {
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
      minlength: 6
    },
    
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
techSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
techSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};



const Tech = model('Tech', techSchema);

module.exports = Tech;
