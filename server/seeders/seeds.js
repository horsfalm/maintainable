const db = require('../config/connection');
const { Technician } = require('../models');

const TechnicianData = require('./TechnicianData.json');

db.once('open', async () => {
  try {
    // clean database
    await Technician.deleteMany({});
    // bulk create each model
    await Technician.create(TechnicianData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
